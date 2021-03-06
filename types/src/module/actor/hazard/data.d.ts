import { SaveData } from "@actor/creature/data";
import { SaveType } from "@actor/data";
import { ActorSystemData, BaseActorAttributes, BaseActorDataPF2e, BaseActorSourcePF2e, BaseHitPointsData, BaseTraitsData } from "@actor/data/base";
import { ZeroToTwo } from "@module/data";
import { HazardPF2e } from ".";
/** The stored source data of a hazard actor */
export declare type HazardSource = BaseActorSourcePF2e<"hazard", HazardSystemData>;
export declare class HazardData extends BaseActorDataPF2e<HazardPF2e> {
    static DEFAULT_ICON: ImagePath;
}
/** Wrapper type for hazard-specific data. */
export interface HazardData extends Omit<HazardSource, "effects" | "flags" | "items" | "token"> {
    type: HazardSource["type"];
    data: HazardSource["data"];
    readonly _source: HazardSource;
}
interface HazardAttributes extends BaseActorAttributes {
    ac: {
        value: number;
    };
    hasHealth: boolean;
    hp: HazardHitPoints;
    hardness: number;
    initiative: {
        roll?: undefined;
        tiebreakPriority: ZeroToTwo;
    };
    stealth: {
        value: number;
        details: string;
    };
}
interface HazardHitPoints extends Required<BaseHitPointsData> {
    negativeHealing: boolean;
    brokenThreshold: number;
}
/** The raw information contained within the actor data object for hazards. */
export interface HazardSystemData extends ActorSystemData {
    details: {
        isComplex: boolean;
        level: {
            value: number;
        };
        disable: string;
        description: string;
        reset: string;
        routine: string;
    };
    attributes: HazardAttributes;
    saves: HazardSaves;
    /** Traits, languages, and other information. */
    traits: BaseTraitsData;
}
declare type HazardSaves = Record<SaveType, SaveData>;
export {};
