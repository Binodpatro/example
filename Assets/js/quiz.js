
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "The correct sequence of HTML tags for starting a webpage is -",
    answer: "HTML, Head, Title, Body",
    options: [
      "Head, Title, HTML, body",
      "HTML, Head, Title, Body",
      "HTML, Body, Title, Head",
      "HTML, Head, Title, Body"
    ]
  },
  {
    id: 5,
    question: " Which type of JavaScript language is ___",
    answer: "Object-Based",
    options: [
      "Object-Based ",
      "Assembly-language",
      "Object-Oriented ",
      "High-level"
    ]
  },
  {
    id: 6,
    question: "Which one of the following also known as Conditional Expression:",
    answer: "immediate if",
    options: [
      "If-then-else statement",
      "immediate if",
      "Switch statement",
      "None of these"
    ]
  },
  {
    id: 7,
    question: "In JavaScript, what is a block of statement?",
    answer: "block that combines a number of statements into a single compound statement    ",
    options: [
      "Conditional block",
      "block that contains a single statement",
      "block that combines a number of statements into a single compound statement  ",
      "None of these"
    ]
  },
  {
    id: 8,
    question: "When interpreter encounters an empty statements, what it will do:",
    answer: "Ignores the statements",
    options: [
      "Shows a warning",
      "Ignores the statements",
      "None of these",
      "hrows an error"
    ]
  },
  {
    id: 9,
    question: "Which one of the following is the correct way for calling the JavaScript code?",
    answer: "Function/Method",
    options: [
      "RMI",
      "Function/Method",
      "Preprocessor",
      "None of these"
    ]
  },
  {
    id: 10,
    question: "Which of the following option is used as hexadecimal literal beginning?",
    answer: "Both 0x and 0X",
    options: [
      "00",
      "0x",
      "Both 0x and 0X",
      "None of these"
    ]
  }
];


//2


 

  const rightanswers = [

  {
    id: 1,
    question: "Q1:What is the full form of RAM ?",
    answer: "A:Random Access Memory",
  },
  {
    id: 2,
    question: "Q2:What is the full form of CPU?",
    answer: "A:Central Processing Unit",
   
  },
  {
    id: 3,
    question: "Q3:What is the full form of E-mail",
    answer: "A:Electronic Mail",
    
  },


  {
    id: 4,
    question: "Q4:The correct sequence of HTML tags for starting a webpage is -",
    answer: "A:HTML, Head, Title, Body",
    
  },
  {
    id: 5,
    question: "Q5: Which type of JavaScript language is ___",
    answer: "A:Object-Based",
   
  },
  {
    id: 6,
    question: "Q6:Which one of the following also known as Conditional Expression:",
    answer: "A:immediate if",
   
  },
  {
    id: 7,
    question: "Q7:In JavaScript, what is a block of statement?",
    answer: "A:block that combines a number of statements into a single compound statement    ",
   
  },
  {
    id: 8,
    question: "Q8:When interpreter encounters an empty statements, what it will do:",
    answer: "A:Ignores the statements",
   
  },
  {
    id: 9,
    question: "Q9:Which one of the following is the correct way for calling the JavaScript code?",
    answer: "A:Function/Method",
   
  },
  {
    id: 10,
    question: "Q10:Which of the following option is used as hexadecimal literal beginning?",
    answer: "A:Both 0x and 0X",
   
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);
  // localStorage.setItem('rightanswers',JSON.stringify (rightanswers))
  sessionStorage.setItem("rightanswers", JSON.stringify(rightanswers));
  sessionStorage.setItem("total_question",questions.length);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    // sessionStorage.setItem("time", time);
    // clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
