import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModule } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Roberto', age: 23 });
myDatabaseClassic.add({ name: 'Joana', age: 22 });
myDatabaseClassic.add({ name: 'Pablo', age: 22 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModule);
