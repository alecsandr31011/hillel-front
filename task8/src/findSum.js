function findSum(...args) {
  let Sum = 0;
  for (const item of args) {
    Sum += item;
  }
  return Sum;
}

export default findSum;
