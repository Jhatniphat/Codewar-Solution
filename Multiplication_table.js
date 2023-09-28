multiplicationTable = function(size) {
    let result = [];
    for(i = 1 ; i <= size ; i++ ){
        let preResult = [];
        for(j = 1 ; j <= size ; j++ ){            
            preResult[j-1] = i*j 
        }
        result[i-1] = preResult
        preResult = [];
    }
    return result;
  }

console.log(multiplicationTable(3))