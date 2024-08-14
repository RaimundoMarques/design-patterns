import { MyDatabaseModule } from "./diagramas/db/my-database-module";
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from "./module_a";

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: "maria fernanda", age: 36 });
myDatabaseClassic.add({ name: "jose aldo", age: 16 });
myDatabaseClassic.add({ name: "ricardo eletron", age: 56 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
