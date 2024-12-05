class BankAccount {
    #balance; // Private property for balance

    constructor(owner, initialBalance = 0) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    // Getter method to access balance
    getBalance() {
        return this.#balance;
    }

    // Setter method to modify balance (only positive amounts)
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`${this.owner} deposited $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Public method to withdraw money
    withdraw(amount) {
        if (amount > 0 && this.#balance >= amount) {
            this.#balance -= amount;
            console.log(`${this.owner} withdrew $${amount}. Remaining balance: $${this.#balance}`);
        } else {
            console.log("Insufficient funds or invalid amount.");
        }
    }
}

// Example usage
const myAccount = new BankAccount("Alice", 1000);

console.log(myAccount.owner);
myAccount.deposit(500);   // Output: Alice deposited $500. New balance: $1500
myAccount.withdraw(200);  // Output: Alice withdrew $200. Remaining balance: $1300
myAccount.owner='BOB';
myAccount.deposit(500);   // Output: Alice deposited $500. New balance: $1500
myAccount.withdraw(200);  // Output: Alice withdrew $200. Remaining balance: $1300
console.log(myAccount.owner);
console.log(myAccount.getBalance()); // Output: 1300
