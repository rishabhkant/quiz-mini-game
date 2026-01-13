// const questionObj = 
//     {
//       category: 'Food & Drink',
//       id: 'qa-1',
//       correctAnswer: 'Three',
//       answers: ['Two', 'Three', 'Four', 'Five'],
//       question:
//         "How many pieces of bun are in a Mcdonald's Big Mac?",
//     };


const quesJSON = [  
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];


// const {
//   correctAnswer,
//   options,
//   question,
// } = quesJSON;

for(const el of quesJSON){
  console.log(el.correctAnswer);
  console.log(el.options);
  console.log(el.question);
}






let score = 0;
let currentQues = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');


function showQues(){
  questionEl.textContent = question;

for(let i = options.length - 1; i >= 0 ; i--){
  let randomNum = Math.floor(Math.random() * (i + 1));
  let temp = options[i];
    options[i] = options[randomNum];
    options[randomNum] = temp;
}

options.forEach((opt)=>{
  const btn = document.createElement("button");
  btn.classList.add('optionButtons');
  btn.textContent = opt;
  optionsEl.appendChild(btn);

  btn.addEventListener('click', ()=>{
      if(opt === correctAnswer){
        score++;

      }else{
        score -= 0.25;
      }

      scoreEl.textContent = `Score: ${score}`;  
  })
  
})

}

showQues();

