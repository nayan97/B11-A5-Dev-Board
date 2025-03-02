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

            alert("Your Task Submitted")

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




