function getArr(num) {
   let arr = []
   let sum = 0
   for (let i = 0; i <= num; i++) {
      arr.push(i)
      sum += arr[i]
   }
   return sum
}
console.log(getArr(5))
