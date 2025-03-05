'use client';

import { useEffect, useState, useCallback } from 'react';
import { PingComposition, Party, Weapon, AlbionItem } from './types';
import { weapons } from './data/weapons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Plus, Trash2, Download, Search, Users, Sword } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { SearchableSelect } from '@/components/ui/searchable-select';
import { cn } from "@/lib/utils";

export default function PingCompositionBuilder() {
    const [composition, setComposition] = useState<PingComposition>({
        description: '',
        title: '',
        parties: [{ name: 'Main Party', weapons: [] }]
    });

    // Convert weapons to select options with all localized names as search terms
    const weaponOptions = weapons.map(weapon => ({
        value: weapon.LocalizedNames['EN-US'],
        label: weapon.LocalizedNames['EN-US'],
        searchTerms: Object.values(weapon.LocalizedNames)
    }));

    const addParty = () => {
        setComposition(prev => ({
            ...prev,
            parties: [...prev.parties, { name: `Party ${prev.parties.length + 1}`, weapons: [] }]
        }));
    };

    const removeParty = (index: number) => {
        setComposition(prev => ({
            ...prev,
            parties: prev.parties.filter((_, i) => i !== index)
        }));
    };

    const addWeapon = (partyIndex: number) => {
        setComposition(prev => ({
            ...prev,
            parties: prev.parties.map((party, i) => {
                if (i === partyIndex) {
                    return {
                        ...party,
                        weapons: [...party.weapons, { type: '', players_required: 1, free_role: false }]
                    };
                }
                return party;
            })
        }));
    };

    const removeWeapon = (partyIndex: number, weaponIndex: number) => {
        setComposition(prev => ({
            ...prev,
            parties: prev.parties.map((party, i) => {
                if (i === partyIndex) {
                    return {
                        ...party,
                        weapons: party.weapons.filter((_, j) => j !== weaponIndex)
                    };
                }
                return party;
            })
        }));
    };

    const updateWeapon = (partyIndex: number, weaponIndex: number, field: keyof Weapon, value: any) => {
        setComposition(prev => ({
            ...prev,
            parties: prev.parties.map((party, i) => {
                if (i === partyIndex) {
                    return {
                        ...party,
                        weapons: party.weapons.map((weapon, j) => {
                            if (j === weaponIndex) {
                                return { ...weapon, [field]: value };
                            }
                            return weapon;
                        })
                    };
                }
                return party;
            })
        }));
    };

    const exportComposition = () => {
        const jsonString = JSON.stringify(composition, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ping-composition.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto py-8 px-4 space-y-8">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight">Ping Composition Builder</h1>
                        <p className="text-muted-foreground mt-2">Create and manage your Albion Online party compositions</p>
                    </div>
                    <Button onClick={exportComposition} className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Export
                    </Button>
                </div>

                <Separator />

                {/* Composition Details */}
                <Card>
                    <CardHeader>
                        <CardTitle>Composition Details</CardTitle>
                        <CardDescription>Define the basic information about your composition</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    placeholder="Enter composition title"
                                    value={composition.title}
                                    onChange={(e) => setComposition(prev => ({ ...prev, title: e.target.value }))}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Enter composition description"
                                    value={composition.description}
                                    onChange={(e) => setComposition(prev => ({ ...prev, description: e.target.value }))}
                                    className="resize-none"
                                    rows={3}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Parties Section */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">Parties</h2>
                        <Button onClick={addParty} className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Add Party
                        </Button>
                    </div>

                    <ScrollArea className="h-[600px] pr-4">
                        <div className="space-y-4">
                            {composition.parties.map((party, partyIndex) => (
                                <Card key={partyIndex} className="border-2">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                                        <div className="flex items-center gap-4">
                                            <Input
                                                value={party.name}
                                                onChange={(e) => {
                                                    setComposition(prev => ({
                                                        ...prev,
                                                        parties: prev.parties.map((p, i) =>
                                                            i === partyIndex ? { ...p, name: e.target.value } : p
                                                        )
                                                    }));
                                                }}
                                                className="w-48"
                                                placeholder="Party name"
                                            />
                                            <Badge variant="secondary" className="flex items-center gap-1">
                                                <Users className="h-3 w-3" />
                                                {party.weapons.reduce((acc, w) => acc + w.players_required, 0)} players
                                            </Badge>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                onClick={() => addWeapon(partyIndex)}
                                                variant="outline"
                                                size="sm"
                                                className="flex items-center gap-1"
                                            >
                                                <Sword className="h-4 w-4" />
                                                Add Weapon
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                onClick={() => removeParty(partyIndex)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {party.weapons.map((weapon, weaponIndex) => (
                                                <div key={weaponIndex} className="flex items-bottom gap-4 p-4 rounded-lg bg-muted/50">
                                                    <div className="flex-1 space-y-2">
                                                        <Label className="flex items-center gap-2">
                                                            <Sword className="h-4 w-4" />
                                                            Weapon
                                                        </Label>
                                                        <SearchableSelect
                                                            options={weaponOptions}
                                                            value={weapon.type}
                                                            onValueChange={(value) => updateWeapon(partyIndex, weaponIndex, 'type', value)}
                                                            placeholder="Select a weapon..."
                                                        />
                                                    </div>
                                                    <div className="w-32 space-y-2">
                                                        <Label className="flex items-center gap-2">
                                                            <Users className="h-4 w-4" />
                                                            Players
                                                        </Label>
                                                        <Input
                                                            type="number"
                                                            min={1}
                                                            value={weapon.players_required}
                                                            onChange={(e) => updateWeapon(partyIndex, weaponIndex, 'players_required', parseInt(e.target.value))}
                                                            className="w-full"
                                                        />
                                                    </div>
                                                    <div className="w-32 space-y-2 flex flex-col items-center justify-end">
                                                        <Label className="flex items-center gap-2">Free Role</Label>
                                                        <Switch
                                                            checked={weapon.free_role}
                                                            onCheckedChange={(checked) => updateWeapon(partyIndex, weaponIndex, 'free_role', checked)}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col justify-end">
                                                        <Button
                                                            variant="destructive"
                                                            size="icon"
                                                            onClick={() => removeWeapon(partyIndex, weaponIndex)}
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                            {party.weapons.length === 0 && (
                                                <div className="text-center py-8 text-muted-foreground">
                                                    <Sword className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                                    <p>No weapons added yet. Click "Add Weapon" to get started.</p>
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}