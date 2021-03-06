import { CombatantPF2e, EncounterPF2e } from "@module/encounter";
import { ActorPF2e } from "@actor";
import { shouldIHandleThis } from "../../utils";

type UpdateRow = { type: string; data: { active: any; slug: string; value: { value: number } } };

export async function moveSelectedAheadOfCurrent(selectedCombatant: CombatantPF2e): Promise<void> {
    //TODO Ugly hack, might want to do a PR to expose the code in encounter-tracker#setInitiativeFromDrop?
    //TODO Handle moving several tokens at once? For now, just take the first selected token.
    const combat = game?.combat;
    if (combat && selectedCombatant && selectedCombatant !== combat?.combatant) {
        const previous = combat?.combatants
            .map((c) => ({
                initiative: c.initiative || 0,
            }))
            .sort((a, b) => a.initiative - b.initiative)
            .find((c) => {
                return c.initiative > <number>combat?.combatant?.initiative;
            })?.initiative;
        const current = <number>combat?.combatant?.initiative;
        const initiative = !previous || previous < current ? current + 2 : <number>((previous + current) / 2);
        await combat?.setInitiative(<string>selectedCombatant?.id, initiative);
    }
}

export async function moveOnZeroHP(
    actor: ActorPF2e,
    update: Record<string, string>,
    combat: EncounterPF2e,
    hp: number
): Promise<void> {
    const combatant = <CombatantPF2e>(
        combat.getCombatantByToken(
            actor.isToken
                ? <string>actor.token?.id
                : <string>canvas?.scene?.data.tokens.find((t) => t.actor?.id === actor.id)?.id
        )
    );
    if (
        combatant &&
        shouldIHandleThis(combatant.isOwner ? game.user?.id : null) &&
        combatant !== combat.combatant &&
        hp > 0 &&
        getProperty(update, "data.attributes.hp.value") <= 0
    ) {
        await moveSelectedAheadOfCurrent(combatant);
    }
}
