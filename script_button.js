var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';

function onScissorsClick() {
  var comInput;
  var random = Math.random();

  if (random < 0.33) {
    comInput = SCISSORS;
  } else if (random < 0.66) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }

  if (comInput === SCISSORS) {
      alert ('컴퓨터: ' + comInput + ' - 컴퓨터와 비기셨어요.');
    } else if (comInput === ROCK) {
      alert ('컴퓨터: ' + comInput + ' - 컴퓨터에게 지셨어요....ㅠ');
    } else {
      alert ('컴퓨터: ' + comInput + ' - 컴퓨터를 이기셨어요!^^');
    }
  }

function onRockClick() {
  var comInput;
  var random = Math.random();

  if (random < 0.33) {
    comInput = SCISSORS;
  } else if (random < 0.66) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }

  if (comInput === SCISSORS) {
      alert ('컴퓨터: ' + comInput + ' - 컴퓨터를 이기셨어요!^^');
    } else if (comInput === ROCK) {
      alert ('컴퓨터: ' + comInput + ' - 컴퓨터와 비기셨어요.');
    } else {
      alert ('컴퓨터: ' + comInput + ' - 컴퓨터에게 지셨어요....ㅠ');
    }
  }

function onPaperClick() {
  var comInput;
  var random = Math.random();

  if (random < 0.33) {
    comInput = SCISSORS;
  } else if (random < 0.66) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }

  if (comInput === SCISSORS) {
      alert ('컴퓨터: ' + comInput + ' - 컴퓨터에게 지셨어요....ㅠ');
    } else if (comInput === ROCK) {
      alert ('컴퓨터: ' + comInput + ' - 컴퓨터를 이기셨어요!^^');
    } else {
      alert ('컴퓨터: ' + comInput + ' - 컴퓨터와 비기셨어요.');
    }
  }
