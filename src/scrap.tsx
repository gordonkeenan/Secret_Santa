// if two left and one of the two is in both array set them as each other instead

const gifters = ["1", "2", "3", "4", "5"];
let recivers = [...gifters];

const ans = gifters.reduce((acc: { [key: string]: string }, current, i) => {
  const possibleGifters = recivers.filter((val) => val !== current);
  // if(possibleGifters.length === 2 && ) {

  //  } else {
  const reciver =
    possibleGifters[Math.floor(Math.random() * possibleGifters.length)];
  recivers = recivers.filter((val) => val !== reciver);
  // }

  return {
    ...acc,
    [current]: reciver
  };
}, {});

console.log(ans);

const arr = [1, 2, 3, 4];

const ans1 = arr.reduce((obj, current) => {
  return { ...obj, [current]: current };
}, {});

// console.log(ans1);

const sort = () => {
  let recivers = [...gifters];
  const ans = gifters.reduce((acc: { [key: string]: string }, current, i) => {
    const possibleGifters = recivers.filter((val) => val !== current);
    let reciver: string;
    if (
      possibleGifters.length === 2 &&
      possibleGifters.filter((val) => recivers.includes(val)).length > 0
    ) {
      reciver = possibleGifters[1];
      console.log("here");
      console.log(recivers);
      console.log(possibleGifters);
    } else {
      // possibleGifters.filter((val) => recivers.includes(val)).length > 0

      reciver =
        possibleGifters[Math.floor(Math.random() * possibleGifters.length)];
    }
    recivers = recivers.filter((val) => val !== reciver);

    return {
      ...acc,
      [current]: reciver
    };
  }, {});
  // setResult(ans);
};
