import { EntityDieAfterEvent, Player } from '@minecraft/server';
import displayDeathCounter from '../on_player_death/death-counter';

const handlePlayerDeath = (event: EntityDieAfterEvent) => {
  if (event.deadEntity.typeId !== 'minecraft:player') return; // ignore non-player deaths

  const player = event.deadEntity as Player;
  displayDeathCounter(player);
};

export default handlePlayerDeath;
