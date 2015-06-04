$(document).ready(function() {
    firstProblem();
	secondProblem();
	thirdProblem();
	fourthProblem();
	fifthProblem();
	sixthProblem();
	seventhProblem();
});

//Problem 1
function  firstProblem(){
	console.log('Problem 1');
	var arr = [],
	i;
	for(i = 0; i <= 20; i += 1){
		arr.push(i * 5);
	}
	console.log('\t' + arr.join(', '));
};// end of function

//Problem 2
function  secondProblem(){
	console.log('\nProblem 2');
	var arr1 = ['a', 'b', 'c'],
		arr2 = ['a', 'c', 'b'],
		i,
		bigger,
		longer = arr1.length > arr2.length ? arr1.length : arr2.length;
	for(i = 0; i < longer; i += 1){
		if(!arr1[i]) {
			bigger = arr2;
		} else if(!arr2[i]){
			bigger = arr1;
		}
		if(arr1[i] < arr2[i]){
			bigger = arr2;
			break;
		} else if(arr1[i] > arr2[i]){
			bigger = arr1;
			break;
		}
			
	}
	console.log('\tThe lexicografically bigger array is: [' + bigger.join(', ') + ']');
};// end of function

//Problem 3
function  thirdProblem(){
	console.log('\nProblem 3');
	var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
		i,
		len = arr.length,
		max = 1,
		curr_max = 1,
		k,
		arr2 = [];
	for(i = 0; i < len; i += 1){
		if(arr[i] === arr[i + 1]){
			curr_max += 1;
		} else {
			curr_max = 1;
		}
		if(curr_max >= max) {
			max = curr_max;
			for(k = 0; k < max; k += 1){
				arr2[k] = arr[i];
			}
		}
	}
	console.log('\tThe maximal sequence in [' + arr.join(', ') + '] is: ' + arr2.join(', '));
};// end of function

//Problem 4
function  fourthProblem(){
	console.log('\nProblem 4');
	var arr = [3, 2, 3, 4, 2, 2, 4],
		first,
		lastIndex,
		last,
		result = [],
		i,
		len = arr.length,
		res;
    for(i = 1; i < len; i += 1){
		while(arr[i] === arr[i + 1] - 1){
			result.push(i, i + 1);
			i += 1;
		}
    }
    result.sort();
	first = result[0];
	lastIndex = result.length - 1;
	last = result[lastIndex];
	res = arr.slice(first, last+1);
	console.log('\tThe maximal increasing sequence in [3, 2, 3, 4, 2, 2, 4] is: ' + res.join(', '));
};// end of function

//Problem 5
function  fifthProblem(){
	console.log('\nProblem 5');
	var arr = [3, 1, 2, -3, 4, -2, 17, 11, 95, 2, 4],
		smallest = 0,
		i,
		len = arr.length,
		j;
    for(i = 0; i < len - 1; i += 1){
        for(j = i + 1; j < len; j += 1){
            if (arr[i] > arr[j]) {
                smallest = arr[j];
                arr[j] = arr[i];
                arr[i] = smallest;
            }
        }
    }
	console.log('\tThe original array: [3, 1, 2, -3, 4, -2, 17, 11, 95, 2, 4]\n\tAnd the sorted array: [' +
				arr.join(', ') + ']');
};// end of function

//Problem 6
function  sixthProblem(){
	console.log('\nProblem 6');
	var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
		i,
		len = arr.length,
		j,
		curr = 1,
		max = 0,
		mostFreqNum;
	for(i = 0; i < len; i += 1){
		for(j = i + 1; j < len; j += 1){
            if(arr[i] === arr[j]){
                curr++;
            }
        }
        if (curr > max) {
            max = curr;
            mostFreqNum = arr[i];
        }
        curr = 1;
    }
    console.log('\tThe most frequent number is: ' + mostFreqNum + ' (' + max + ' times)');
};// end of function

//Problem 7
function  seventhProblem(){
	console.log('\nProblem 7');
	var arr = [-5, -3, -2, 1, 5, 8, 9, 13, 17, 23],
		searchedNumber = 1,
		imin = 0,
		imax = arr.length - 1,
		imid = 0;
    arr.sort(orderBy);
    while (imax >= imin) {
        imid = Math.floor((imax + imin) / 2);
        if (searchedNumber == arr[imid]) {
            break;
        } else if (searchedNumber > arr[imid]) {
            imin = imid + 1;
        } else {
            imax = imid - 1;
        }
    }
	console.log('\tThe index of the given number "' + searchedNumber +
			'" in the arry [' + arr.join(', ') + '] is :' + imid);

}

function orderBy(a, b) {
    return a - b;
};// end of function
