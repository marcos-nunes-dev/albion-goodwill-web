'use client';

import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Image from 'next/image';

export interface SearchableSelectOption {
  value: string;
  label: string;
  searchTerms: string[];
  uniqueName: string;
}

interface SearchableSelectProps {
  options: SearchableSelectOption[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

export function SearchableSelect({
  options,
  value,
  onValueChange,
  placeholder = 'Select an option...',
}: SearchableSelectProps) {
  const selectedOption = options.find(option => option.value === value);

  return (
    <Autocomplete
      value={selectedOption || null}
      onChange={(_, newValue) => {
        onValueChange(newValue?.value || '');
      }}
      options={options}
      getOptionLabel={(option) => option.label}
      filterOptions={(options, { inputValue }) => {
        if (!inputValue) return options;
        
        const query = inputValue.toLowerCase();
        return options.filter(option => 
          option.searchTerms.some(term => term.toLowerCase().includes(query))
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          size="small"
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '40px',
              '& fieldset': {
                borderColor: '#e5e7eb',
              },
              '&:hover fieldset': {
                borderColor: '#e5e7eb',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#e5e7eb',
              },
              backgroundColor: 'white',
              color: 'var(--foreground)',
            },
            '& .MuiInputLabel-root': {
              color: 'var(--muted-foreground)',
            },
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} className="px-3 py-2 hover:bg-accent hover:text-accent-foreground flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image
              src={`https://render.albiononline.com/v1/item/${option.uniqueName}.png`}
              alt={option.label}
              fill
              className="object-contain"
            />
          </div>
          <span>{option.label}</span>
        </li>
      )}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      className="w-full"
    />
  );
} 