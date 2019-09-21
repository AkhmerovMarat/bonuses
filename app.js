console.log('worked');

const purchaseAmount = 1000;
const bonuses = 100;

let total;

if (purchaseAmount <= bonuses) {
    total = 0;
} else {
     total = purchaseAmount - bonuses;
}



console.log(total);