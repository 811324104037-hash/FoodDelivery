let cartItems = [];

const buttons = document.querySelectorAll(".food-card button");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const foodCard = button.closest(".food-card");

        const foodName = foodCard.querySelector("h3").textContent;
        const price = foodCard.querySelector("h4").textContent;

        cartItems.push({
            name: foodName,
            price: price
        });

        updateCart();

        alert(foodName + " added to cart!");
    });

});


function updateCart() {

    const cart = document.getElementById("cart");

    cart.innerHTML = "<h2>🛒 Your Cart</h2>";

    cartItems.forEach(function (item) {

        cart.innerHTML +=
            "<p>" + item.name + " - " + item.price + "</p>";

    });

    cart.innerHTML +=
        '<br><button onclick="placeOrder()">Place Order</button>';
}


function placeOrder() {

    const cart = document.getElementById("cart");

    cart.innerHTML =
        "<h2>🚚 Order Status</h2>" +
        "<p>Your food is being prepared 👨‍🍳</p>" +
        "<p>🚴 Delivery partner is on the way!</p>" +
        '<button onclick="deliveryComplete()">Delivery Successful</button>';
}


function deliveryComplete() {

    const cart = document.getElementById("cart");

    cart.innerHTML =
        "<h2>✅ Delivery Successful!</h2>" +
        "<p>Your food has been delivered successfully.</p>" +
        "<p>Thank you for ordering with Foodie! ❤️</p>";
}