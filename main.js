const questions = [
	{
		question: "Чи варто враховувати обмежену видимість мотоцикла в дзеркалі автомобіля, що їде попереду, під час виконання обгону або об'їзду?",
		answers: [
			"Транспортним засобам, що рухаються в попутному напрямку по тій смузі, на яку Ви маєте намір перестроїтися.",
			"Тільки механічним транспортним засобам, що рухаються в попутному напрямку по тій смузі, на яку Ви маєте намір перестроїтися.",
			"Тільки автомобілям, автобусам і велосипедистам, що рухаються в попутному напрямку по тій смузі, на яку Ви маєте намір перестроїтися.",
			"1 та 2 відповіді."
		],
		correct: 1,

	},
	{
		question: "За рахунок чого запалюється робоча суміш в бензинових двигунах?",
		answers: [
			"За рахунок відкритого вогню від попередньої порції палива.",
			"За рахунок електричного розряду свічки запалювання.",
			"За рахунок різкого підвищення тиску і подальшої детонації.",
			"2 та 3 відповіді.",
		],
		correct: 2,
	},
	{
		question: " Які гальмівні механізми задіяні під час увімкнення гірського гальма? ",
		answers: [
			"Гальмівні механізми не задіяні.",
			"Передні й задні.", 
			"Тільки задні.",
			"Тільки передні."
		],
		correct: 1,
	},
	{
		question: "Поза населеними пунктами на дорогах, позначених знаком 5.3 «Дорога для автомобілів», дозволена максимальна швидкість автобусів, крім мікроавтобусів, не перевищує:",
		answers: [
			"110 км/год.",
			"70 км/год.", 
			"80 км/год.",
			"90 км/год.",
		],
		correct: 4,
	},
	{
		question: "Перевірка Ваших «сліпих зон» особливо важлива:",
		answers: [
			"Перед тим, як виконати маневр перестроювання.",
			"Перед тим, як з’їхати з проїзної частини на узбіччя.",
			"Перед виїздом з узбіччя на проїзну частину.",
			"У всіх перерахованих вище ситуаціях. ",
		],
		correct: 4,
	},
	{
		question: "Чи дозволяється водіям подавати звуковий сигнал?",
		answers: [
			"Дозволяється завжди.", 
			"Забороняється у населених пунктах і поза населеними пунктами, крім випадків, коли без цього неможливо запобігти дорожньо-транспортній пригоді.", 
			"Забороняється у населених пунктах, окрім випадків, коли без цього неможливо запобігти дорожньо-транспортній пригоді.", 
			"Не дозволяється."
		],
		correct: 3,
	},
	{
		question: "Тривалість керування для водія на тиждень з урахуванням понаднормових робіт не повинна перевищувати:",
		answers: [
			"36 годин.",
			"42 годин.", 
			"47 годин.",
			"48 годин.",
		],
		correct: 4,
	},
	{
		question: "Які з перерахованих дій учасників дорожнього руху можуть призвести до виникнення аварійної ситуації під час перестроювання в транспортному потоці?",
		answers: [
			"Перестроювання автомобіля в «сліпій» (мертвій) зоні.",
			"Різке гальмування автомобіля, що рухається попереду.", 
			"Різке прискорення автомобіля, що рухається позаду сусідньою смугою руху.",
			"Усі, перелічені вище.",
		],
		correct: 4,
	},
	{
		question: "Що забороняється водієві маршрутного транспортного засобу під час перевезення пасажирів? ",
		answers: [
			"Їсти і пити.",
			"Користуватися засобами зв'язку тримаючи їх у руці.", 
			"Палити.",
			"Все вищеперераховане.",
		],
		correct: 4,
	},
	{
		question: "Які зовнішні світлові прилади необхідно ввімкнути у разі зупинення транспортного засобу поліцейським?",
		answers: [
			"Не потрібно вмикати жодних зовнішніх світлових приладів.",
			"Аварійну світлову сигналізацію.", 
			"Денні ходові вогні або протитуманні фари.",
			"Стоянкові вогні.",
		],
		correct: 2,
	},

	
];

//Находим элеметы (обёртка для заголовков и вопросов 1,2...)
const headerContainer = document.querySelector('#header'); 
const listContainer = document.querySelector('#list'); 
const submitBtn = document.querySelector('#submit'); 

let score = 0; 
let questionIndex = 0; 

clearPage();  
showQuestion(); 
submitBtn.onclick = checkAnswer; 

function clearPage() {
	headerContainer.innerHTML = ''; 
	listContainer.innerHTML = ''; 
}

function showQuestion(){ 
	
	//Вопрос
	const headerTemplate = `<h2 class="title">%title%</h2>`; 
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question']); 

	headerContainer.innerHTML = title; 

	//Варианты ответов
	let answerNumber = 1; 
	for(answerText of questions[questionIndex]['answers']) { 

		const questionTemplate = 
			`<li>
			    <label>
			        <input value="%number%"type="radio" class="answer" name="answer" />
			        <span>%answer%</span>
		        </label>
	        </li>`;

			const answerHTML = questionTemplate
			                        .replace('%answer%', answerText)
									.replace('%number%', answerNumber);

			listContainer.innerHTML += answerHTML; 
	        answerNumber++; 
	}
}

function checkAnswer() {

	//Находим выбраную кнопку
	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked'); 

	//Если ответ не выбран - ничего не делаем, выходим из функции
	if(!checkedRadio) { 
		submitBtn.blur();
		return 
	}

	//Узнаём номер ответа пользователя
	const userAnswer = parseInt(checkedRadio.value) 

	//Если ответ правельный - увеличиваем счёт 
	if(userAnswer === questions[questionIndex]['correct']) {  
		score++; 
		
	}

	//Делаем проверку был ли это последний вопрос
	if (questionIndex !== questions.length -1) { 
		questionIndex++;
		clearPage();
		showQuestion();
		return;
	} else { 
		clearPage();
		showResults(); 
	
	}
}


function showResults() { 

	const resultsTemplate = ` 
			<h2 class="title">%title%</h2>
			<h3 class="summary">%message%</h3>
			<p class="result">%result%</p>
		`;

	let title;
	let message;
	//Варианты заголовков и текста
	if (score === questions.length) { 
		title = 'Вітаємо!';
		message = 'Ви відповіли вірно на всі питання!';
	} else if ((score * 100) / questions.length >= 50) {  
		title = 'Непоганий результат';
		message = 'Ви дали більше половини правильних відповідей';
	} else { 
		title = 'Варто спробувати знову';
		message = 'Поки що у вас меньше половини правильних відповідей';
	}

	//Вывод результата
	let result = `${score} из ${questions.length}`; 

	const finalMessage = resultsTemplate 
	                        .replace('%title%', title) 
							.replace('%message%', message) 
							.replace('%result%', result) 

    headerContainer.innerHTML = finalMessage; 

	submitBtn.blur(); 
	submitBtn.innerText = "Спробувати ще раз";
	submitBtn.onclick = () => history.go();  
}

