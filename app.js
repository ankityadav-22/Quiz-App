const quizData = [{
    question: "What does the term CV stand for in the context of job applications?",
    a: "Curriculum Vitae",
    b: "Computer Vision",
    c: "Customer Value",
    d: "Career Vision",
    correct: "a",
},
{
    question: "Which stage of the hiring process typically involves a one-on-one discussion between a candidate and a potential employer?",
    a: "Screening",
    b: "Interview",
    c: "Assessment",
    d: " Onboarding",
    correct: "b",
},
{
    question: "What is the term for the practice of bringing in external candidates to fill job openings within a company?",
    a: "Outsourcing",
    b: "Headhunting",
    c: "In-house recruitment",
    d: " Talent development",
    correct: "b",
},
{
    question: "In a behavioral interview, what type of questions are commonly asked to assess a candidate's past behavior and experiences?",
    a: "Multiple-choice questions",
    b: "Technical questions",
    c: "Situational questions",
    d: "Yes/No questions",
    correct: "c",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hey Champ!, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);