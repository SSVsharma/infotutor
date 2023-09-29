const quizData = [
    {
      question: 'Which one of the following salts does not con-tain water of crystallisation?',
      options: ['Blue vitriol', 'Baking soda', 'Washing soda', 'Gypsum'],
      answer: 'Baking soda',
    },
    {
      question: 'In terms of acidic strength, which one of the following is in the correct increasing order?',
      options: ['Water < Acetic acid < Hydrochloric acid', 'Water < Hydrochloric acid < Acetic acid', 'Acetic acid < Water < Hydrochloric acid', 'Hydrochloric acid < Water < Acetic acid'],
      answer: 'Water < Acetic acid < Hydrochloric acid',
    },
    {
      question: 'Tomato is a natural source of which acid',
      options: ['Acetic acid', 'Citric acid', 'Tartaric acid', 'Oxalic acid'],
      answer: 'Oxalic acid',
    },
    {
      question: 'Bi-focal lens are required to correct',
      options: ['astigmatism','coma','myopia','presbyopia'],
      answer: 'presbyopia',
    },
    {
      question: 'The mode of nutrition found in fungi is:',
      options: [
        'Parasitic nutrition',
        'Holozoic nutrition',
        'Autotrophic nutrition',
        'Saprotrophic nutrition',
      ],
      answer: 'Saprotrophic nutrition',
    },
    {
      question: 'Roots of the plants absorb water from the soil through the process of:',
      options: ['diffusion', 'transpiration', 'osmosis', 'None of these'],
      answer: 'osmosis',
    },
    {
      question: 'In amoeba,food is digested in the:',
      options: [
        'food vacuole',
        'mitochondria',
        'pseudopodia',
        'chloroplast',
      ],
      answer: 'food vacuole',
    },
    {
      question: 'Which region of the alimentary canal absorbs the digested food?',
      options: ['Stomach', 'Small intestine', 'Large intestine' ,'Liver'],
      answer: 'Small intestine',
    },
    {
      question: 'The exit of unabsorbed food material is regulated by',
      options: [
        'liver',
        'anus',
        'small intestine',
        'anal sphincter',
      ],
      answer: 'anal sphincter',
    },
    {
      question: 'One cannot see through the fog, because',
      options: ['refractive index of the fog is very high', 'light suffers total reflection at droplets', 'fog absorbs light', 'light is scattered by the droplets'],
      answer: 'light is scattered by the droplets',
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
