const quizData = [
  {
    question: 'A horizontal force of 10 N is necessary to just hold a block stationary against a wall. The coefficient of friction between the block and the wall is 0.2. The weight of the block is',
    options: ['20 N', '50 N', '100 N', '2 N'],
    answer: '2 N',
  },
  {
    question: 'At time t = 0 s particle starts moving along the x-axis. If its kinetic energy increases uniformly with time ‘t’, the net force acting on it must be proportional to',
    options: ['t', 'constant', '√t', '1/√t'],
    answer: '1/√t',
  },
  {
    question: 'Two particles A and B, initially at rest, move to­wards each other under the mutual force of attraction. At the instant when the speed of A is v and the speed of B is 2v, the speed of the centre of mass of the system is',
    options: ['3v', 'v', '1.5v', 'zero'],
    answer: 'zero',
  },
  {
    question: 'An ideal gas is enclosed in a cylinder at a pressure of 2 atm and temperature, 300 K. The mean time between two successive collisions is 6 × 10–8 s. If the pressure is doubled and the temperature is increased to 500 K, the mean time between two successive collisions will be close to',
    options: [' 4 × 10^–8 s', '3 × 10^–6 s', '0.5 × 10^–8 s', '2 × 10^–7 s'],
    answer: '4 x 10^-8 s',
  },
  {
    question: ' A river is flowing from west to east at a speed of 5 metres per minute. A man on the south bank of the river, capable of swimming at 10 metres per minute in still water, wants to swim across the river in the shortest time. He should swim in a direction.',
    options: ['due north', '30° east of north', '30° west of north', '60° east of north'],
    answer: 'due north',
  },
  {
    question: ' Two moles of an ideal monatomic gas occupies a volume V at 27°C. The gas expands adiabatically to a volume 2V. Calculate (i) the final temperature of the gas and (ii) change in its internal energy.',
    options: [' (i) 198 K (ii) 2.7 kJ', ' (i) 196 K (ii) 2.7 kJ', ' (i) 189 K (ii) 2.7 kJ', ' (i) 195 K (ii) 2.7 kJ'],
    answer: ' (i) 189 K (ii) 2.7 kJ',
  },
  {
    question: ' The eye can be regarded as a single refracting surface. The radius of curvature of this surface is equal to that of the cornea (7.8 mm). This surface separates two media of refractive indices 1 and 1.34. Calculate the distance from the refracting surface at which a parallel beam of light will come to focus',
    options: ['4.0 cm', '1 cm', '3.1 cm', '2 cm'],
    answer: '3.1 cm',
  },
  {
    question: ' Alternating current cannot be measured by D.C ammeter because',
    options: ['A.C cannot pass through D.C ammeter', ' A.C changes direction', 'The average value of current for the complete cycle is zero', 'D.C. ammeter will get damaged'],
    answer: 'The average value of current for the complete cycle is zero',
  },
  {
    question: ' In a photoelectric effect experiment the threshold wavelength of light is 380 nm. If the wavelength of incident light is 260 nm, the maximum kinetic energy of emitted electrons will be given E (in eV) = [1237/λ(in nm)]',
    options: ['15.1 eV', '4.5 eV', '1.5 eV', '3.0 eV'],
    answer: '1.5 eV',
  },
  {
    question: ' The self inductance of the motor of an electric fan is 10 H. In order to impart maximum power at 50 Hz, it should be connected to a capacitance of',
    options: [' 1μF', ' 2μF', ' 4μF', ' 8μF'],
    answer: ' 1μF',
  },
    {
      question: ' If the kinetic energy of an electron is increased four times, the wavelength of the de-Broglie wave associated with it would become',
      options: ['Two times', 'Half', 'One fourth', 'Four times'],
      answer: 'Half',
    },
    {
      question: 'Calculate the wavelength (in nanometer) associated with a proton moving at 1.0×103ms-1 (Mass of proton = 1.67×10-27kg and h = 6.63×10-34Js)',
      options: ['2.5 nm', '14.0 nm', '0.032 nm', '0.40 nm'],
      answer: '0.40 nm',
    },
    {
      question: 'Which one of the following is an amphoteric oxide?',
      options: ['Na2O', 'SO2', 'B2O3', 'ZnO'],
      answer: 'ZnO',
    },
    {
      question: 'The hybridisation of orbitals of N atom in NO3–, NO2+, NH4+ are respectively:',
      options: ['sp2,sp3,sp', 'sp,sp3,sp2', 'sp,sp2,sp3', 'sp2,sp,sp3'],
      answer: 'sp2,sp,sp3',
    },
    {
      question: ' During compression of a spring, the work done is 10 kJ and 2 kJ escaped to the surrounding as heat. The change in internal energy ∆U (in kJ) is',
      options: [
        '-8','12','8','-12'],
      answer: '8',
    },
    {
      question: 'The increase of pressure on ice water system at constant temperature will lead to',
      options: ['no effect on that equilibrium', 'a decrease in the entropy of the system', 'a shift of the equilibrium in the forward dirction', 'an increase in the Gibbs energy of the system'],
      answer: 'a shift of the equilibrium in the forward direction',
    },
    {
      question: 'Among the following oxoacids, the correct decreasing order of acid strength is :',
      options: [
        'HClO4 > HClO3 > HClO2 > HOCl',
        'HClO2 > HClO4 > HClO3 > HOCl',
        'HOCl > HClO2 > HClO3 > HClO4',
        'HClO4 > HOCl > HClO2 > HClO3',
      ],
      answer: 'HClO4 > HClO3 > HClO2 > HOCl',
    },
    {
      question: 'Which of the following statements is incorrect regarding physisorption?',
      options: ['It occurs because of van der Waals forces.', ' More easily liquefiable gases are adsorbed readily.', ' Under high pressure, it results in a multimolecular layer on the adsorbent surface.', 'Enthalpy of adsorption (∆Hadsorption) is low and positive.'],
      answer: 'Enthalpy of adsorption (∆Hadsorption) is low and positive.',
    },
    {
      question: 'Biuret test is not given by:-',
      options: [
        'proteins',
        'carbohydrates',
        'polypeptides',
        'urea',
      ],
      answer: 'carbohydrates',
    },
    {
      question: 'The most suitable reagent for the conversion of R – CH2 – OH → R – CHO is:',
      options: ['CiO3', 'PCC', 'KMNO4', 'K2Cr2O7'],
      answer: 'PCC',
    },
    {
        question: 'Consider the system of equations x + y + z = 1, 2x + 3y + 2z = 1, 2x + 3y + (a2 – 1)z = a + 1 then',
        options: ['System has a unique solution for |a| = √3', ' System is inconsistence for |a| = √3', ' System is inconsistence for |a| = 4', ' System is inconsistence for |a| = 3'],
        answer: ' System is inconsistence for |a| = √3',
      },
      {
        question: 'If z is a complex number, then the minimum value of |z| + |z − 1| is',
        options: ['1', '0', '2', 'i'],
        answer: '1',
      },
      {
        question: 'Assuming the balls to be identical except for the difference in colours, the number of ways in which one or more balls can be selected from 10 white, 9 green and 7 black balls is',
        options: ['932', '879', '642', '850'],
        answer: '879',
      },
      {
        question: ' If (1 + ax)n = 1 + 8x + 24x2 +…., then the value of a and n are',
        options: ['5,1', '2,4', '1,5', '4,2'],
        answer: '2,4',
      },
      {
        question: 'The sum of the series [4 / 1!] + [11 / 2!] + [22 / 3!] + [37 / 4!] + [56 / 5!] + . . . is:',
        options: ['2e+1', '8e-2', '4e+4', '6e-1'],
        answer: '6e-1',
      },
      {
        question: 'Which of the following functions have a finite number of points of discontinuity in R ([.] represents the greatest integer function)?',
        options: ['tan x', 'x[x]', '|x|/x', 'sin[πx]'],
        answer: '|x|/x',
      },
      {
        question: 'Let f : R → R and g : R → R be continuous functions, then the value of the integral ∫π/2−π/2 [f (x) + f (−x)] [g (x) − g (−x)] dx = ',
        options: ['1', '0', '-1', 'infinite'],
        answer: '0',
      },
      {
        question: ' Mean of 100 observations is 45. It was later found that two observations 19 and 31 were incorrectly recorded as 91 and 13. The correct mean is:',
        options: ['45.2', '46', '44.46', '44.64'],
        answer: '44.46',
      },
      {
        question: 'If a is an integer lying in [−5, 30], then the probability that the graph y = x2 + 2 (a + 4) x − 5a + 64 is strictly above the x-axis is ',
        options: ['0', '9/2', '1', '2/9'],
        answer: '2/9',
      },
      {
        question: 'In triangle ABC, if ∠A = 45∘, ∠B = 75∘, then a + c√2 =',
        options: ['b', '2b', 'b/3', 'b/2'],
        answer: '2b',
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
