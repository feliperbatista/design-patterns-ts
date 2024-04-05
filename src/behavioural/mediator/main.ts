import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Camiseta', price: 50 });
seller1.addProduct({ id: '2', name: 'Caneta', price: 5 });
const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'Carro', price: 50000 });
seller2.addProduct({ id: '4', name: 'Lapis', price: 2 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('1');
buyer.viewProducts();
