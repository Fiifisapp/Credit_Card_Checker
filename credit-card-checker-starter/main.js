// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// Add your functions below:
const validateCred = (array) => {
  const replica = array.map(x => x);
  let lastDigit = replica.pop();
  let revArray = replica.reverse();
  for (let i = 0; i < revArray.length; i++){
   if ((i % 2) === 0){
     revArray[i] *= 2;
   }
   if (revArray[i] > 9){
     revArray[i] -= 9;
   }
  }
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  let total = revArray.reduce(reducer)
  if((total % 10) === 0){
    return true;
  }
}


const findInvalidCards = (nestedArray) => {
  let invalidCards = [];
  let validCards =[];
  for (let i = 0; i < nestedArray.length; i++){
    let check = validateCred(nestedArray[i]);
    if (check === true){
      validCards.push(nestedArray[i]);
    }
    else{
      invalidCards.push(nestedArray[i]);
    }
  }
  return invalidCards;
}

const idInvalidCardCompanies = (nestedArray) => {
  let mailedCompanies;
  let companies = [];
  let invalidCards = findInvalidCards(nestedArray);
for (let i = 0; i < invalidCards.length; i++){
  if ((invalidCards[i][0]) === 3){
    mailedCompanies = "Amex (American Express)";
    companies.push(mailedCompanies);
  }
  else if((invalidCards[i][0]) === 4){
    mailedCompanies = "Visa";
  }
  else if((invalidCards[i][0]) === 5){
    mailedCompanies = "Mastercard";
    companies.push(mailedCompanies);
  }
  else if((invalidCards[i][0]) === 6){
    mailedCompanies = "Discover";
    companies.push(mailedCompanies);
  }
  else{
    mailedCompanies = "Company not found";
    companies.push(mailedCompanies);
  }
}
let duplicate = [];
for(let i = 0; i < companies.length; i++){
  if(!duplicate.includes(companies[i])){
    duplicate.push(companies[i]);
  }
}
return duplicate;
}



console.log(idInvalidCardCompanies(batch));







