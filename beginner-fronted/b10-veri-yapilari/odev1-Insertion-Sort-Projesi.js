
let arr = [22,27,16,2,18,6];

for(let i=0; i<arr.length -1; i++){
    
    let myMin = arr[i];
    let minIndex = i;
    for(let j=i+1; j<arr.length; j++){
        if(myMin > arr[j]){
            myMin = arr[j]
            minIndex = j
        }
    }
    
    let temporary = arr[i];
    arr[i] = myMin;
    arr[minIndex] = temporary;
}
console.log(arr)