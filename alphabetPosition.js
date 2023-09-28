function alphabetPosition(text) {
    let finalText = [];
    text = text.toLowerCase();
    let splitText = text.split('');

    let j = 0;
    for(i = 0 ; i < splitText.length ; i++){
        
        splitText[i] = splitText[i].charCodeAt(0) - 96;
        if(splitText[i] > 0 && splitText[i] <=26 ){
            finalText[i-j] = splitText[i]
        }else {
            j++
        }
    }
    return finalText.join(' ');
  }

console.log(alphabetPosition("abcdef ghijk'sad"));