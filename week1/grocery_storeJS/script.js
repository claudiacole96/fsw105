var shopper = {
    name: "Charlotte",
    age: 56,
    withCoupons: false,
    groceryCart: ["sprite", "eggs", "milk", "chicken", "bread"],
    greeting: function() {
        return "Hello, I'm " + this.name + " and I got " + this.groceryCart[0];
    },
};
console.log(shopper);