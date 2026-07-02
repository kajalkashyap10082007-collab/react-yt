let subjectInput = document.getElementById("subject");
let questionInput = document.getElementById("question");
let submitBtn = document.getElementById("submitBtn");

let questionList = document.getElementById("questionList");
let rightPane = document.getElementById("rightPane");
let searchBox = document.getElementById("searchBox");

let questions = [];

// Add Question

submitBtn.addEventListener("click", function () {

    let subject = subjectInput.value;
    let question = questionInput.value;

    let questionObject = {
        subject: subject,
        question: question,
        answers: []
    };

    questions.push(questionObject);

    displayQuestions();

    subjectInput.value = "";
    questionInput.value = "";
});


// Display Questions

function displayQuestions() {

    questionList.innerHTML = "";

    for(let i=0; i<questions.length; i++) {

        let div = document.createElement("div");

        div.innerHTML =
        "<h3>" + questions[i].subject + "</h3>" +
        "<p>" + questions[i].question + "</p>";

        div.style.border = "1px solid black";
        div.style.margin = "10px";
        div.style.padding = "10px";

        div.addEventListener("click", function() {
            showQuestion(i);
        });

        questionList.appendChild(div);
    }
}


// Show Question Details

function showQuestion(index) {

    let q = questions[index];

    rightPane.innerHTML =

    "<h2>" + q.subject + "</h2>" +

    "<p>" + q.question + "</p>" +

    "<button onclick='resolveQuestion(" + index + ")'>Resolve</button>" +

    "<h3>Previous Answers</h3>" +

    "<div id='answerList'></div>" +

    "<br>" +

    "<input type='text' id='name' placeholder='Name'>" +

    "<br><br>" +

    "<textarea id='comment' placeholder='Comment'></textarea>" +

    "<br><br>" +

    "<button onclick='addAnswer(" + index + ")'>Submit</button>";

    showAnswers(index);
}


// Add Answer

function addAnswer(index) {

    let name = document.getElementById("name").value;

    let comment = document.getElementById("comment").value;

    let answer = {
        name: name,
        comment: comment
    };

    questions[index].answers.push(answer);

    showAnswers(index);
}


// Display Answers

function showAnswers(index) {

    let answerList = document.getElementById("answerList");

    answerList.innerHTML = "";

    for(let i=0; i<questions[index].answers.length; i++) {

        let div = document.createElement("div");

        div.innerHTML =

        "<b>" + questions[index].answers[i].name + "</b>" +

        "<p>" + questions[index].answers[i].comment + "</p>";

        answerList.appendChild(div);
    }
}


// Resolve Question

function resolveQuestion(index) {

    questions.splice(index,1);

    displayQuestions();

    rightPane.innerHTML =

    "<h2>Welcome to Discussion Portal</h2>" +

    "<input type='text' id='subject' placeholder='Subject'>" +

    "<br><br>" +

    "<textarea id='question' placeholder='Question'></textarea>" +

    "<br><br>" +

    "<button id='newSubmitBtn'>Submit</button>";

    document.getElementById("newSubmitBtn").addEventListener("click", function(){

        let subject = document.getElementById("subject").value;
        let question = document.getElementById("question").value;

        let obj = {
            subject: subject,
            question: question,
            answers:[]
        };

        questions.push(obj);

        displayQuestions();

        document.getElementById("subject").value = "";
        document.getElementById("question").value = "";
    });
}


// Search

searchBox.addEventListener("keyup", function() {

    let text = searchBox.value.toLowerCase();

    questionList.innerHTML = "";

    for(let i=0; i<questions.length; i++) {

        let subject = questions[i].subject.toLowerCase();

        if(subject.includes(text)) {

            let div = document.createElement("div");

            div.innerHTML =
            "<h3>" + questions[i].subject + "</h3>" +
            "<p>" + questions[i].question + "</p>";

            div.style.border = "1px solid black";
            div.style.margin = "10px";
            div.style.padding = "10px";

            div.addEventListener("click", function() {
                showQuestion(i);
            });

            questionList.appendChild(div);
        }
    }
});