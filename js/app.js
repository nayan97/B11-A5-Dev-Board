
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  const currentDate = new Date().toLocaleString("en-US", options);
  document.getElementById("todayDate").innerHTML = currentDate;

  const onlyTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Dhaka", 
    hour12: true,
  };
  
  const currentTime = new Date().toLocaleTimeString("en-US", onlyTime);
 
  

// complete task function 

const buttons = document.getElementsByClassName('task-btn');

for (const button of buttons ) {
    button.addEventListener('click', 
        function (event){
            event.preventDefault();

            const taskValue  = document.getElementsByClassName('task-value')[0].value;
            const taskValueConverted = parseInt(taskValue);

            const totalTask = document.getElementById('totalTask').innerText;
            const totalTaskConverted = parseInt(totalTask);

            const taskAssigned = document.getElementById('taskAssigned').innerText;
            const taskAssignedConverted = parseInt(taskAssigned);
            
            // code for activity log
            const card = button.closest('.card-body');
            const titleText = card.querySelector('.card-title').innerText;
            if (taskAssignedConverted > 1) {
                alert("Your Task Submitted")
            }else {
                alert("Your Task Submitted")
                alert("congrats!");
            }

     
            
            
            const activityLog =  document.querySelector('.activity-log');
            const logSet = document.createElement('p');
            logSet.innerText = 'You have Complete The Task ' +  titleText + ' at ' + currentTime;
            activityLog.appendChild(logSet);

            const updatedTaskAssigned = taskAssignedConverted - taskValueConverted;
            document.getElementById('taskAssigned').innerText = updatedTaskAssigned;
    
            const updatedTask = taskValueConverted + totalTaskConverted;
            document.getElementById('totalTask').innerText = updatedTask;



            this.setAttribute('disabled', 'disabled');
    
        });    

    }


// code for bg coloor change
function generateHexColor() {

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}


document.addEventListener('DOMContentLoaded', bgColor);

function bgColor() {
    const root = document.getElementById('bodyBg');
    const btn = document.getElementById('bgChangeBtn');


    btn.addEventListener('click', function () {
        const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        
    });
}


// change url

document.getElementById("blog")
.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "blog.html";

});


document.getElementById("reset-btn")
.addEventListener("click", function(event){
    event.preventDefault();
  document.getElementById('activity-content').innerText = "";

});


