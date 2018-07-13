var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';


function onButtonClick(userInput) {
  var comInput;
  var random = Math.random();

  if (random < 0.33) {
    comInput = SCISSORS;
  } else if (random < 0.66) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }

  var result = '컴퓨터: ' + comInput;

  if (userInput === SCISSORS) {
    if (comInput === SCISSORS) {
        result += ' - 컴퓨터와 비기셨어요.';
      } else if (comInput === ROCK) {
        result += ' - 컴퓨터에게 지셨어요....ㅠ';
      } else {
        result += ' - 컴퓨터를 이기셨어요!^^';
      }
    } else if (userInput === ROCK) {
        if (comInput === SCISSORS) {
          result += ' - 컴퓨터를 이기셨어요!^^';
        } else if (comInput === ROCK) {
          result += ' - 컴퓨터와 비기셨어요.';
        } else {
          result += ' - 컴퓨터에게 지셨어요....ㅠ';
        }
    } else {
        if (comInput === SCISSORS) {
          result += ' - 컴퓨터에게 지셨어요....ㅠ';
        } else if (comInput === ROCK) {
          result += ' - 컴퓨터를 이기셨어요!^^';
        } else {
          result += ' - 컴퓨터와 비기셨어요.';
        }
    }
  alert(result);
}
