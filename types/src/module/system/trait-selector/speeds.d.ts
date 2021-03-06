/// <reference types="jquery" />
/// <reference types="tooltipster" />
import { ActorPF2e } from "@actor";
import { TagSelectorBase, TagSelectorOptions } from "./base";
import { SelectableTagField } from "./index";

export declare class SpeedSelector extends TagSelectorBase<ActorPF2e> {
    objectProperty: string;
    static get defaultOptions(): TagSelectorOptions;
    protected get configTypes(): readonly SelectableTagField[];
    getData(): any;
    activateListeners($html: JQuery): void;
    protected _updateObject(_event: Event, formData: Record<string, unknown>): Promise<void>;
    protected getUpdateData(formData: Record<string, unknown>): {
        type: string;
        value: string;
    }[];
}
