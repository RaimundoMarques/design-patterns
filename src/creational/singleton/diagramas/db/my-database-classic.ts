export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;

  private constructor() {}

  public static getInstance(): MyDatabaseClassic {
    if (MyDatabaseClassic.instance === null) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic.instance;
  }
}

const db1 = MyDatabaseClassic.getInstance();
const db2 = MyDatabaseClassic.getInstance();

console.log(`DB01: ${db1}`);
console.log(`DB02: ${db2}`);
