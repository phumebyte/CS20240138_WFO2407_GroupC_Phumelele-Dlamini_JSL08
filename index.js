// 1. Create a variable to store the singleton instance of the bank branch.
let bankBranchInstance;

// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {
    constructor(branchInfo) {
        // 3. In the constructor, check if the instance is null.
        if (!bankBranchInstance) {
            // If no instance exists, create one and assign it to the variable.
            this.branchInfo = branchInfo;
            bankBranchInstance = this;  // Assign the newly created instance to the variable
        }
        // Return the singleton instance (either newly created or the existing one)
        return bankBranchInstance;
    }

    // 4. Add methods to manage branch-related information
    getBranchInfo() {
        return this.branchInfo;
    }

    closeBranch() {
        console.log("This branch has been closed.");
    }

    updateBranchInfo(newInfo) {
        this.branchInfo = newInfo;
        console.log("Branch info has been updated to:", this.branchInfo);
    }
}

// 5. Usage section: Create instances of the `BankBranch` class
const branchA = new BankBranch('Downtown Branch');
console.log(branchA.getBranchInfo()); // Output: Downtown Branch

const branchB = new BankBranch('Uptown Branch'); // Even though we're trying to create branchB, it will still be the same instance
console.log(branchB.getBranchInfo()); // Output: Downtown Branch (still the same singleton instance)

// Updating the branch information (it will affect both branchA and branchB because they are the same instance)
branchA.updateBranchInfo('Updated Downtown Branch');
console.log(branchA.getBranchInfo()); // Output: Updated Downtown Branch
console.log(branchB.getBranchInfo()); // Output: Updated Downtown Branch (same instance)

// Verifying that branchA and branchB are the same instance
console.log(branchA === branchB); // Output: true

// Example of closing a branch (just to add functionality)
branchA.closeBranch(); // Output: This branch has been closed.


// 5. In the usage section:
//    - Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
//    - Use the `getBranchInfo` method to retrieve branch information from the instances.
//    - Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.

// This pseudo-code provides a step-by-step explanation of how to implement the Singleton Pattern for managing a single instance of the `BankBranch` class throughout the application, ensuring that multiple instances refer to the same object.

// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.
