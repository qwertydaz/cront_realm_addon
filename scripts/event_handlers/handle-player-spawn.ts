import { PlayerSpawnAfterEvent } from '@minecraft/server';
import displayWelcomeMessage from '../on_player_spawn/welcome-message';

const handlePlayerSpawn = (event: PlayerSpawnAfterEvent) => {
  if (!event.initialSpawn) return; // ignore respawns

  displayWelcomeMessage(event.player);
};

export default handlePlayerSpawn;
