function reverse(str){
    str = str.split(" ")
    console.log(str)
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === ' ' || str[i] === '') str.splice(i,1) 
        console.log(str)
        if((i%2)===1) str[i] = str[i].split("").reverse().join("")   
    }
    str = str.join(" ")
    if (str == ' ') str = ''
    return str
}

console.log(reverse("    "))