/* 
	How to implement Singleton?
		1. Make the constructor private
		2. Create a static method who calls the private
			 constructor and save the sintance in a static variable
*/

class SingletonTS {
    private static instance: SingletonTS;
    private version: string;

    private constructor(version:  string) {
        this.version = version;
    }

    static getInstance(version: string) {
        if(!SingletonTS.instance) {
            SingletonTS.instance = new SingletonTS(version);
        }
        return SingletonTS.instance;
    }
}

function appSingletonTS() {
    const singleton1 = SingletonTS.getInstance('ver-01');
    const singleton2 = SingletonTS.getInstance('ver-02');
    const singleton3 = SingletonTS.getInstance('ver-03');

    console.log(singleton1 === singleton2);
    console.log(singleton2 === singleton3);
}