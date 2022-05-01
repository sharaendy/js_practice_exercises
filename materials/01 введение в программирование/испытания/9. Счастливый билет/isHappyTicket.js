//! лучшее
export default (num) => {
  let balance = 0;

  for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
    balance += +num[i] - +num[j];
  }
  return balance === 0;
};

//! вариант 1
const isHappyTicket = (ticketNumber) => {
  const length = ticketNumber.length;

  if (length % 2 === 0) {
    let leftPart = () => {
      let resultLeftPart = 0;
      for (let i = 0; i < length / 2; i += 1) {
        resultLeftPart += Number(ticketNumber[i]);
      }
      // console.log("левая часть часть", resultLeftPart);
      return resultLeftPart;
    };
    let rightPart = () => {
      let resultRightPart = 0;

      for (let i = length / 2; i < length; i += 1) {
        resultRightPart += Number(ticketNumber[i]);
      }
      // console.log("правая часть", resultRightPart);
      return resultRightPart;
    };

    if (leftPart() === rightPart()) {
      return true;
    }
    return false;
  }
  return console.log("номер билета нечётный");
};

export default isHappyTicket;

//! вариант 2
const isHappyTicket = (str) => {
  const digitsCount = str.length;
  let leftPart = 0;
  for (let i = 0; i < digitsCount / 2; i += 1) {
    leftPart += Number(str[i]);
  }
  let rightPart = 0;
  for (let i = digitsCount - 1; i >= digitsCount / 2; i -= 1) {
    rightPart += Number(str[i]);
  }
  return (leftPart === rightPart);
};

export default isHappyTicket;

//! вариант 3
function isHappyTicket(str) {
  let leftPart = 0;
  let rightPart = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (i < str.length / 2) {
      leftPart += Number(str[i]);
    } else {
      rightPart += Number(str[i]);
    }
    // console.log('left=',leftPart);
    // console.log('right=',rightPart);
  }
  return (leftPart === rightPart);
}
