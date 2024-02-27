function outerFunction (name) {
    let greet = "Hello,";
    function innerFunction () {
        console.log(greet, name);
    }
    setTimeout(innerFunction, 2000);
    return innerFunction;
}

outerFunction("Natwar");