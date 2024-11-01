function solution(progresses, speeds) {
  var answer = [];
  var middle_answer = [];

  for (let i = 0; i < progresses.length; i++) {
    middle_answer[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
  }

    
  let maxDay = middle_answer[0];
  let count = 1;

  for (let j = 1; j < middle_answer.length; j++) {
    if (middle_answer[j] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      maxDay = middle_answer[j];
    }
  }
    
     answer.push(count);

  return answer;
}
