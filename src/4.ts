class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
};


class Person{
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
};

abstract class House {
    protected door: boolean;
    protected key: Key;
    private tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person);
            console.log("Людина заходить.");
        } else {
             console.log("Двері зачинені.");
        }
    }
    abstract openDoor(key: Key): void;
};

class MyHouse extends House{
    openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Двері відчинені.");
        } else {
            console.log("Ключ не підійшов до двері.");
        }
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};