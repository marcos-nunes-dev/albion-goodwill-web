export interface AlbionItem {
    LocalizationNameVariable: string;
    LocalizationDescriptionVariable: string;
    LocalizedNames: Record<string, string>;
    LocalizedDescriptions: Record<string, string>;
    Index: string;
    UniqueName: string;
}

export interface Weapon {
    type: string;
    players_required: number;
    free_role: boolean;
}

export interface Party {
    name: string;
    weapons: Weapon[];
}

export interface PingComposition {
    title: string;
    description: string;
    parties: Party[];
}