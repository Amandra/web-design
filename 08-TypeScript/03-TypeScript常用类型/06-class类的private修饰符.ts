class Father {
    speak() {
        this.move()
    }

    private move() {
        console.log('Father 在跑')
    }
}

class Son extends Father {
    speak() {
        super.speak();
        console.log('Son 在说话')
    }
}

const son = new Son();
son.speak();
