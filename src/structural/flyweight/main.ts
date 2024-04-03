import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactor } from './delivery/delivery-factor';

const factory = new DeliveryFactor();
deliveryContext(factory, 'Luiz', '20A', 'Av Brasil', 'SP');

console.log(factory.getLocation());
