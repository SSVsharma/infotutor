const quizData = [
    {
      question: 'Where is the Wall Street Exchange?',
      options: ['America','Britain','France','Germany'],
      answer: 'America',
    },
    {
        question: 'Who were the worst sufferers in Nazi Germany?',
        options: ['Jews','Russians','Poles','Gypsies'],
        answer: 'Jews',
      },
      {
        question: 'Hitler became the Chancellor or Germany in the year',
        options: ['1933','1935','1931','1937'],
        answer: '1933',
      },
      {
        question: 'When and among which countries was the Tripartite Pact signed?',
        options: ['1940, Germany, Italy and Japan','1939, Germany, Austria and USSR','1940, England, France and USA','1938, England, Germany and USSR'],
        answer: '1940, Germany, Italy and Japan',
      },
      {
        question: 'Which country was defeated after the First World War?',
        options: ['Germany','Russia',' Britain','France'],
        answer: 'Germany',
      },
      {
        question: 'Which incident persuaded the USA to join the war?',
        options: ['Hitler’s attack on Eastern Europe','Hitler’s policy of genocide of the Jews','Helplessness of England and France','Japan attack on the US base at Pearl Harbour'],
        answer: 'Japan attack on the US base at Pearl Harbour',
      },
      {
        question: 'How many seats are reserved in the Lok Sabha for the Scheduled Castes and Scheduled Tribes?',
        options: ['47','102','84','48'],
        answer: '84',
      },
      {
        question: 'War in 1917 led to the strengthening of Allies and the defeat of Germany because of entry of',
        options: ['china','USA','japan','spain'],
        answer: 'USA',
      },
      {
        question: 'Our country is divided into',
        options: ['543 constituencies','586 constituencies','700 constituencies','508 constituencies'],
        answer: '543 constituencies',
      },
      {
        question: 'The minimum age required for being a voter is:',
        options: ['19 years','18 years','25 years','22 years'],
        answer: '18 years',
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
