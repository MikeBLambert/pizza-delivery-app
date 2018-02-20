//Business Logic
//Object for details of each pizza that is ordered.
function Pizza (size,toppings) {
  this.size = size;
  this.toppings = toppings;
  };

//Object that stores the user's information
function UserInfo (firstName,lastName,streetAddress,city,state,zip) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.zip = zip;
    // this.userPizza = [];
    // this.userPrice = [];
  };

Pizza.prototype.pizzaPrice = function() {
  var pizzaPrice = 0;
  if (this.size == "small") {
    pizzaPrice += 7;
  } else if (this.size == "medium") {
    pizzaPrice += 10;
  } else if (this.size == "large") {
    pizzaPrice += 13;
  }
  for (i=0; i<this.toppings.length; i+=1) {
    if (this.toppings[i] === "cheese") {
      pizzaPrice += 1
    } else if (this.toppings[i] === "pepperoni") {
      pizzaPrice += 2
    } else if (this.toppings[i] ==="olives") {
      pizzaPrice += 1
    } else if (this.toppings[i] === "peppers") {
      pizzaPrice += 2
    } else {
      return alert("Please select a topping")
    }
  return pizzaPrice;
  };
};

var totalPrice = 0
// function noSizeSelection(x) {
//   if (x === undefined) {
//     return alert("please select a pizza size!")
//   }
// };
//
// function noToppingSelection(x) {
//   if (x.length === 0) {
//     return alert("Please select a topping!")
//   }
// }

// Pizza.prototype.toppingPrice = function() {
//   var priceForToppings = 0;
//   for (i=0; i<this.toppings.length; i+=1) {
//     if (this.toppings[i] === "cheese") {
//       priceForToppings += 1
//     } else if (this.toppings[i] === "pepperoni") {
//       priceForToppings += 2
//     } else if (this.toppings[i] ==="olives") {
//       priceForToppings += 1
//     } else if (this.toppings[i] === "peppers") {
//       priceForToppings += 2
//     }
//   }
//   return priceForToppings;
// };



//User Interface
$(document).ready(function() {
  $("#pizzaInfoForm").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppings.push($(this).val());
    });
    // noToppingSelection(toppings);
    // noSizeSelection(size);
    var pizza = new Pizza(size,toppings);
    var price = pizza.pizzaPrice();

    document.getElementById("pizzaInfoForm").reset();
    $("#shoppingCart").show();
    $("button#submitOrder").show();
    $("#userInfoForm").show();
    $("#displayOrderInfo").append(
      "<h3><li>One " + pizza.size + " pizza. <br>Toppings: <ul>" + pizza.toppings.join("<br>") +"</ul>" + "Price: $" + price + "</li></h3>");
    totalPrice += price
    console.log(totalPrice);
    });
  $("#userInfoForm").submit(function(event) {
    event.preventDefault();
    var firstName = $("#user-first-name").val();
    var lastName = $("#user-last-name").val();
    var streetAddress = $("#user-street-address").val();
    var city = $("#user-city").val();
    var state = $("#user-state").val();
    var zip = $("#user-zip").val();
    var userInfo = new UserInfo(firstName,lastName,streetAddress,city,state,zip);
    $("#userInfoForm").hide();
    $("#pizzaInfoForm").hide();
    $("#shoppingCart").hide();
    $("#finalOrderDisplay").show();
    $("#finalOrderInfo").append(
      userInfo.firstName + " " + userInfo.lastName +
      "<br>" +
      userInfo.streetAddress +
      "<br>" +
      userInfo.city + ", " + userInfo.state + " " + userInfo.zip +
      "<br>" +
      "The total amount due is $" + totalPrice
    );
  });
});
