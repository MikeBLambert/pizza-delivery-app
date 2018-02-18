//Business Logic
function Pizza (size,toppings) {
  this.size = size;
  this.toppings = toppings;
  };

Pizza.prototype.sizePrice = function() {
  if (this.size == "small") {
    return 7;
  } else if (this.size == "medium") {
    return 10;
  } else {
    return 13;
  }
};

Pizza.prototype.toppingPrice = function() {
  var priceForToppings = 0;
  console.log(this.toppings);
  for (i=0; i<this.toppings.length; i+=1) {
    if (this.toppings[i] === "cheese") {
      priceForToppings += 1
      console.log(priceForToppings);
    } else if (this.toppings[i] === "pepperoni") {
      priceForToppings += 2
      console.log(priceForToppings);
    } else if (this.toppings[i] ==="olives") {
      priceForToppings += 1
    } else if (this.toppings[i] === "peppers") {
      priceForToppings += 2
    }
  }
  return priceForToppings;
};


//User Interface
$(document).ready(function() {
  $("#addPizza").click(function() {
  event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppings.push($(this).val());
    });
    var pizza = new Pizza(size,toppings);
    var price = pizza.toppingPrice() + pizza.sizePrice();

    document.getElementById("pizzaInfoForm").reset();
    $("#displayOrderInfo").append("<h1>Shopping Cart:</h1>" +" One " + pizza.size+" pizza with the following toppings: "+ "<li>"+pizza.toppings+"</li>"+"This pizza will cost $"+price);
  });
});
