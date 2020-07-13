// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
//Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(pil){
    var change = new Map();
    var ok = true;
    change.set("25", 0);
    change.set("50", 0);
    change.set("100", 0);
    
    pil.forEach(e => {
        if (change.get("25") >= 0 && change.get("50") >= 0 && change.get("100") >= 0) {
            if (e == 25) {
                change.set("25", change.get("25")+1);
            } else if (e == 50) {
                if (change.get("25") > 0) {
                    change.set("25", change.get("25")-1);
                    change.set("50", change.get("50")+1);
                } else {
                   ok = false;
                }
            } else if (e == 100) {
                if (change.get("50") > 0 && change.get("25") > 0) {
                    change.set("50", change.get("50")-1);
                    change.set("25", change.get("25")-1);
                    change.set("100", change.get("100")+1);
                } else if (change.get("25") >= 3) {
                    change.set("25", change.get("25")-3);
                    change.set("100", change.get("100")+1);
                } else {
                   ok = false;
                }
            }
        } else {
           ok = false;
        }
    });
    if (ok) {
        return "YES";
    } else {
        return "NO";
    }
}

console.log(tickets([25, 25, 50]) == "YES");
console.log(tickets([25, 100]) == "NO");
console.log(tickets([25, 25, 50, 50, 100]) == "NO");
console.log(tickets([25, 25, 50, 50]) == "YES");
console.log(tickets([25, 100]) == "NO");