// Define the Car class
class Car {
    // Constructor to initialize the car's attributes
    constructor(brand, color) {
        this.brand = brand; // Attribute: Brand of the car
        this.color = color; // Attribute: Color of the car
        this.speed = 0;     // Attribute: Speed, initialized to 0
    }

    // Method: Start driving
    drive() {
        this.speed = 60; // Set speed to 60 when driving
        console.log(`${this.brand} is driving at ${this.speed} km/h.`);
    }

    // Method: Stop the car
    stop() {
        this.speed = 0; // Set speed to 0 when stopping
        console.log(`${this.brand} has stopped.`);
    }
}

// Create an object (instance) of the Car class
const myCar = new Car("Toyota", "red");

// Use the object's methods
myCar.drive(); // Output: "Toyota is driving at 60 km/h."
myCar.stop();  // Output: "Toyota has stopped."

// Access attributes
console.log(`My car is a ${myCar.color} ${myCar.brand}.`); 
// Output: "My car is a red Toyota."