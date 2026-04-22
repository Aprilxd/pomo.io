const xpElement = document.getElementById("xp");
let xp = 0;

const savedXP = localStorage.getItem("xp");

if(savedXP){
    xp = parseInt(savedXP);
    xpElement.textContent = xp;
}

let tasks = [];

const savedtasks = localStorage.getItem("Tasks");

if(savedtasks){
    tasks = JSON.parse(savedTasks);
}

tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;

    li.addEventListener("Click", () => {
        li.classList.toggle("Completed");
    });

    todoList.appendChild(li);
});

const savedSessions = localStorage.getItem("sessions");

if(savedSessions){
    sessionCount = parseInt(savedSessions);
    sessionCountElement.textContent = sessionCount;
}
const sessionCountElement = document.getElementById("sessionCount");
let sessionCount = 0;
const alarm = new Audio("alarm.mp3");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const Next = document.getElementById("Next");
const timer = document.getElementById("timer");

let timeleft = 3000;
let interval;

const updateTimer = () => {
    const minutes = Math.floor(timeleft/ 60);
    const seconds = timeleft % 60;

    timer.innerHTML = `${minutes.toString().padStart(2,"0")}
    :
    ${seconds.toString().padStart(2,"0")}`;
};

const starttimer = ()=> {
    alarm.play();
    interval = setInterval(() => {
        timeleft--;
        updateTimer();

        if(timeleft === 0){
            
            clearInterval(interval);
            alarm.play();
            sessionCount++;
            sessionCountElement.textContent = sessionCount;
            localStorage.setItem("sessions", sessionCount);
            xp += 25;
            xpElement.textContent = xp;
            localStorage.setItem("xp", xp);
            alert("Break");
            timeleft = 3000;
            updateTimer();
        }
        
    }, 1000);
};

const stoptimer = () => clearInterval(interval);

const resettimer = () => {
    clearInterval(interval);
    timeleft = 3000
    updateTimer();
}

start.addEventListener("click", starttimer);
stop.addEventListener("click", stoptimer);
Next.addEventListener("click", resettimer);

updateTimer();

const todoInput = document.getElementById("todoinput");
const addMissionBtn = document.getElementById("addMission");
const todoList = document.getElementById("todo");



todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addMissionBtn.click();
    }
});

addMissionBtn.addEventListener("click", () => {

    const taskText = todoInput.value.trim();

    if(taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // click task to complete it
    li.addEventListener("click", () => {
        li.classList.toggle("completed");

        if(li.classList.contains("completed")){
            xp += 10;
            xpElement.textContent = xp;
            localStorage.setItem("xp", xp);
        }
    });

    todoList.appendChild(li);

    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    todoInput.value = "";
});

todoInput.addEventListener("keypress", (e) =>{
    if (e.key === "Enter"){
        addMissionBtn.click();
    }

});
   
li.addEventListener("click", function() {
  li.classList.toggle("completed");
});