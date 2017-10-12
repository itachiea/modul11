$(function(){
    console.log('DOM loaded - you can have fun');
    
    function Phone(brand, price, color, processor, camera) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.processor = processor;
        this.camera = camera;
    }

    Phone.prototype.printPhones = function() {
        console.log('Brand phone is: ' + this.brand + ', price is: ' + this.price + ', color is: ' + this.color + '. Processor model is: ' + this.processor + ' and camera is ' + this.camera + 'Mpx.');
    };

    var iphone6s = new Phone('Apple', 3000, 'Rose Gold', 'dual core', 12);
    var SamsungS7 = new Phone('Samsung', 3000, 'Gold', 'Octa core', 12);
    var LgG5 = new Phone('Lg', 2700, 'black', 'Quad core', 13);

    iphone6s.printPhones();
    SamsungS7.printPhones();
    LgG5.printPhones();
});