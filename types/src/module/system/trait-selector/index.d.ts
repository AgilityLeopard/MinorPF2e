export { BasicConstructorOptions, TagSelectorBasic } from "./basic";
export { ResistanceSelector } from "./resistances";
export { SenseSelector } from "./senses";
export { SpeedSelector } from "./speeds";
export { WeaknessSelector } from "./weaknesses";
export { TagSelectorOptions } from "./base";
export declare const TAG_SELECTOR_TYPES: readonly ["basic", "resistances", "senses", "speed-types", "weaknesses"];
export declare type TagSelectorType = typeof TAG_SELECTOR_TYPES[number];
export declare const SELECTABLE_TAG_FIELDS: readonly ["abilities", "actionTraits", "skills", "martialSkills", "currencies", "saves", "armorTraits", "preciousMaterialGrades", "armorPotencyRunes", "armorResiliencyRunes", "armorPropertyRunes", "weaponPotencyRunes", "weaponStrikingRunes", "weaponPropertyRunes", "rarityTraits", "damageTypes", "damageCategories", "weaponDamage", "healingTypes", "weaponCategories", "weaponGroups", "baseWeaponTypes", "consumableTraits", "weaponDescriptions", "weaponTraits", "otherWeaponTags", "traitsDescriptions", "weaponHands", "equipmentTraits", "itemBonuses", "damageDie", "weaponMAP", "weaponReload", "armorTypes", "armorGroups", "consumableTypes", "magicTraditions", "preparationType", "spellTraits", "featTraits", "areaTypes", "areaSizes", "classTraits", "ancestryTraits", "alignments", "skillList", "spellComponents", "spellTypes", "magicTraditions", "spellLevels", "featTypes", "actionTypes", "actionsNumber", "actionCategories", "proficiencyLevels", "actorSizes", "bulkTypes", "conditionTypes", "immunityTypes", "resistanceTypes", "weaknessTypes", "languages", "creatureTraits", "monsterTraits", "attackEffects", "hazardTraits", "attributes", "speedTypes", "senses", "preciousMaterials", "prerequisitePlaceholders", "ancestryItemTraits", "levels", "dcAdjustments", "npcAttackTraits", "vehicleTraits"];
export declare type SelectableTagField = typeof SELECTABLE_TAG_FIELDS[number];