function split(wholeArray) {

    // let firstHalf = wholeArray.slice(0, Math.round(wholeArray.length/2));
    // let secondHalf = wholeArray.slice(Math.round(wholeArray.length/2))
    let array = wholeArray.map(function(string) {
        return [string]
    })
    return array;

}

function merge(array1, array2) {
    
    var index = 0;
    var mergedArr = [];

    for (var i = 0; i < array2.length; i++) {
        for (var j = index; j <= array1.length; j++) {
            if(j === array1.length || (array2[i] < array1[j])) {
                mergedArr.push(array2[i])
                mergedArr.concat(mergedArr, array1.slice(j+1));
            }
            if (array2[i] >= array1[j])
            {
                mergedArr.push(array1[j]);
            }
        }
    }
}

function mergeSort() {

}

