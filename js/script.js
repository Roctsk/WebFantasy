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


  
function toggleContent(imgElement, src1, src2, titleElement, textElement, title1, title2, text1, text2) {
  // Зробити зображення та текст прозорими
  imgElement.style.opacity = 0;
  titleElement.style.opacity = 0;
  textElement.style.opacity = 0;

  // Затримка для плавної зміни
  setTimeout(() => {
    const isOriginal = imgElement.src.includes(src1);
    imgElement.src = isOriginal ? src2 : src1;

    // Зміна тексту і заголовку
    titleElement.textContent = isOriginal ? title2 : title1;
    textElement.textContent = isOriginal ? text2 : text1;

    imgElement.style.opacity = 1;
    titleElement.style.opacity = 1;
    textElement.style.opacity = 1;
  }, 300);
}

// Отримуємо елементи для Гаррі Поттера
const harry = document.getElementById('harry-image');
const harryTitle = document.getElementById('harry-title');
const harryText = document.getElementById('harry-text');

// Подія кліку для Гаррі Поттера
harry.addEventListener('click', () => {
  toggleContent(
    harry,
    'img/harry-potter-inform.png',
    'img/Jona_Rowling.png',
    harryTitle,
    harryText,
    'Гаррі Поттер — головні герої',
    'Джоан Роулінґ — авторка',
    'Гаррі Поттер — це неймовірна історія про звичайного хлопчика, який одного дня дізнається, що є чарівником. Його життя назавжди змінюється, коли він вступає до школи магії — Гоґвортс, де знаходить друзів, ворогів і своє справжнє призначення. Гаррі стає центральною фігурою у боротьбі проти темних сил, що загрожують усьому чарівному світу.',
    ' Джоан Роулінґ — британська письменниця, яка стала всесвітньо відомою завдяки створенню магічного всесвіту Гаррі Поттера. Першу книгу серії "Гаррі Поттер і філософський камінь" вона написала в кінці 1990-х років, і з того часу книги стали одними з найпопулярніших у світі.'
  );
});

// Отримуємо елементи для Нарнії
const narnia = document.getElementById('narnia-image');
const narniaTitle = document.getElementById('narnia-title');
const narniaText = document.getElementById('narnia-text');

// Подія кліку для Нарнії
narnia.addEventListener('click', () => {
  toggleContent(
    narnia,
    'img/gen-hero-chronicu.png',
    'img/Clive_Staples_Lewis.png',
    narniaTitle,
    narniaText,
    'Хроніки Нарнії — головні герої',
    'Клайв Стейплз Льюїс — автор',
    '«Хроніки Нарнії» — це захоплива історія про чотирьох дітей, які випадково потрапляють у чарівний і загадковий світ. У Нарнії вони зустрічають мудрого і могутнього лева Аслана, який є символом добра, надії та справедливості. Разом із ним діти ведуть боротьбу проти злих сил, що намагаються підкорити цей світ темряві.',
    'Клайв Стейплз Льюїс — англійський письменник, літературний критик, філософ і християнський теолог, найбільш відомий як автор класичної фентезійної серії «Хроніки Нарнії». Льюїс народився в 1898 році в Белфасті, Ірландія, і став одним з найвпливовіших літераторів XX століття.'
  );
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
    timerEl.textContent = `${timeLeft} секунд`;
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

  // Перемішуємо варіанти відповідей
  const options = [...q.options];
  shuffleArray(options); // Перемішуємо варіанти

  // Зберігаємо новий індекс правильної відповіді після перемішування
  const correctIndex = options.indexOf(q.options[q.answer]);

  document.getElementById("question").textContent = q.question;

  const answersEl = document.getElementById("answers");
  answersEl.innerHTML = "";

  timeLeft = 20;
  startTimer();

  options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => handleHarryAnswer(index, correctIndex);
    answersEl.appendChild(btn);
  });
}


// Функція для перемішування масиву
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


// Функція для обробки вибору відповіді користувачем
function handleHarryAnswer(selectedIndex, correctIndex) {
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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
}

// Функція для відображення питання та варіантів відповідей
function showNarniaQuestion() {
  const q = narniaQuestions[narniaIndex];
  document.getElementById("narnia-question").textContent = q.question;

  const answersEl = document.getElementById("narnia-answers");
  answersEl.innerHTML = "";

  // Створюємо масив об'єктів з текстом і оригінальним індексом
  const optionsWithIndex = q.options.map((opt, idx) => ({
    text: opt,
    originalIndex: idx
  }));

  // Перемішуємо ці об'єкти
  shuffleArray(optionsWithIndex);

  // Скидаємо таймер
  timeLefts = 20;
  startNarniaTimer();

  // Створюємо кнопки для варіантів відповідей
  optionsWithIndex.forEach((optObj) => {
    const btn = document.createElement("button");
    btn.textContent = optObj.text;
    btn.onclick = () => handleNarniaAnswer(optObj.originalIndex); // передаємо оригінальний індекс!
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
  const lists = document.getElementById("narnia-detailed-results");
  if (lists) {
    lists.innerHTML = "";
    narniaAnswers.forEach((entry, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>Питання ${index + 1}:</strong><br>
        <em>Ваш вибір:</em> ${narniaQuestions[index].options[entry.selectedAnswer]}<br>
        <em>Правильний варіант:</em> ${narniaQuestions[index].options[narniaQuestions[index].answer]}<br>
        <em>Статус:</em> ${entry.correct ? "Правильна ✅" : "Неправильна ❌"}
      `;
      lists.appendChild(li);
    });
  }
  

  // Кнопки для поділу результатами
  const shareButtons = document.getElementById("narnia-share-buttons");
  shareButtons.innerHTML = `
    <a href="https://www.facebook.com/sharer/sharer.php?u=http://yourwebsite.com" target="_blank" class="narnia-btn">Поділитися на Facebook</a>
    <a href="https://twitter.com/intent/tweet?url=http://mywebsite.com" target="_blank" class="narnia-btn">Поділитися в Twitter</a>
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
