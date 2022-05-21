
  function bubbleSort(numbers){

  let length = numbers.length
    for(let index = 0; index < length; index += 1){
      for(let i = index + 1; i < length ; i += 1){
        if(numbers[index] > numbers[i]){
          let tmp = numbers[index];
          numbers[index] = numbers[i];
          numbers[i] = tmp;
        }
      }  
    }
  }
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  bubbleSort(numbers);
  console.log(numbers)