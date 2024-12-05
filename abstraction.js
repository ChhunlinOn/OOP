// Abstract class Cake
class Cake {
    constructor(type) {
        if (this.constructor === Cake) {
            throw new Error("Cannot instantiate an abstract class!");
        }
        this.type = type; // Type of cake
    }

    // Abstract method to cook the cake
    cook() {
        throw new Error("Method 'cook()' must be implemented.");
    }

    // Abstract method to list ingredients
    ingredients() {
        throw new Error("Method 'ingredients()' must be implemented.");
    }

    // Public method to display cake type
    displayType() {
        console.log(`This is a ${this.type} cake.`); // Output: "This is a Chocolate cake." or "This is a Vanilla cake."
    }
}

// Concrete class ChocolateCake
class ChocolateCake extends Cake {
    constructor() {
        super("Chocolate");
        console.log("ChocolateCake object created."); // Output: "ChocolateCake object created."
    }

    // Implement the cook method
    cook() {
        console.log("Cooking the chocolate cake: Bake at 350°F for 30 minutes."); 
        // Output: "Cooking the chocolate cake: Bake at 350°F for 30 minutes."
    }

    // Implement the ingredients method
    ingredients() {
        console.log("Ingredients: Flour, Sugar, Cocoa Powder, Eggs, Butter, Milk."); 
        // Output: "Ingredients: Flour, Sugar, Cocoa Powder, Eggs, Butter, Milk."
    }
}

// Concrete class VanillaCake
class VanillaCake extends Cake {
    constructor() {
        super("Vanilla");
        console.log("VanillaCake object created."); // Output: "VanillaCake object created."
    }

    // Implement the cook method
    cook() {
        console.log("Cooking the vanilla cake: Bake at 325°F for 25 minutes."); 
        // Output: "Cooking the vanilla cake: Bake at 325°F for 25 minutes."
    }

    // Implement the ingredients method
    ingredients() {
        console.log("Ingredients: Flour, Sugar, Eggs, Butter, Vanilla Extract, Milk."); 
        // Output: "Ingredients: Flour, Sugar, Eggs, Butter, Vanilla Extract, Milk."
    }
}

// Example usage
console.log("Attempting to create a base Cake object:"); // Output: "Attempting to create a base Cake object:"
try {
    const baseCake = new Cake("Generic"); // Throws an error (Cannot instantiate abstract class)
} catch (error) {
    console.error(error.message); // Output: "Cannot instantiate an abstract class!"
}

console.log("\nCreating a ChocolateCake object:"); // Output: "Creating a ChocolateCake object:"
const chocolateCake = new ChocolateCake();
chocolateCake.displayType(); // Output: "This is a Chocolate cake."
chocolateCake.ingredients(); // Output: "Ingredients: Flour, Sugar, Cocoa Powder, Eggs, Butter, Milk."
chocolateCake.cook();        // Output: "Cooking the chocolate cake: Bake at 350°F for 30 minutes."

console.log("\nCreating a VanillaCake object:"); // Output: "Creating a VanillaCake object:"
const vanillaCake = new VanillaCake();
vanillaCake.displayType();   // Output: "This is a Vanilla cake."
vanillaCake.ingredients();   // Output: "Ingredients: Flour, Sugar, Eggs, Butter, Vanilla Extract, Milk."
vanillaCake.cook();          // Output: "Cooking the vanilla cake: Bake at 325°F for 25 minutes."