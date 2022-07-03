const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const checkAnswer = (CorrectAnswer, studentAnswer,) => {
  if (studentAnswer === CorrectAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
        return 0;
    }
    return -0.5;  
};

const calculateScore = (CorrectAnswer, studentAnswer) => {
  let score = 0;
  for (let i = 0; i < CorrectAnswer.length; i += 1) {
    score += checkAnswer(CorrectAnswer[i], studentAnswer[i]);
  }
  return score;
};
console.log(calculateScore(RIGHT_ANSWERS, STUDENT_ANSWERS));
