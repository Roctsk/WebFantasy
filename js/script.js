document.addEventListener("DOMContentLoaded", function () {
  const imageContainers = document.querySelectorAll('.image-container');

  imageContainers.forEach(container => {
      const img = container.querySelector('img');
      const content = container.querySelector('.content');
      const button = content.querySelector('button');
      const clised = content.querySelector('.clised');

      // Обробник події при наведенні миші на контейнер
      container.addEventListener('mouseenter', () => {
          img.style.opacity = 0.7;
          clised.style.opacity = 0;
          button.style.transform = 'scale(1.1)';
      });

      // Обробник події при відведенні миші від контейнера
      container.addEventListener('mouseleave', () => {
          img.style.opacity = 1;
          clised.style.opacity = 1;
          button.style.transform = 'scale(1)';
      });
  });

  // Кнопки для запуску відповідного квізу
  const btnPotter = document.getElementById("start-harry-button");
  const btnNarnia = document.getElementById("start-narnia-button");
  
  const filmSections = document.querySelectorAll(".film-section");
  const quizPotter = document.getElementById("quiz-container");
  const quizNarnia = document.getElementById("narnia-quiz-container");

  // Обробник для кнопки старту квізу Гаррі Поттера
  btnPotter.addEventListener("click", () => {
      filmSections.forEach(section => section.style.display = "none");
      quizPotter.style.display = "block";
      showHarryQuestion();
  });

  // Обробник для кнопки старту квізу Нарнії
  btnNarnia.addEventListener("click", () => {
      filmSections.forEach(section => section.style.display = "none");
      quizNarnia.style.display = "block";
      showNarniaQuestion();
  });
});

// ------------------ Гаррі Поттер: Питання ------------------

// Массив з питаннями для квізу Гаррі Поттера
const harryQuestions = [
  {
    question: "Яким було перше завдання Гаррі Поттера в Гоґвортсі?",
    options: ["Вивчити закляття Люмос", "Проїхати на мітлі Громовик", "Знайти старий потаємний хід", "Освоїти закляття Авада"],
    answer: 0
  },
  {
    question: "Яка саме тварина зображена на гербі факультету Грифіндор?",
    options: ["Золотий лев Грифіндору", "Мудрий орел Когтеврану", "Вогняний дракон Слизерину", "Дикий тигр Гафелпафу"],
    answer: 0
  },
  {
    question: "Хто саме був директором Гоґвортсу в перших трьох книгах?",
    options: ["Професор Албус Дамблдор", "Професор Северус Снейп", "Професор Рімус Люпин", "Професор Горацій Слизнорт"],
    answer: 0
  },
  {
    question: "Яке повне прізвище має чарівниця Герміона, подруга Гаррі?",
    options: ["Герміона Джейн Грейнджер", "Герміона Блек Малфой", "Герміона Невіл Лонгботтом", "Герміона Драко Малфой"],
    answer: 0
  },
  {
    question: "Яке закляття роззброює супротивника?",
    options: ["Закляття Експеліярмус Поттера", "Темне Авада Кедавра", "Сяйво Люмос Нокс", "Заклик Акціо Чарівна"],
    answer: 0
  },
  {
    question: "Як називається чарівна школа, де навчався Гаррі Поттер?",
    options: ["Школа магії Гоґвортс", "Французька школа Бобатон", "Північна школа Дурмстранґ", "Американська школа Ільверморні"],
    answer: 0
  },
  {
    question: "Яке магічне створіння було вірним другом Гаррі Поттера?",
    options: ["Біла сова Гедвіґа", "Пухнастий кіт Герміони", "Гігантський павук Арагог", "Мудрий лісовий кентавр"],
    answer: 0
  },
  {
    question: "Яке повне ім’я головного антагоніста у серії про Гаррі Поттера?",
    options: ["Темний лорд Волдеморт", "Професор Северус Снейп", "Місячний вовк Люпин", "Учень Драко Малфой"],
    answer: 0
  },
  {
    question: "Як називається відома гра чарівників, що проходить у повітрі?",
    options: ["Повітряна гра Квідич", "Чарівна гра Магобол", "Літальна гра Флорбол", "Магічна гра Летунія"],
    answer: 0
  },
  {
    question: "На якому саме факультеті навчався Гаррі Поттер у Гоґвортсі?",
    options: ["Факультет мужній Грифіндор", "Факультет хитрий Слизерин", "Факультет мудрий Когтевран", "Факультет добрий Гафелпаф"],
    answer: 0
  }
];

