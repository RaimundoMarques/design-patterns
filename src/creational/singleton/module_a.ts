import { MyDatabaseModule } from "./diagramas/db/my-database-module";

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: "raimundo marques", age: 36 });
myDatabaseClassic.add({ name: "joao jose", age: 16 });
myDatabaseClassic.add({ name: "mundico dos teclados", age: 56 });
myDatabaseClassic.show();
console.log("-----------------------");

export { myDatabaseClassic };
