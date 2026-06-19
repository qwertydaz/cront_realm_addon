import { Player, ScoreboardObjective, world } from '@minecraft/server';

const DEATHS_OBJECTIVE_ID = 'deaths';

const ensureDeathsObjective = (): ScoreboardObjective => {
  const existing = world.scoreboard.getObjective(DEATHS_OBJECTIVE_ID);
  if (existing) return existing;

  return world.scoreboard.addObjective(DEATHS_OBJECTIVE_ID, 'Deaths');
};

export const registerPlayerDeathTracking = (player: Player): void => {
  const deathsObjective = ensureDeathsObjective();

  if (!deathsObjective.hasParticipant(player)) {
    deathsObjective.setScore(player, 0);
  }
};

const displayDeathCounter = (player: Player) => {
  const deathsObjective = ensureDeathsObjective();
  const deathCount = deathsObjective.addScore(player, 1);
  const timesText = deathCount === 1 ? 'time' : 'times';

  world.sendMessage(`${player.name} has died ${deathCount} ${timesText}.`);
};

export default displayDeathCounter;
