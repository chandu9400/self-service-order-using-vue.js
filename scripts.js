var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 50.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 40.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 200.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Fries",
        "price": 20.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 30.49,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salad",
        "price": 20.79,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coke",
        "price": 100.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 100.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Water",
        "price": 20.49,
        "active": false,
        "quantity": 1
    }
];
 
// selfservicemachine is the object, that holds all the logic of the application
const SelfServiceMachine = { 
    data() {   
        return {
           //message: "HELLO FAST FOODS"
           products: window.products
        }
    },
    methods: {
        toggleActive: function(item){
            item.active = !item.active;
        },
        total: function(){
            var total = 0;
            this.products.forEach(function(item){
                if (item.active){
                    total+= item.price * item.quantity;
                }
            });
           return total.toFixed(2);
        }
    }
};

Vue.createApp(SelfServiceMachine).mount('#app');  // app is the parent element of the html file


