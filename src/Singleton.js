//@ts-check

const Singleton = (function() {
    var instance = null;
    return class Singleton {
        constructor () {
            if (instance) {
                return instance;
            }
            instance = this;
        }
    }
})()

export {Singleton};