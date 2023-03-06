const fibonacciSequence = (length) => {
  const fibonacciSequence = [0, 1];
  length = parseInt(length);

  if (Number.isNaN(length)) throw new Error("length is not a valid number");
  if (length < 0) throw new Error("length cannot be negative");
  if (length === 1) return [0];

  const getFibonacciSequence = (fibonacciSequence, length) => {
    if (fibonacciSequence.length === length) return fibonacciSequence;
    const fibonacciNumber = fibonacciSequence.at(-1) + fibonacciSequence.at(-2);
    fibonacciSequence.push(fibonacciNumber);
    return getFibonacciSequence(fibonacciSequence, length);
  };

  return getFibonacciSequence(fibonacciSequence, length);
};

export default fibonacciSequence;
