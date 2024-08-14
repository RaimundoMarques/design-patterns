import { MyDatabaseFunction } from "./diagramas/db/my-database-function";
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from "./module_a";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: "maria fernanda", age: 36 });
myDatabaseClassic.add({ name: "jose aldo", age: 16 });
myDatabaseClassic.add({ name: "ricardo eletron", age: 56 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
