// 7 kyu
// String Reordering
function sentence(List) {
    // your code
    let min = 0
    let max = 0
    let keyNum = 0
    let result = ''
    for(let i = 0 ; i < List.length ; i++){
        keyNum = parseInt(Object.keys(List[i]), 10)
        if (min > keyNum) min = keyNum
        if (max < keyNum) max = keyNum
    }

    for(let j = min ; j <= max ; j++){
        for(let i = 0 ; i < List.length ; i++){
            if(Object.keys(List[i]) == j) result = result + Object.values(List[i]) + ' '
            console.log(Object.values(List[i]))
        }
    }

    result = result.split('')
    result.pop()
    result = result.join('')
    return result
  }

console.log(
    sentence([
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
   ])
   )