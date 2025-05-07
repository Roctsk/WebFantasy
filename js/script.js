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
    options: ["Вивчити заклинання «Люмос»", "Проїхати на мітлі", "Знайти таємний прохід", "Вивчити «Авада Кедавра»"],
    answer: 0
  },
  {
    question: "Яка тварина є символом Грифіндору?",
    options: ["Лев", "Орел", "Дракон", "Тигр"],
    answer: 0
  },
  {
    question: "Хто директор Гоґвортсу в перших книгах?",
    options: ["Албус Дамблдор", "Северус Снейп", "Рімус Люпин", "Горацій Слизнорт"],
    answer: 0
  },
  {
    question: "Яке прізвище має Герміона?",
    options: ["Грейнджер", "Блек", "Лонгботтом", "Малфой"],
    answer: 0
  },
  {
    question: "Яке заклинання роззброює супротивника?",
    options: ["Експеліярмус", "Авада Кедавра", "Люмос", "Акціо"],
    answer: 0
  },
  {
    question: "Як називається школа, де навчається Гаррі?",
    options: ["Гоґвортс", "Бобатон", "Дурмстранґ", "Ільверморні"],
    answer: 0
  },
  {
    question: "Яке магічне створіння є другом Гаррі?",
    options: ["Гедвіґа", "Кіт Герміони", "Павук Гаррі", "Кентавр"],
    answer: 0
  },
  {
    question: "Яке ім’я у головного злодія?",
    options: ["Волдеморт", "Снейп", "Люпин", "Малфой"],
    answer: 0
  },
  {
    question: "Як називається чарівна гра на мітлах?",
    options: ["Квідич", "Магобол", "Флорбол", "Летунія"],
    answer: 0
  },
  {
    question: "Який факультет Гаррі?",
    options: ["Грифіндор", "Слизерин", "Когтевран", "Гафелпаф"],
    answer: 0
  }
];

let harryIndex = 0;
let harryScore = 0;
const userAnswers = [];

// Обробник події для старту квізу Гаррі Поттера
document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-harry-button");
  startButton.addEventListener("click", () => {
    document.getElementById("main-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showHarryQuestion();
  });
});

// Функція для відображення питання та варіантів відповідей
function showHarryQuestion() {
  const q = harryQuestions[harryIndex];
  document.getElementById("question").textContent = q.question;

  const answersEl = document.getElementById("answers");
  answersEl.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => handleHarryAnswer(index);
    answersEl.appendChild(btn);
  });
}

// Функція для обробки вибору відповіді користувачем
function handleHarryAnswer(selectedIndex) {
  const correct = harryQuestions[harryIndex].answer === selectedIndex;
  if (correct) harryScore++;

  userAnswers.push({
    question: harryQuestions[harryIndex].question,
    correct: correct
  });

  harryIndex++;
  if (harryIndex < harryQuestions.length) {
    showHarryQuestion();
  } else {
    showHarryResult();
  }
}

// Функція для відображення результатів квізу Гаррі Поттера
function showHarryResult() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("score").textContent =
    `Правильних відповідей: ${harryScore} з ${harryQuestions.length}`;

  const list = document.getElementById("detailed-results");
  list.innerHTML = "";

  userAnswers.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `Питання ${index + 1}: ${entry.correct ? "Так ✅" : "Ні ❌"}`;
    list.appendChild(li);
  });
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

let narniaIndex = 0;
let narniaScore = 0;
const narniaAnswers = [];

// Обробник події для старту квізу Нарнії
document.addEventListener("DOMContentLoaded", () => {
  const btnStart = document.getElementById("start-narnia-button");
  btnStart.addEventListener("click", () => {
    document.getElementById("main-screen").style.display = "none";
    document.getElementById("narnia-quiz-container").style.display = "block";
    showNarniaQuestion();
  });
});

// Функція для відображення питання та варіантів відповідей для Нарнії
function showNarniaQuestion() {
  const q = narniaQuestions[narniaIndex];
  const qEl = document.getElementById("narnia-question");
  const ansEl = document.getElementById("narnia-answers");

  qEl.textContent = q.question;
  ansEl.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => handleNarniaAnswer(index);
    ansEl.appendChild(btn);
  });
}

// Функція для обробки вибору відповіді користувачем для Нарнії
function handleNarniaAnswer(selected) {
  const correct = selected === narniaQuestions[narniaIndex].answer;
  if (correct) narniaScore++;

  narniaAnswers.push({
    question: narniaQuestions[narniaIndex].question,
    correct: correct
  });

  narniaIndex++;
  if (narniaIndex < narniaQuestions.length) {
    showNarniaQuestion();
  } else {
    showNarniaResult();
  }
}

// Функція для відображення результатів квізу Нарнії
function showNarniaResult() {
  document.getElementById("narnia-question-container").style.display = "none";
  document.getElementById("narnia-result").style.display = "block";
  document.getElementById("narnia-score").textContent =
    `Правильних відповідей: ${narniaScore} з ${narniaQuestions.length}`;

  const list = document.getElementById("narnia-detailed-results");
  list.innerHTML = "";
  narniaAnswers.forEach((entry, i) => {
    const li = document.createElement("li");
    li.textContent = `Питання ${i + 1}: ${entry.correct ? "Так ✅" : "Ні ❌"}`;
    list.appendChild(li);
  });
}

// Функція для перезапуску квізу Нарнії
function restartNarniaQuiz() {
  narniaIndex = 0;
  narniaScore = 0;
  narniaAnswers.length = 0;

  document.getElementById("narnia-result").style.display = "none";
  document.getElementById("narnia-question-container").style.display = "block";

  showNarniaQuestion();
}

// Функція для повернення на головний екран з квізу Нарнії
function returnToMainFromNarnia() {
  document.getElementById("narnia-quiz-container").style.display = "none";
  document.getElementById("main-screen").style.display = "block";

  narniaIndex = 0;
  narniaScore = 0;
  narniaAnswers.length = 0;
  document.getElementById("narnia-question-container").style.display = "block";
  document.getElementById("narnia-result").style.display = "none";
}
