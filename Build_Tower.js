function towerBuilder(nFloors) {
    let result = [];
    let preResult = '';
    let j = 1;
    for(i = 1 ; i <= nFloors ; i++){

        for(prei = 1 ; prei <= nFloors - j ; prei++){
            preResult = preResult + ' '            
        }

        for(ceni = 1 ; ceni <= j; ceni++){
            preResult = preResult + '*'             
        }

        for(posti = 1 ; posti < j ; posti++){
            preResult = preResult + '*'             
        }

        for(posti = 1 ; posti <= nFloors - j ; posti++){
            preResult = preResult + ' '           
        }

        result[i-1] = preResult
        preResult = '';
        j++;
        
    }
    return result;
}

console.log(towerBuilder(5))

