
///////////////////////////
// First Class  ***
///////////////////////////

// Increase
document.getElementById('increase-first').addEventListener('click', function(){
    
    getPrices(true, 'first-input')

})


// Decrease
document.getElementById('decrease-first').addEventListener('click', function(){

    getPrices(false, 'first-input')

})


///////////////////////////
// Economy Class  ***
///////////////////////////

// Increase
document.getElementById('increase-economy').addEventListener('click', function(){
    
    getPrices(true, 'economy-input')

})


// Decrease
document.getElementById('decrease-economy').addEventListener('click', function(){

    getPrices(false, 'economy-input')

})


// Getting Input Prices
function getPrices(isIncrease, id) {
    const firstInput = document.getElementById(id);
    const firstInputNumber = parseInt(firstInput.value);
    let firstNewInput = firstInputNumber;

    if (isIncrease == true ){
        firstNewInput = firstInputNumber + 1;
    }
    else if(isIncrease == false && firstInputNumber > 0){
        firstNewInput = firstInputNumber - 1;
    }

    firstInput.value = firstNewInput;

    let firstClassPrice = firstNewInput ;

    if(id = 'first-input'){
        firstClassPrice = firstNewInput * 150;
    }else if(id = 'economy-input') {
        firstClassPrice = firstNewInput * 100;
    }

    // Getting Total Price
    totalPrice();
}






// Total Price
function totalPrice(){
    const firstClassInput = document.getElementById('first-input');
    const firstNumber = parseInt(firstClassInput.value);

    const economyClassInput = document.getElementById('economy-input');
    const economyNumber = parseInt(economyClassInput.value)

    // Total
    const total = firstNumber * 150 + economyNumber * 100;
    document.getElementById('total').innerText = '$' + total;

    // Tax
    const tax = total * 0.1;
    document.getElementById('tax').innerText = '$' + tax;

    // grand Total
    const grandTotal = total + tax;
    document.getElementById('gtotal').innerText = '$' + grandTotal;
}



// Book Now button
document.getElementById('book-now').addEventListener('click', function(){
    document.getElementById('main').style.display = 'none';
    document.getElementById('thankyou').style.display = 'block'
})