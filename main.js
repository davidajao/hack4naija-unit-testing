const isEvenOrOdd = (num) => {

    if( num % 2 === 0){
        return "Even";
    }
    
    if( isNaN(num) ){
        return "Error";
    }

    return "Odd";
}

export default isEvenOrOdd;