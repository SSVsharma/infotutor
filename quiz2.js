const quizData = [
    {
      question: 'A simple closed curve made up of only _____________ is called a polygon .',
      options: ['curves', 'line segments', 'lines', 'closed curves'],
      answer: 'line segments',
    },
    {
        question: 'Sum of all interior angles of a parallelogram is ',
        options: ['180', '360', '540', '240'],
        answer: '360',
      },
      {
        question: 'Maximum possible exterior angle in a regular polygon is _________ .',
        options: ['70', '120', '60', '80'],
        answer: '120',
      },
      {
        question: 'The area of a rhombus whose diagonals are of lengths 10 cm and 8.2 cm is:',
        options: ['41 cm^2', '82cm^2', '78cm^2', '42cm^2'],
        answer: '41cm^2',
      },
      {
        question: 'All the sides of a regular polygon are _________________.',
        options: ['parallel', 'equal in length', 'not parallel', 'not equal'],
        answer: 'equal in length',
      },
      {
        question: 'What should be added to -7/3 to get 3/7?',
        options: ['58/21', '32/51', '58/121', '12/56'],
        answer: '58/21',
      },
      {
        question: '656 is a',
        options: ['Prime and even', 'Prime and odd', 'Composite and odd', 'Composite and even'],
        answer: 'Composite and even',
      },
      {
        question: 'How many inches are equal to a foot ?',
        options: ['11', '15', '12', '19'],
        answer: '12',
      },
      {
        question: 'The diagnols of a rhombus bisect each other at ___________ angles.',
        options: ['acute', 'right', 'obtuse', 'reflex'],
        answer: 'right',
      },
      {
        question: 'Harmony had 357 cats, and Lindsey had 150 dogs,so how many animals are there altogether ?',
        options: ['407', '518', '507', '654'],
        answer: '507',
      },
    
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();
