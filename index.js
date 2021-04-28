function receivesAFunction(callback) {

callback();

}

function returnsANamedFunction() {

const namedFunction = () => console.log("I am named")
     return namedFunction;

}

function returnsAnAnonymousFunction() {


 return () => console.log('I am anonymous')


}