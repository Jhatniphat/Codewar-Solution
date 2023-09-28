function oddOrEven(array) {
    //enter code here
    let sum = 0;
    for(i = 0 ; i < array.length ; i++){
        sum = sum + array[i];
    }

    if((sum%2) === 0){
        return "even";
    }
    else if((sum%2) === 1 || (sum%2) === -1){
        return "odd";
    }
}

console.log(oddOrEven([-1,-6]))