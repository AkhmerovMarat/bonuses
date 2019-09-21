console.log('worked');

const purchaseAmount = 1000;
const availableBonuses = 1000;

const maxBonuses = purchaseAmount * 0.5;

const appliBonuses = maxBonuses <= availableBonuses ? maxBonuses : availableBonuses; 


console.log(appliBonuses);

const total = purchaseAmount - appliBonuses;

console.log(total);