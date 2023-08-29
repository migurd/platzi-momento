/*
    How to implement Singleton?
        1. Make the constructor private
        2. Create a static method who calls the private
             constructor and save the sintance in a static variable
*/
var SingletonTS = /** @class */ (function () {
    function SingletonTS(version) {
        this.version = version;
    }
    SingletonTS.getInstance = function (version) {
        if (!SingletonTS.instance) {
            SingletonTS.instance = new SingletonTS(version);
        }
        return SingletonTS.instance;
    };
    return SingletonTS;
}());
function appSingletonTS() {
    var singleton1 = SingletonTS.getInstance('ver-01');
    var singleton2 = SingletonTS.getInstance('ver-02');
    var singleton3 = SingletonTS.getInstance('ver-03');
    console.log(singleton1 === singleton2);
    console.log(singleton2 === singleton3);
}
