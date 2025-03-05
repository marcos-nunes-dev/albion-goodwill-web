import * as React from "react"
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface SearchableSelectOption {
  value: string
  label: string
  searchTerms?: string[]
}

interface SearchableSelectProps {
  options: SearchableSelectOption[]
  value?: string
  onValueChange: (value: string) => void
  placeholder?: string
}

export function SearchableSelect({
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
}: SearchableSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredOptions = React.useMemo(() => {
    if (!searchQuery) return options

    const search = searchQuery.toLowerCase()
    return options.filter((option) => {
      const searchableTerms = [
        option.label.toLowerCase(),
        ...(option.searchTerms?.map(term => term.toLowerCase()) || [])
      ]
      return searchableTerms.some(term => term.includes(search))
    })
  }, [options, searchQuery])

  const selectedOption = options.find(opt => opt.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selectedOption ? selectedOption.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-2" align="start">
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-2"
        />
        <ScrollArea className="h-[200px]">
          <div className="space-y-1">
            {filteredOptions.length === 0 ? (
              <div className="text-center py-4 text-muted-foreground">
                No options found
              </div>
            ) : (
              filteredOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={value === option.value ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    onValueChange(option.value)
                    setSearchQuery("")
                    setOpen(false)
                  }}
                >
                  {option.label}
                </Button>
              ))
            )}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}
