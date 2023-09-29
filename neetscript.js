const quizData = [
   
    {
      question: 'An inverter gates can be developed using',
      options: ['Two diodes', 'Resistance and capacitance', 'Transistor', 'Inductance and capacitance'],
      answer: 'Transistor',
    },
    {
      question: 'The formula for Kepler’s third law is',
      options: ['P3 ∝ a2', 'P3 ∝ a3', 'P2 ∝ a2', 'P2 ∝ a3'],
      answer: 'P2 ∝ a3',
    },
    {
      question: 'In alternative current generator, AC current reverses its direction',
      options: ['10 times per second', '20 times per second', '60 times per second', '50 times per second'],
      answer: '50 times per second',
    },
    {
      question: 'When a diode is forward biased, the recombination of free electron and holes produce',
      options: ['Heat', 'Light', 'Radiation', 'All the above'],
      answer: 'All the above',
    },
    {
      question: 'A stone tied to a string is rotated in a circle. If the string is cut, the stone flies away from the circle because',
      options: ['A centrifugal force acts on the stone', 'Of its inertia', 'A centripetal force acts on the stone', 'The reaction of the centripetal force'],
      answer: 'Of its inertia',
    },
    {
      question: 'For a wavelength l the dispersion of the medium is D, then the dispersion for the wavelength 2l will be',
      options: ['D/8', 'D/2', '2D', 'D'],
      answer: 'D/8',
    },
    {
      question: 'Elephants A, B and C move with a constant speed in the same direction along a straight line as shown in the figure. The speed of the elephant A is 5 m/s and the speed of the elephant C is 10 m/s. Initially, the separation between A and B is d and between B and C is also d. When B catches C, the separation between A and C becomes 3d. What will the speed of B be?',
      options: ['5 m/s', '7.5 m/s', '15 m/s', '20 m/s'],
      answer: '15 m/s',
    },
    {
      question: 'Two blocks connected to each other by a string is hung to the ceiling by connecting another string to the upper block. When a force F is applied on the string, it produces an acceleration of 2 m/s2. If T and T’ are the tensions in two parts of the string, then which of the following is true?',
      options: ['T = 70.8 N and T’= 47.2 N', 'T = 70.8 N and T’= 0 N', 'T = 70.8 N and T’=58.8 N', 'T = 58.8 N and T’= 47.2 N'],
      answer: 'T = 70.8 N and T’= 47.2 N',
    },
    {
      question: 'Two long straight parallel wires carry currents I1 and I2, respectively, in the same direction (as shown). The distance between the wires is R. The magnetic field at the centre of the two wires will',
      options: ['μ0(I1-I2)/πR into the plane of the paper (if I1＞I2)', 'μ0(I2-I1)/πR out the plane of the paper (if I2＞I1)', 'μ0(I1-I2)/πR2 out the plane of the paper (if I2＞I1)', 'μ0(I2-I1)/πR2, into the plane of the paper (if I1＞I2)'],
      answer: ' μ0(I1-I2)/πR into the plane of the paper (if I1＞I2)',
    },
    {
      question: 'What is the principle behind thermocouple',
      options: ['Joule effect', 'Thomson effect', 'Seebeck effect', 'Peltier effect'],
      answer: 'Seebeck effect',
    },
    {
      question: 'Which of the following is correct for [Mn(CN)6]3-?',
      options: ['dsp2 and square planar', 'sp3d2 and octahedral', 'd2sp3 and octahedral', 'sp3d2 and tetrahedral'],
      answer: 'sp3d2 and tetrahedral',
    },
    {
      question: 'Hess’s law states that a chemical reaction is independent of the route by which chemical reactions takes place while keeping the same',
      options: ['initial conditions only', 'final conditions only', 'mid-conditions', 'initial and final conditions'],
      answer: 'initial and final conditions',
    },
    {
      question: ' In which of the following cases does the reaction go farthest to completion?',
      options: ['K = 1', 'K = 10^-2', 'K = 10', 'K = 10^2'],
      answer: 'K = 10^2',
    },
    {
      question: 'Which of the following gives hydrogen peroxide on electrolysis?',
      options: ['H2SO4', 'H2O', 'HCl', 'None of the above'],
      answer: 'H2SO4',
    },
    {
      question: 'For which of the following reactions Kp is less than Kc?',
      options: ['2HI ⇌ H2 + I2', 'N2 + O2 ⇌ 2NO', 'N2O4 ⇌ 2NO2', '2SO2 + O2 ⇌ 2SO3'],
      answer: '2SO2 + O2 ⇌ 2SO3',
    },
    {
      question: 'Number of moles of MnO4– required to oxidise one mole of ferrous oxalate completely in the acidic medium will be',
      options: ['7.5 moles', '0.2 moles', '0.6 moles', '0.4 moles'],
      answer: '0.6 moles',
    },
    {
      question: 'According to IUPAC nomenclature sodium nitroprusside dihydrate is named as',
      options: ['Sodium pentacyanonitrosylferrate (III)', 'Sodium nitroferrocyanide', 'Sodium nitroferricyanide', 'Sodium pentacyanonitrosylferrate (II)'],
      answer: 'Sodium pentacyanonitrosylferrate (III)',
    },
    {
      question: 'Which of the following is a buffer solution?',
      options: ['H2SO4 + CuSO4', 'CH3COOH + CH3COONH4', 'NaCl + NaOH', 'CH3COONa + CH3COOH'],
      answer: 'CH3COONa + CH3COOH',
    },
    {
      question: 'Which of the following acts as a precursor for the production of other molecules?',
      options: ['Phosphorous substrate', 'Nitrogen substrate', 'Carbon substrate', 'Sulphur substrate'],
      answer: 'Carbon substrate',
    },
    {
      question: 'What are the twin characteristics of growth?',
      options: ['increase in mass', 'increase in number', 'Both 1 and 2', 'none of the above'],
      answer: 'Both 1 and 2',
    },
    {
      question: 'Coenocytic refers to __________',
      options: ['Sharing of a common cytoplasmic region', 'Elimination of the plasma membrane', 'Sharing of a common hyphal wall', 'Sharing of a common nucleus'],
      answer: 'Sharing of a common cytoplasmic region',
    },
    {
      question: 'Which of the following organelles uses hydrolytic enzymes to manage intracellular macromolecule digestion?',
      options: ['Plastid', 'Peroxisome', 'Lysosome', 'Actin'],
      answer: 'Lysosome',
    },
    {
      question: 'The cause of syphilis is _________.',
      options: [
        'HIV',
        'Neisseria',
        'Treponema pallidum',
        'Trichomonas vaginalis',
      ],
      answer: 'Treponema pallidum',
    },
    {
      question: 'In the Hershey and Chase experiment, which findings conclude that DNA is the genetic material?',
      options: ['The presence of radioactivity in bacteria when using 35S.', 'The presence of radioactivity in the supernatant when using 35S.', 'The presence of radioactivity in bacteria when using 32P', 'The presence of radioactivity in the supernatant when using 32P.'],
      answer: 'The presence of radioactivity in bacteria when using 32P',
    },
    {
      question: 'Sperm swimming toward the egg is prevented by a spermicide used for contraception, which inhibits sperm flagellar movement. What accomplishes this?',
      options: [
        'breaking the microfilaments',
        'blocking the kinesin motor protein',
        'breaking down microtubules',
        'blocking the dynein motor protein',
      ],
      answer: 'blocking the dynein motor protein',
    },
    {
      question: 'Which of the following vitamins contain metal atoms?',
      options: ['Riboflavin', 'Vitamin B12', 'Vitamin A', 'Vitamin B6'],
      answer: 'Vitamin B12',
    },
    {
      question: 'Streptomyces rimosus produces the antibiotic known as _______________',
      options: [
        'Chlortetracycline',
        'Oxytetracycline',
        'Tetracycline',
        'Doxycycline',
      ],
      answer: 'Oxytetracycline',
    },
    {
      question: 'Chromatophores are found in ______',
      options: ['Squids', 'Humans', 'Birds', 'Dogs'],
      answer: 'Squids',
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
