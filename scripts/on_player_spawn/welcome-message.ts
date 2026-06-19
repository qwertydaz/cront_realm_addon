import { Player, world } from '@minecraft/server';

const displayWelcomeMessage = (player: Player) => {
  world.sendMessage(`Hello ${player.name}-chan <3`);
};

export default displayWelcomeMessage;
