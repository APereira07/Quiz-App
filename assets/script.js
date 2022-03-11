const quizData = [
    {
        question: 'What quirk does Midoriya have?',
        a: 'Explosion',
        b: 'One for All',
        c: 'Super Strength',
        d: 'All for One',
        correct: 'b'
    }, {
        question: 'Who got first in the UA school festival?',
        a: 'Todoroki',
        b: 'Midoriya',
        c: 'Mirio',
        d: 'Bakugo',
        correct: 'd'
    }, {
        question: 'Where did Midoriya recieve his quirk?',
        a: 'UA',
        b: "All Might's House",
        c: 'The Beach',
        d: 'Hidden Leaf Village',
        correct: 'c'
    }, {
        question: 'Which faculty member did Denki and Mina face in the Final Exams?',
        a: 'Nezu',
        b: 'Midnight',
        c: 'Present Mic',
        d: 'Aizawa',
        correct: 'a'
    }, {
        question: "What quirk does Midoriya's father have?",
        a: 'Cremation',
        b: 'Hellflame',
        c: 'Breathes Fire',
        d: 'One for All',
        correct: 'c'
    }
]; 

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById ('question');

const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    const answerEls = document.querySelectorAll('.answer');

    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            return answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = 
                `<h2>You answered correclty  ${score}/${quizData.length} questions.</h2> 
                <img src="./assets/aizawa.gif">

                <button onClick = "location.reload()">Retake Quiz</button>`;
        }
    }
});