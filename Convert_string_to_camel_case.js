function toCamelCase(str){
    let splitStr = str.split(/[_-]/);
    for(i = 1 ; i < splitStr.length ; i++){
        splitStr[i] = splitStr[i].split('')
        splitStr[i][0] = splitStr[i][0].toUpperCase()
        splitStr[i] = splitStr[i].join('')
    }
    splitStr = splitStr.join('')
    return splitStr
}

console.log(toCamelCase("Jhat_ni-phat"))