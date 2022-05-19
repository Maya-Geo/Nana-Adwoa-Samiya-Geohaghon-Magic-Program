// Solution 1
const secondLargest1 = (arr) => {
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], largest);
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest1;
};

// Solution 2
const secondLargest2 = (arr) => {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
};
