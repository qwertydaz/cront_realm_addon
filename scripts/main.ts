import { world } from '@minecraft/server';
import * as eventHandlers from './event_handlers/event-handlers';

// trigger when a player joins/respawns
world.afterEvents.playerSpawn.subscribe(eventHandlers.handlePlayerSpawn);
