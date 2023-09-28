function lastManStanding(n){
    let arr = [];
    let count = 0;
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    while (arr.length > 1) {
        if (count % 2 === 0) {
            for (let i = 0; i < arr.length; i++) {
                arr.splice(i, 1);
            }
        } else {
            for (let i = arr.length - 1 ; i >= 0  ; i=i-2) {
                arr.splice(i, 1);
            }
        }
        count++;
    }
    return arr[0];
}
