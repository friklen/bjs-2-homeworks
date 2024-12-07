function getArrayParams(...arr) {
  let min, max, avg;
  min = Math.min(...arr);
  max = Math.max(...arr);
  avg = arr.reduce((acc, item, idx, mass) => {
    acc += item;
    if (idx === mass.length - 1) {
      return acc / mass.length;
    } else {
      return acc;
    }
  })
  return { min: min, max: max, avg: +avg.toFixed(2) };
}

function summElementsWorker(...arr) {
  if (arr.length !== 0) {
    return arr.reduce((acc, item, idx, mass) => {
      return acc += item;
    })
  } else {
    return 0;
  }
}
  
function differenceMaxMinWorker(...arr) {
  if (arr.length !== 0) {
    return Math.max(...arr) - Math.min(...arr);
  } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length !== 0) {
    let sumEvenElement = 0, sumOddElement = 0;
    for (i = 0; i < arr.length; i += 1) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  } else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length !== 0) {
    let sumEvenElement = 0, countEvenElement = 0;
    for (i = 0; i < arr.length; i += 1) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
    return sumEvenElement / countEvenElement;
  } else {
    return 0;
  } 
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let resultFunc;
  for (j = 0; j < arrOfArr.length; j += 1) {
    resultFunc = func(...arrOfArr[j]);
    if (resultFunc > maxWorkerResult) {
      maxWorkerResult = resultFunc;
    }
  }
  return maxWorkerResult;
}
