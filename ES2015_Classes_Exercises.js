class Vehicle {
    constructor(make, model, year) {
        if (typeof(make) !== "string" || typeof(model) !== "string") {
            throw new Error("Inputs for both make and model must be strings!");
        }

        if (year <= 0 || typeof(year) !== "number") {
            throw new Error("The input for year must be a positive integer!")
        }

        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        const {make, model, year} = this;
        return `The vehicle is a ${make} ${model} from ${year}.`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!"
    }
}

class Garage {
    constructor(capacity) {
        if (capacity <= 0 || typeof(capacity) !== "number" || !capacity) {
            throw new Error("Please provide an input of a positive integer for capacity to the garage!")
        }

        this.vehicles = [];
        this.capacity = capacity;
    }

    add(vehicle) {
        if (!(vehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!";
        }else if (this.vehicles.length === this.capacity) {
            return "Sorry, we're full.";
        }else {
            this.vehicles.push(vehicle);
            return "Vehicle added!"
        }
    }
}
