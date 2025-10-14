// Each account is an object with name, balance, and transactions (array).

// Functions:

// Deposit money (adds a transaction)

// Withdraw money (checks if balance is enough, then subtracts)

// Show balance and transaction history


const account = [];


let id = 1;


const addAccountDetails = (name, balance) => {
    const deposit = {
       id: id++,
       name: name,
       balance: balance,
       transaction: 'N/A'
    }

    account.push(deposit)

    console.log(account);
}



const withdraw = (name, amount) => {

    let currentAccount = null;

    let feedbackMessage = null;


    for(let i = 0; i < account.length; i++) {
        let userAccount = account[i];

        if(userAccount.name === name) {
            currentAccount = userAccount
        }
    }

    
    if(!currentAccount) {
        feedbackMessage = "Account not found!"

    }else if(currentAccount.balance < amount) {

        feedbackMessage = `Insufficient fund!`

    }else {
        currentAccount.balance -= amount;

        currentAccount.transaction = "Debited"

        currentAccount.lastAmount = amount

        feedbackMessage = `₦${amount} withdrawn successfully!
        New balance: ${currentAccount.balance}`
    }

    console.log(feedbackMessage);
    console.log(currentAccount)
   
    
}

const depositMoney = (name, amount) => {
    let depositAmount = null;

    let feedbackMessage = null;

    for(let i = 0; i < account.length; i++) {
        let user = account[i]

        if(user.name === name) {
           depositAmount = user
        }
    }

    if(!depositAmount) {
      feedbackMessage = "User not found!"
    }else {
       depositAmount.balance += amount
       depositAmount.transaction = "Credited" 
       depositAmount.lastAmount = amount
       feedbackMessage = `₦${amount} deposited successfully!
        New balance: ${depositAmount.balance}`
    }

    console.log(feedbackMessage);
    console.log(depositAmount)
}

const transactionHistory = (name) => {
    let userTransaction;

    let feedbackMessage;

   for(let i = 0; i < account.length; i++) {
      let user = account[i];

      if(user.name === name) {
         userTransaction = user;
      }
   }

   if(userTransaction.transaction === "Credited") {

    feedbackMessage = `₦${userTransaction.lastAmount} was credited to ${userTransaction.name}'s account.`

   }else if(userTransaction.transaction === "Debited") {

    feedbackMessage = `₦${userTransaction.lastAmount} was debited to ${userTransaction.name}'s account.`
    
   }else {
     console.log("No recent transaction found.");
   }

 console.log(feedbackMessage);
}


console.log("------------add account details----------")

addAccountDetails("Divine", 10000);
addAccountDetails("Ann", 5000);
addAccountDetails("Chizoba", 5000);

console.log("------------Withdraw--------------")

withdraw("Divine", 1000);

console.log("----------Transaction History-------")

transactionHistory("Divine")

console.log("-----------------")

withdraw("Chizoba", 3500)

console.log("----------Transaction History-------")

transactionHistory("Chizoba")


console.log("----------------------Deposit-----------")

depositMoney("Divine", 5000)
console.log("----------Transaction History-------")
transactionHistory("Divine")