// Квіз Гаррі Поттера
let harryIndex = 0;
let harryScore = 0;
const userAnswers = [];

// Таймер для квізу
let timer;
let timeLeft = 20; 

// Функція для запуску таймера
function startTimer() {
  const timerEl = document.getElementById("timer");
  timer = setInterval(() => {
    timerEl.textContent = `Часу залишилося: ${timeLeft} секунд`;
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timer);
      handleHarryAnswer(-1); 
    }
  }, 1000);
}

// Функція для відображення питання та варіантів відповідей
function showHarryQuestion() {
  const q = harryQuestions[harryIndex];
  document.getElementById("question").textContent = q.question;

  const answersEl = document.getElementById("answers");
  answersEl.innerHTML = "";

  // Скидаємо таймер
  timeLeft = 20;
  startTimer();

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => handleHarryAnswer(index);
    answersEl.appendChild(btn);
  });
}

// Функція для обробки вибору відповіді користувачем
function handleHarryAnswer(selectedIndex) {
  const correctIndex = harryQuestions[harryIndex].answer;
  const buttons = document.querySelectorAll("#answers button");

  // Зупиняємо таймер після відповіді
  clearInterval(timer);

  buttons.forEach((btn, idx) => {
    btn.classList.add("answer-disabled");
    if (idx === correctIndex) {
      btn.classList.add("answer-correct");
    } else if (idx === selectedIndex) {
      btn.classList.add("answer-wrong");
    }
  });

  if (selectedIndex === correctIndex) {
    harryScore++;
  }

  userAnswers.push({
    question: harryQuestions[harryIndex].question,
    selectedAnswer: selectedIndex,
    correct: selectedIndex === correctIndex
  });

  // Коротка пауза, щоб побачити колір
  setTimeout(() => {
    harryIndex++;
    if (harryIndex < harryQuestions.length) {
      showHarryQuestion();
    } else {
      showHarryResult();
    }
  }, 1000);
}

