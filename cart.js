///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]
           
let foodCb = cart.reduce(function(acc, curr) {
    if (cart.price < 10) {
        return acc + curr.price
    }
    return acc + curr.price
}, 0)

console.log(foodCb)

// const summedPrice = cart.reduce(foodCb)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    tax = .06
    couponValue = .25
    let preCoupon = foodCb += foodCb * tax
    cartTotal = preCoupon -= preCoupon * couponValue
    console.log(cartTotal)
    return cartTotal
}

calcFinalPrice()

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*

Properties:
    Name: String. It should be a string because a name is typically passed in as a string.
    Age: Integer/Number. Age is nothing but a number.
    Favorite Food: String. Kind of the same reasoning as name. Since it's a word it should be a string.
    Region of origin: String. Same as other strings.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = [
    John = {
        name: 'Alfonzo',
        age: 27,
        FavoriteMeal: 'Fettucini Alfredo',
        RegionOfOrigin: 'Italy'
    }
]