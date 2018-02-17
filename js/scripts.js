//Business Logic
// function UserInfo(name,street,city,state,zip) {
//   this.name = name;
//   this.street = street;
//   this.city = city;
//   this.state = state;
//   this.zip = zip;
// };



//User Interface Logic
$(document).ready(function() {
  $("#addPizza").click(function() {
  event.preventDefault();
    console.log("hello")

    $("#newPizza").append("<form id='pizzaOrder'>"+
      "<div class='form-group'>"+
        "<div class='container'>"+
          "<h2>NEXT PIZZA</h2>"+
          "<h3>What size pizza would you like?</h3>"+
          "<div class='radio'>"+
            "<label><input type='radio' id='sizeSmall'>Small</input></label>"+
            "<label><input type='radio' id='sizeMedium'>Medium</input></label>"+
            "<label><input type='radio' id='sizeLarge'>Large</input></label>"+
          "</div>"+
          "<h3>What toppings would you like on your pizza?</h3>"+
          "<div class='checkbox'>"+
            "<label><input type='checkbox' id='toppingCheese'>Cheese</input></label>"+
            "<label><input type='checkbox' id='toppingPepperoni'>Pepperoni</input></label>"+
            "<label><input type='checkbox' id='toppingOlives'>Olives</input></label>"+
            "<label><input type='checkbox' id='toppingPeppers'>Peppers</input></label>"+
          "</div>"+
        "</div>"+
      "</div>"+
    "</form>"

  );
  });
});
// $(document).ready(function() {
//   $("#pizzaOrder").submit(function(event) {
//   event.preventDefault();
//   });
// });
