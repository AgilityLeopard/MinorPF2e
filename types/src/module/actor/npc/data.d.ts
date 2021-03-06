import { Abilities, BaseCreatureData, BaseCreatureSource, CreatureAttributes, CreatureHitPoints, CreatureInitiative, CreatureSystemData, HeldShieldData, SaveData, SkillData } from "@actor/creature/data";
import { AbilityString, ActorFlagsPF2e, ArmorClassData, DexterityModifierCapData, PerceptionData, StrikeData } from "@actor/data/base";
import { MeleePF2e } from "@item";
import { StatisticModifier } from "@actor/modifiers";
import type { NPCPF2e } from ".";
import { Alignment } from "@actor/creature/types";
export interface NPCSource extends BaseCreatureSource<"npc", NPCSystemData> {
    flags: DeepPartial<NPCFlags>;
}
export declare class NPCData extends BaseCreatureData<NPCPF2e, NPCSystemData> {
    static DEFAULT_ICON: ImagePath;
}
export interface NPCData extends Omit<NPCSource, "effects" | "flags" | "items" | "token"> {
    readonly type: NPCSource["type"];
    data: NPCSource["data"];
    flags: NPCFlags;
    readonly _source: NPCSource;
}
declare type NPCFlags = ActorFlagsPF2e & {
    pf2e: {
        lootable: boolean;
    };
};
/** The raw information contained within the actor data object for NPCs. */
export interface NPCSystemData extends CreatureSystemData {
    /** The six primary ability scores. */
    abilities: Abilities;
    /** The three saves for NPCs. NPC saves have a 'base' score which is the score before applying custom modifiers. */
    saves: NPCSaves;
    /** Details about this actor, such as alignment or ancestry. */
    details: {
        /** The alignment this creature has. */
        alignment: {
            value: Alignment;
        };
        /** The creature level for this actor, and the minimum level (irrelevant for NPCs). */
        level: {
            base?: number;
            value: number;
        };
        /** Which sourcebook this creature comes from. */
        source: {
            value: string;
            author?: string;
        };
        /** The type of this creature (such as 'undead') */
        creatureType: string;
        /** A very brief description */
        blurb: string;
        /** The in depth descripton and any other public notes */
        publicNotes: string;
        /** The private GM notes */
        privateNotes: string;
    };
    /** Any special attributes for this NPC, such as AC or health. */
    attributes: NPCAttributes;
    /** Skills that this actor possesses; skills the actor is actually trained on are marked 'visible'. */
    skills: Record<string, NPCSkillData>;
    /** Special strikes which the creature can take. */
    actions: NPCStrike[];
    resources: {
        focus?: {
            value: number;
            max: number;
        };
    };
}
/** The full data for a NPC action (used primarily for strikes.) */
export declare type NPCStrike = StatisticModifier & Omit<StrikeData, "item"> & {
    item?: Embedded<MeleePF2e>;
    /** The type of attack as a localization string */
    attackRollType?: string;
    /** The id of the item this strike is generated from */
    sourceId?: string;
    /** A list of all damage roll parts */
    damageBreakdown?: string[];
    /** Additional effects from a successful strike, like "Grab" */
    additionalEffects: {
        tag: string;
        label: string;
    }[];
    /** A melee usage of a firearm: not available on NPC strikes */
    meleeUsage?: never;
};
/** AC data with an additional "base" value */
export interface NPCArmorClass extends StatisticModifier, ArmorClassData {
    base?: number;
}
/** Save data with an additional "base" value */
export interface NPCSaveData extends SaveData {
    ability: AbilityString;
    base?: number;
    saveDetail: string;
}
/** Saves with NPCSaveData */
interface NPCSaves {
    fortitude: NPCSaveData;
    reflex: NPCSaveData;
    will: NPCSaveData;
}
export interface NPCHitPoints extends CreatureHitPoints {
    base?: number;
}
/** Perception data with an additional "base" value */
export interface NPCPerception extends PerceptionData {
    base?: number;
}
/** Skill data with a "base" value and whether the skill should be rendered (visible) */
export interface NPCSkillData extends SkillData {
    base?: number;
    visible?: boolean;
    label: string;
    expanded: string;
}
export interface NPCAttributes extends CreatureAttributes {
    ac: NPCArmorClass;
    hp: NPCHitPoints;
    perception: NPCPerception;
    /** Sources of the dexterity modifier cap to AC */
    dexCap: DexterityModifierCapData[];
    initiative: CreatureInitiative;
    /**
     * Data related to the currently equipped shield. This is copied from the shield data itself, and exists to
     * allow for the shield health to be shown in a token.
     */
    shield: HeldShieldData;
    /** Textual information about any special benefits that apply to all saves. */
    allSaves: {
        value: string;
    };
    familiarAbilities: StatisticModifier;
}
export {};
