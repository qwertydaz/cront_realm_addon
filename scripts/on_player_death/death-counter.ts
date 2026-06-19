import { Player, world } from '@minecraft/server';

const getDeathCount = (player: Player): number => {
  const playerScoreboard = player.scoreboardIdentity;
  if (!playerScoreboard) return 0;

  const deathsObjective = world.scoreboard.getObjective('deaths');
  if (!deathsObjective) return 0;

  const deathCount = deathsObjective.getScore(playerScoreboard);
  return typeof deathCount === 'number' ? deathCount : 0;
};

const displayDeathCounter = (player: Player) => {
  const deathCount = getDeathCount(player);
  const timesText = deathCount === 1 ? 'time' : 'times';

  world.sendMessage(`${player.name} has died ${deathCount} ${timesText}.`);
};

export default displayDeathCounter;
