
//start 
let start = document.querySelector("#start");

//rules 
let rules = document.querySelector("#rules");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");

//trivia 
let trivia = document.querySelector("#trivia");
let time = document.querySelector("#time");

//questions 
let questNum = document.querySelector("#questNum");
let questText = document.querySelector("#questText");

//choices
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//correct and next
let correctTotal = document.querySelector("#correctTotal");
let next = document.querySelector("#next");

//result
let results = document.querySelector("#results");
let points = document.querySelector("#points");
let quit = document.querySelector("#quit");
let again = document.querySelector("#again");

let options = document.querySelectorAll(".options");

let index = 0;
let clock = 0;
let interval = 0;

let correct = 0;


let userAns = undefined;

start.addEventListener("click" , ()=>{
    start.style.display = "none";
    rules.style.display = "block";
});

exit.addEventListener("click" , ()=>{
    start.style.display = "block";
    rules.style.display = "none";
});

let countDown = ()=>{
    if(clock === 15)
    {
        clearInterval(interval);
        next.click();
    }
    else 
        {
            clock++;
            time.innerText = clock;
        }
}


let loadData = ()=>{
    questNum.innerText = index + 1 + ". ";
    questText.innerText = list[index].question;
    option1.innerText = list[index].choice1;
    option2.innerText = list[index].choice2;
    option3.innerText = list[index].choice3;
    option4.innerText = list[index].choice4;

    
    clock = 0; 
}

loadData();




continueBtn.addEventListener("click", () => {
    trivia.style.display = "block";
    rules.style.display = "none";

    interval = setInterval(countDown, 1000);
    loadData();


options.forEach(removeActive =>{
    removeActive.classList.remove("active");
})    
    correctTotal.innerHTML = `${correct = 0} Out of ${list.length} Questions`;

});


options.forEach( (choices,choiceNum) =>{
    choices.addEventListener("click" , ()=>{
        choices.classList.add("active");
        
        if(choiceNum === list[index].answer)
        {
            correct++;
        }
        else
            {
                correct += 0;
            }
            
            clearInterval(interval)

            for(i = 0; i <= 3; i++)
                {
                    options[i].classList.add("disabled");
                }
    })
}); 

next.addEventListener("click" , ()=>{

    if(index !== list.length - 1)
        {
            index++;
            options.forEach(removeActive =>{
                removeActive.classList.remove("active");
            })

            loadData();

            correctTotal.style.display = "block";
            correctTotal.innerHTML = `${correct} Out of ${list.length} Questions`;
            clearInterval(interval);
            interval = setInterval(countDown , 1000);
        }
        else 
        {
            index = 0;


            clearInterval(interval);
            trivia.style.display = "none";
            points.innerHTML = `You got ${correct} out of ${list.length}`;
            results.style.display = "block";
        }
        for (i = 0; i <= 3; i++) {
            options[i].classList.remove("disabled");
        }
    })

    quit.addEventListener("click", () => {
        start.style.display = "block";
        results.style.display = "none";
    });

    again.addEventListener("click", () => {
        rules.style.display = "block";
        results.style.display = "none";
    });

