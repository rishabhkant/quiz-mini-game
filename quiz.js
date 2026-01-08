const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      answers: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    }
    ;


// const {correctAnswer, answers , question} = questionObj;

// const questionEl = document.getElementById('question');
// questionEl.textContent = questionObj.question;



const answers = questionObj.answers;

// const options = document.getElementById('options');
let totalOptions = [];

for(let i =0; i < answers.length; i++){
  totalOptions.push(`<button> ${answers[i]} </button>`);
}


console.log(totalOptions);