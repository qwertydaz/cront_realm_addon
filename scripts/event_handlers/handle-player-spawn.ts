import { PlayerSpawnAfterEvent } from '@minecraft/server';
import handleEntityRespawn from './handle-entity-respawn';
import displayWelcomeMessage from '../on_player_spawn/welcome-message';

const handlePlayerSpawn = (event: PlayerSpawnAfterEvent) => {
  if (!event.initialSpawn) {
    handleEntityRespawn(event);
    return;
  }

  displayWelcomeMessage(event.player);
};

export default handlePlayerSpawn;
