import { CreatureType } from "@actor/creature/data";
import type { CharacterData, CharacterSource } from "@actor/character/data";
import type { HazardData, HazardSource } from "@actor/hazard/data";
import type { LootData, LootSource } from "@actor/loot/data";
import type { VehicleData, VehicleSource } from "@actor/vehicle/data";
import type { FamiliarData, FamiliarSource } from "@actor/familiar/data";
import type { NPCData, NPCSource } from "@actor/npc/data";
import { AbilityString } from "./base";
import { SAVE_TYPES } from "./values";
import { DCSlug, SaveType } from "./types";
export declare type CreatureData = CharacterData | NPCData | FamiliarData;
export declare type ActorType = CreatureType | "hazard" | "loot" | "vehicle";
export declare type ActorDataPF2e = CreatureData | HazardData | LootData | VehicleData;
export declare type ActorSourcePF2e = ActorDataPF2e["_source"];
export declare type ModeOfBeing = "living" | "undead" | "construct" | "object";
export interface RollInitiativeOptionsPF2e extends RollInitiativeOptions {
    secret?: boolean;
    skipDialog?: boolean;
}
export { AbilityString, CharacterData, CharacterSource, DCSlug, NPCData, NPCSource, FamiliarData, FamiliarSource, HazardData, HazardSource, LootData, LootSource, SaveType, SAVE_TYPES, VehicleData, VehicleSource, };
