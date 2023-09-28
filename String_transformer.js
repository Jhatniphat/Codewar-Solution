function stringTransformer(str) {
    let splitString = str.split(" ")
    for (let i in splitString){
        splitString[i] = splitString[i].split("")
        for(let j in splitString[i]){

            console.log(splitString[i][j].charCodeAt(0))

            if(splitString[i][j].charCodeAt(0) >= 65 && splitString[i][j].charCodeAt(0) <= 90){
                splitString[i][j] = splitString[i][j].toLowerCase();
                
            }
            else if(splitString[i][j].charCodeAt(0) >= 97 && splitString[i][j].charCodeAt(0) <= 122){
                splitString[i][j] = splitString[i][j].toUpperCase();
            }
        }
        splitString[i] = splitString[i].join("");
    }
    splitString = splitString.reverse().join(" ");
    return splitString
}

console.log(stringTransformer("Example string"))
// stringTransformer("AZ az")

