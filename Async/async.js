async function resolveProblem() {
  let counter = 0;
  while (counter < 10) {
    console.log('counter ', counter);
    counter += 1;
  }
  console.log('loop was breake');
  return counter;
}

async function AsyncFunction() {
  const resolve = await resolveProblem();
  console.log('resolve', resolve);
  return resolve;
}

console.log('return AsyncFunction');
export default AsyncFunction;