// Функція для відображення результатів квізу Гаррі Поттера
function showHarryResult() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("score").textContent =
    `Правильних відповідей: ${harryScore} з ${harryQuestions.length}`;

  const percentage = (harryScore / harryQuestions.length) * 100;

  let rating = "";
  if (percentage === 10) {
    rating = "Відмінно! 🏆";
  } else if (percentage >= 7) {
    rating = "Добре! 👏";
  } else if (percentage >= 3) {
    rating = "Задовільно! 🙂";
  } else {
    rating = "Спробуй ще раз! 😅";
  }

  const resultDetails = document.getElementById("result-details");
  resultDetails.innerHTML = `
    <p>Ваша успішність: ${percentage.toFixed(2)}%</p>
    <p>${rating}</p>
  `;

  const list = document.getElementById("detailed-results");
  if (!list) {
    console.error("Не знайдено елемент з id 'detailed-results'");
    return;
  }

  list.innerHTML = "";

  // Заповнюємо список детальних результатів
  userAnswers.forEach((entry, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      Питання ${index + 1}: ${entry.correct ? "Правильна ✅" : "Неправильна ❌"}<br>
      <strong>Ваш вибір:</strong> ${harryQuestions[index].options[entry.selectedAnswer]}<br>
      <strong>Правильний варіант:</strong> ${harryQuestions[index].options[harryQuestions[index].answer]}
    `;
    list.appendChild(li);
  });

  // Кнопки для поділу результатами
  const shareButtons = document.getElementById("share-buttons");
  shareButtons.innerHTML = `
    <a href="https://www.facebook.com/sharer/sharer.php?u=http://yourwebsite.com" target="_blank" class="harry-btn">Поділитися на Facebook</a>
    <a href="https://twitter.com/intent/tweet?text=Я пройшов квіз Гаррі Поттер і набрав ${harryScore} з ${harryQuestions.length} правильних відповідей!&url=http://yourwebsite.com" target="_blank" class="harry-btn">Поділитися в Twitter</a>
  `;
}

// Функція для перезапуску квізу Гаррі Поттера
function restartQuiz() {
  harryIndex = 0;
  harryScore = 0;
  userAnswers.length = 0;

  document.getElementById("question-container").style.display = "block";
  document.getElementById("result").style.display = "none";

  showHarryQuestion();
}

// Функція для повернення на головний екран
function returnToMain() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("main-screen").style.display = "block";

  // Очищаємо попередній стан
  harryIndex = 0;
  harryScore = 0;
  userAnswers.length = 0;
  document.getElementById("question-container").style.display = "block";
  document.getElementById("result").style.display = "none";
}

// ------------------ Нарнія: Питання ------------------

// Массив з питаннями для квізу Нарнії
const narniaQuestions = [
  {
    question: "Як звали лева, що править Нарнією?",
    options: ["Аслан", "Левітан", "Тимон", "Грім"],
    answer: 0
  },
  {
    question: "Через що діти потрапляють у Нарнію?",
    options: ["Шафа", "Магічне дзеркало", "Тунель", "Вікно"],
    answer: 0
  },
  {
    question: "Скільки дітей потрапляють у Нарнію?",
    options: ["Четверо", "Троє", "П'ятеро", "Двоє"],
    answer: 0
  },
  {
    question: "Яка зима панує до приходу Аслана?",
    options: ["Зима без Різдва", "Літня злива", "Льодова зима", "Холодна ніч"],
    answer: 0
  },
  {
    question: "Яка тварина першою зустріла Люсі?",
    options: ["Фавн", "Ведмідь", "Тигр", "Лисиця"],
    answer: 0
  },
  {
    question: "Хто ворог у першій книзі?",
    options: ["Біла відьма", "Темний маг", "Чорний дракон", "Чаклунка"],
    answer: 0
  },
  {
    question: "Що зрадив Едмунд?",
    options: ["Турецькі ласощі", "Медові піченюшки", "Фрукти", "Шоколад"],
    answer: 0
  },
  {
    question: "Назва першої книги?",
    options: ["Лев, чаклунка і шафа", "Танець на льоду", "Петро і Люсі", "Чарівний світ Нарнії"],
    answer: 0
  },
  {
    question: "Хто не повертається у Нарнію?",
    options: ["Сьюзан", "Пітер", "Едмунд", "Люсі"],
    answer: 0
  },
  {
    question: "Хто створив Нарнію?",
    options: ["Аслан", "Люсі", "Пітер", "Чаклунка"],
    answer: 0
  }
];

// Квіз Нарнії
let narniaIndex = 0;
let narniaScore = 0;
let timeLefts = 20;
const narniaAnswers = [];
let timers;

// Функція для запуску таймера
function startNarniaTimer() {
  const timerEl = document.getElementById("timer");
 
  timers = setInterval(() => {
    timerEl.textContent = `Часу залишилося: ${timeLefts} секунд`;
    timeLefts--;
    if (timeLefts < 0) {
      clearInterval(timers);
      handleNarniaAnswer(-1); 
    }
  }, 1000);
}

// Функція для відображення питання та варіантів відповідей
function showNarniaQuestion() {
  const q = narniaQuestions[narniaIndex];
  document.getElementById("narnia-question").textContent = q.question;

  const answersEl = document.getElementById("narnia-answers");
  answersEl.innerHTML = "";

  // Скидаємо таймер
  timeLefts = 20;
  startNarniaTimer();

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => handleNarniaAnswer(index);
    answersEl.appendChild(btn);
  });
}

// Функція для обробки вибору відповіді користувачем
function handleNarniaAnswer(selectedIndex) {
  const correctIndex = narniaQuestions[narniaIndex].answer;
  const buttons = document.querySelectorAll("#narnia-answers button");

  // Зупиняємо таймер після відповіді
  clearInterval(timers);

  buttons.forEach((btn, idx) => {
    btn.classList.add("answer-disabled");
    if (idx === correctIndex) {
      btn.classList.add("answer-correct");
    } else if (idx === selectedIndex) {
      btn.classList.add("answer-wrong");
    }
  });

  if (selectedIndex === correctIndex) {
    narniaScore++;
  }

  narniaAnswers.push({
    question: narniaQuestions[narniaIndex].question,
    selectedAnswer: selectedIndex,
    correct: selectedIndex === correctIndex
  });

  // Коротка пауза, щоб побачити колір
  setTimeout(() => {
    narniaIndex++;
    if (narniaIndex < narniaQuestions.length) {
      showNarniaQuestion();
    } else {
      showNarniaResult();
    }
  }, 1000);
}

// Функція для відображення результатів квізу Нарнії
function showNarniaResult() {
  document.getElementById("narnia-question-container").style.display = "none";
  document.getElementById("narnia-result").style.display = "block";

  document.getElementById("narnia-score").textContent =
    `Правильних відповідей: ${narniaScore} з ${narniaQuestions.length}`;

  const percentage = (narniaScore / narniaQuestions.length) * 100;

  let rating = "";
  if (percentage === 10) {
    rating = "Відмінно! 🏆";
  } else if (percentage >= 7) {
    rating = "Добре! 👏";
  } else if (percentage >= 3) {
    rating = "Задовільно! 🙂";
  } else {
    rating = "Спробуй ще раз! 😅";
  }

  const resultDetails = document.getElementById("narnia-result-details");
  resultDetails.innerHTML = `
    <p>Ваша успішність: ${percentage.toFixed(2)}%</p>
    <p>${rating}</p>
  `;

  const list = document.getElementById("narnia-detailed-results");
  if (!list) {
    console.error("Не знайдено елемент з id 'narnia-detailed-results'");
    return;
  }

  list.innerHTML = "";

  // Заповнюємо список детальних результатів
  narniaAnswers.forEach((entry, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      Питання ${index + 1}: ${entry.correct ? "Правильна ✅" : "Неправильна ❌"}<br>
      <strong>Ваш вибір:</strong> ${narniaQuestions[index].options[entry.selectedAnswer]}<br>
      <strong>Правильний варіант:</strong> ${narniaQuestions[index].options[narniaQuestions[index].answer]}
    `;
    list.appendChild(li);
  });

  // Кнопки для поділу результатами
  const shareButtons = document.getElementById("narnia-share-buttons");
  shareButtons.innerHTML = `
    <a href="https://www.facebook.com/sharer/sharer.php?u=http://yourwebsite.com" target="_blank" class="narnia-btn">Поділитися на Facebook</a>
    <a href="https://twitter.com/intent/tweet?text=Я пройшов квіз Нарнія і набрав ${narniaScore} з ${narniaQuestions.length} правильних відповідей!&url=http://yourwebsite.com" target="_blank" class="narnia-btn">Поділитися в Twitter</a>
  `;
}

// Функція для перезапуску квізу Нарнії
function restartNarniaQuiz() {
  narniaIndex = 0;
  narniaScore = 0;
  narniaAnswers.length = 0;

  document.getElementById("narnia-question-container").style.display = "block";
  document.getElementById("narnia-result").style.display = "none";

  showNarniaQuestion();
}

// Функція для повернення на головний екран квізу Нарнії
function returnToMainNarnia() {
  document.getElementById("narnia-quiz-container").style.display = "none";
  document.getElementById("main-screen").style.display = "block";

  // Очищаємо попередній стан
  narniaIndex = 0;
  narniaScore = 0;
  narniaAnswers.length = 0;
  document.getElementById("narnia-question-container").style.display = "block";
  document.getElementById("narnia-result").style.display = "none";
}
