import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const bedroomLight = new SmartHouseLight('Luz quarto');

// Command
const lightPowerCommand = new LightPowerCommand(bedroomLight);
const intensityCommand = new LightIntensityCommand(bedroomLight);

// Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', lightPowerCommand);
smartHouseApp.addCommand('btn-2', intensityCommand);

smartHouseApp.executeCommand('btn-1');

for (let i = 0; i < 5; i++) {
  smartHouseApp.executeCommand('btn-2');
}

for (let i = 0; i < 3; i++) {
  smartHouseApp.undoCommand('btn-2');
}
