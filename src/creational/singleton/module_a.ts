import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Felipe', age: 23 });
myDatabaseClassic.add({ name: 'Eduardo', age: 22 });
myDatabaseClassic.add({ name: 'Mariana', age: 22 });

export { myDatabaseClassic };
