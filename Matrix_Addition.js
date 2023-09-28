function matrixAddition(a, b){
    let result = [...a]

    for(let i = 0 ; i < a.length ;i++){
      for(let j = 0 ; j < a.length ;j++){
        result[i][j] = a[i][j] + b[i][j]
      }
    }
    return result
}

console.log(matrixAddition(
  [[1,2],[1,2]],[[1,2],[1,2]]
))