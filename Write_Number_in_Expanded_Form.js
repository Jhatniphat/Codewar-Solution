function expandedForm(num) {
    let result = ""
    let Divide = 10
    for(i = 1; i <= countDigit(num) ; i++){
        if(num%Divide !== 0){
            result = (num%Divide)+ " + " + result
        }
        num = num - (num%Divide)
        Divide = Divide * 10
    }
    result = result.slice(0,result.length - 3)
    return result
}


function countDigit(number){
    let count = 0
    while(number > 0){
        number = Math.floor (number / 10)
        count++;
    }
    return count;
}

console.log(expandedForm(123))

console.log(expandedForm(120003))