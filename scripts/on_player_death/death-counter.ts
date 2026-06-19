import { Player, world } from '@minecraft/server';

const DEATH_COUNT_PROP = 'cront:deathCount';

const getDeathCount = (player: Player): number => {
  const stored = player.getDynamicProperty(DEATH_COUNT_PROP);
  return typeof stored === 'number' ? stored : 0;
};

const recordDeath = (player: Player): number => {
  const deathCount = getDeathCount(player) + 1;
  player.setDynamicProperty(DEATH_COUNT_PROP, deathCount);
  return deathCount;
};

const displayDeathCounter = (player: Player): void => {
  const deathCount = recordDeath(player);
  const timesText = deathCount === 1 ? 'time' : 'times';

  world.sendMessage(`${player.name} has died ${deathCount} ${timesText}`);
};

export default displayDeathCounter;
