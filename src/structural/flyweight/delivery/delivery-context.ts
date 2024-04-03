import { DeliveryFactor } from './delivery-factor';

export const deliveryContext = function (
  factory: DeliveryFactor,
  name: string,
  number: string,
  street: string,
  city: string,
): void {
  const location = factory.makeLocation({ street, city });
  location.deliver(name, number);
};
