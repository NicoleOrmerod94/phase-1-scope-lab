var customerName = 'bob';
//declare customer name to be bob in global scope
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}   
//add modification to customerName variable. toUpperCase() is a method that changes the string to uppercase

function setBestCustomer() {
  bestCustomer = 'not bob';
}
// Declare bestCustomer as a global variable
function overwriteBestCustomer() {
  bestCustomer  = 'maybe bob';
}
// Function to overwrite bestCustomer
const leastFavoriteCustomer = 'some initial value';
// Declare leastFavoriteCustomer as a constant

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This should throw an error
}
// Function attempting to change the constant
