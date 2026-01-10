const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      answers: ['Two', 'Three', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };


const {
  correctAnswer,
  answers ,
  question,
} = questionObj;

const questionEl = document.getElementById('question');
const options = document.getElementById('options');
const scoreEl = document.getElementById('score');

questionEl.textContent = question;
let score = 0;




for(let i = answers.length -1; i >= 0 ; i--){
  let randomNum = Math.floor(Math.random() * (i + 1));
  let temp = answers[i];
    answers[i] = answers[randomNum];
    answers[randomNum] = temp;
}

answers.forEach((opt)=>{
  const btn = document.createElement("button");
  btn.classList.add('optionButtons');
  btn.textContent = opt;
  options.appendChild(btn);

  btn.addEventListener('click', ()=>{
      if(opt === correctAnswer){
        score++;
        questionEl.textContent = "Quiz Completed";
        options.textContent = '';
      }else{
        score -= 0.25;
      }

      scoreEl.textContent = `Score: ${score}`;
      
  })
  
  
})

