import { PlayerSpawnAfterEvent } from '@minecraft/server';
import displayDeathCounter from '../on_player_death/death-counter';

const handleEntityRespawn = (event: PlayerSpawnAfterEvent) => {
  displayDeathCounter(event.player);
};

export default handleEntityRespawn;
