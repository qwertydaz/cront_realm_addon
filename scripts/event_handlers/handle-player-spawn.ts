import { PlayerSpawnAfterEvent } from '@minecraft/server';
import { registerPlayerDeathTracking } from '../on_player_death/death-counter';
import displayWelcomeMessage from '../on_player_spawn/welcome-message';

const handlePlayerSpawn = (event: PlayerSpawnAfterEvent) => {
  registerPlayerDeathTracking(event.player);

  if (!event.initialSpawn) return; // ignore respawns

  displayWelcomeMessage(event.player);
};

export default handlePlayerSpawn;
