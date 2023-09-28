function spinWords(string){
    let splitString = string.split(" ");
    for(i = 0 ; i < splitString.length ; i++){
        let thisStr = splitString[i];
        splitString[i] = thisStr.split("").reverse().join("");;
    }
    splitString = splitString.join(' ');
    return splitString; 
}

console.log(spinWords("My words is spinningg"));