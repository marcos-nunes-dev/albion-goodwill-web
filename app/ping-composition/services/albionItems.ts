import { weapons } from '../data/weapons';
import { AlbionItem } from '../types';

class AlbionItems {
    getWeapons(): AlbionItem[] {
        return weapons;
    }

    validateWeaponName(weaponName: string): boolean {
        return weapons.some(weapon => 
            Object.values(weapon.LocalizedNames).some(name => 
                name.toLowerCase() === weaponName.toLowerCase()
            )
        );
    }
}

export const albionItems = new AlbionItems();