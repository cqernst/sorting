function compare(elem1, elem2) {
	if (elem1 < elem2) {
		return true;
	} else {
		return false;
	}
}

function swap (elem1, elem2) {	
	arr[arr.indexOf(elem1)] = elem2;
	arr[arr.indexOf(elem2)] = elem1;
}


function bubbleSort (arr) {
	var n = arr.length;
	while (n > 0) {
		for (var i = 0; i < arr.length; i ++) {
			var elem1 = arr[i];
			var elem2 = arr[i + 1];

			if (!compare(elem1, elem2)) {
				swap(elem1, elem2);
			}
		}
		n--;
	}
}

// outline of recursive solution: 
// recursive case: at some point when looping over the array, !compare;
// base case: compare returns true for every pair in arr
