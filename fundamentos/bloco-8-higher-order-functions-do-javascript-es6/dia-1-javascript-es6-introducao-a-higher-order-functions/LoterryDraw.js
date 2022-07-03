const checkWin = (bet, result) => bet === result;
const lotteryDraw = (mybet, callBack) => {
    const random = Math.floor(Math.random() * 5 + 1);
    return callBack(mybet, random) ? 'Luck day, you win!' : 'Sorry, you lose!';
    };
    console.log(lotteryDraw(1, checkWin));
