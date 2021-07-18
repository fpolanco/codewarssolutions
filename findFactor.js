function findFactor(n,p){
  
    let arr = []
    for (let i=0; i<=n; i++){
      if (n % i === 0){
        arr.push(i)
      }
      // console.log(arr)
    }if (p > arr.length) {
      return 0
    }else{
      return arr[p-1]
    }
    }
    console.log(findFactor(26,3))

  

