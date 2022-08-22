class Father {
    protected move() {
        console.log('Father 在跑')
    }
}

class Son extends Father {
    speak() {
        console.log('Son 在说话')
        this.move();
    }
}

const son = new Son();
son.speak();
