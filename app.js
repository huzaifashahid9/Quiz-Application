const quizQuestions = [
    {
        id: 1,
        question: "HTML stands for?",
        options: {
            a: "Hyper Text Markup Language",
            b: "Hyper Text Programming Language",
            c: "Hyper Text Styling Language",
            d: "Hyper Text Scripting Language"
        },
        answer: "Hyper Text Markup Language"
    },
    {
        id: 2,
        question: "Which language is used for styling web pages?",
        options: {
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            d: "PHP"
        },
        answer: "CSS"
    },
    {
        id: 3,
        question: "Which of these is a JavaScript framework?",
        options: {
            a: "Django",
            b: "React",
            c: "Laravel",
            d: "Bootstrap"
        },
        answer: "React"
    },
    {
        id: 4,
        question: "Which tag is used to define a hyperlink in HTML?",
        options: {
            a: "link",
            b: "a",
            c: "href",
            d: "url"
        },
        answer: "a"
    },
    {
        id: 5,
        question: "Which company developed JavaScript?",
        options: {
            a: "Microsoft",
            b: "Netscape",
            c: "Oracle",
            d: "Sun Microsystems"
        },
        answer: "Netscape"
    },
    {
        id: 6,
        question: "Which of these is not a programming language?",
        options: {
            a: "Python",
            b: "HTML",
            c: "Java",
            d: "C++"
        },
        answer: "HTML"
    },
    {
        id: 7,
        question: "What does CSS stand for?",
        options: {
            a: "Creative Style Sheets",
            b: "Cascading Style Sheets",
            c: "Colorful Style Sheets",
            d: "Cascading Script Sheets"
        },
        answer: "Cascading Style Sheets"
    },
    {
        id: 8,
        question: "Which HTML tag is used to display an image?",
        options: {
            a: "img",
            b: "image",
            c: "picture",
            d: "src"
        },
        answer: "img"
    },
    {
        id: 9,
        question: "Which HTML tag is used to define a table?",
        options: {
            a: "table",
            b: "thead",
            c: "tr",
            d: "tb"
        },
        answer: "table"
    },
    {
        id: 10,
        question: "Which one is not a JavaScript data type?",
        options: {
            a: "String",
            b: "Boolean",
            c: "Object",
            d: "Function"
        },
        answer: "Function"
    }
];


// console.log(quizQuestions[0].question)
// console.log(quizQuestions[0].options)
var quizcontainer = document.querySelector(".quiz-container")
var counting = 1;
var count = document.getElementById("count");
var question_ele = document.getElementById("quest-ele");
var option_ele = document.getElementById("option-ele");
var indexNum = 0;
var correctAns = 0;
var wrongAns = 0;



// console.log(question_ele)
// console.log(option_ele)




function handleQuestion(){
    var optionsObj = quizQuestions[indexNum].options;
    //console.log(optionsObj);
    question_ele.innerHTML =indexNum+1 + ". " + quizQuestions[indexNum].question;
    option_ele.innerHTML = ""; // takke sare options append na hon har question k bad option empty hojahe
    for (var key in optionsObj) {
        option_ele.innerHTML +=  `<li onclick="checking(this)" >${optionsObj[key]}</li>`;
        }
    }





function nextQues(){
    count.innerHTML = `${indexNum+1} / ${quizQuestions.length}`;
    if(indexNum < quizQuestions.length-1){
        indexNum++;
        handleQuestion();
    }else{
        console.log("Submit");
        quizcontainer.style.display = "none"
        var btn = document.getElementById("btn");
        btn.innerHTML = "Submit";
        var resultcontainer = document.getElementById("resultcontainer")
        resultcontainer.style.display = "block"

        resultcontainer.innerHTML = `
        <h1>  Correct Ans: ${correctAns} </h1>
        <h1>  Wrong Ans: ${wrongAns} </h1>
        <h1>  Percentage: ${(correctAns / quizQuestions.length) * 100}% </h1>`


    }
}    








function checking(ele){

    var allElements = option_ele.children;
    //console.log(allElemet);

    var userSelect = ele.innerHTML;
    var ans  = quizQuestions[indexNum].answer;
    var result = userSelect === ans;

    if(result){
        ele.style.background = "#90EE90";
        correctAns++;
    }else{
        ele.style.background = "#F08080";
        wrongAns++;

        for(i=0 ; i<allElements.length ; i++){
            if(allElements[i].innerHTML== ans){
                allElements[i].style.border = "3px solid green";
            }
        }
    }


    for (var i = 0; i < allElements.length; i++) {
        console.log(allElements[i]);
        allElements[i].style.pointerEvents = "none";
    }
}