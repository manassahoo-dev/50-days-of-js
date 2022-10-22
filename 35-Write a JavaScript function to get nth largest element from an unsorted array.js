/*
Write a JavaScript function to get nth largest element from an unsorted array.
Input
nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)
Output
89
*/
function nthlargest(arr,highest){
			var x = 0,
				y = 0,
				z = 0,
				temp = 0,
				tnum = arr.length, 
				flag = false, 
				result = false; 
   
			while(x < tnum){
				y = x + 1; 
				
				if(y < tnum){
					for(z = y; z < tnum; z++){
						
						if(arr[x] < arr[z]){
							temp = arr[z];
							arr[z] = arr[x];
							arr[x] = temp;
							flag = true; 
						}else{
							continue;
						}	
					}					
				}
				
				if(flag){
					flag = false;
				}else{
					x++; 
					if(x === highest){ 
                      
						result = true;
					}	
				}
				if(result){
					break;
				}
			}

			return (arr[(highest - 1)]);	
		}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest));
