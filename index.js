
const fn = () => console.log("Hello");

const rateLimiter = (maxCalls) => {

  let calls = 0
  const limiter = (callback) => {
    if (calls >= maxCalls) return
    callback()
    calls++
  }

  return limiter
};

const max3Calls = rateLimiter(3);


max3Calls(fn); // Hello
max3Calls(fn); // Hello
max3Calls(fn); // Hello
max3Calls(fn); // Ne fait rien, car on a atteint la limite d'appels

