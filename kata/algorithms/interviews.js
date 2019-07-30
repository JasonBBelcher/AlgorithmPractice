// a satire on the technical interview process and FizzBuzz

function jobSearch(codingSkills, interviewSkills, interviews) {
  let rollTheDice = Math.floor(Math.random() * 100);
  let index = 0;
  let answers = [];

  function gamble(num) {
    if (typeof num === 'number') {
      if (num % 2 === 0) {
        answers.push('You got the Job!');
      }
      if (num % 3 === 0) {
        answers.push(
          "Oh sorry we aren't sure about you! We went with someone with a silver tongue."
        );
      }
      if (num % 5 === 0) {
        answers.push(
          'We went with someone who can code better with a panel of people watching.'
        );
      }
    }
  }

  if (codingSkills < interviewSkills) {
    return 'You got the job and then lost it after the performance review!';
  }
  if (codingSkills > interviewSkills) {
    while (index < interviews) {
      index += 1;
      rollTheDice = Math.floor(Math.random() * 100);
      gamble(rollTheDice);
    }
  }
  return answers;
}

console.log(jobSearch(10, 8, 10));
