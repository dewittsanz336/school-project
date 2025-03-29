function findMax(arr) {
  let max = arr[0];
  
  // Find the maximum element in the array
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

function calculateAverage(numbers) {
  let sum = 0;

  // Calculate the sum of all numbers in the array
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}
