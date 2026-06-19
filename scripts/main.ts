import { world } from '@minecraft/server';
import * as eventHandlers from './event_handlers/event-handlers';

// trigger when a player joins/respawns
world.afterEvents.playerSpawn.subscribe(eventHandlers.handlePlayerSpawn);

// trigger when an entity dies
world.afterEvents.entityDie.subscribe(eventHandlers.handlePlayerDeath);
