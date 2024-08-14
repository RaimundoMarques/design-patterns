import { MyDatabaseFunction } from "./diagramas/db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: "raimundo marques", age: 36 });
myDatabaseClassic.add({ name: "joao jose", age: 16 });
myDatabaseClassic.add({ name: "mundico dos teclados", age: 56 });
myDatabaseClassic.show();
console.log("-----------------------");

export { myDatabaseClassic };
