const buttons = document.getElementsByClassName('task-btn');

for (const button of buttons) {
    button.addEventListener('click', 
        function (event){
            event.preventDefault();

            const taskValue  = document.getElementsByClassName('task-value')[0].value;
            const taskValueConverted = parseInt(taskValue);

            const totalTask = document.getElementById('totalTask').innerText;
            const totalTaskConverted = parseInt(totalTask);

            const taskAssigned = document.getElementById('taskAssigned').innerText;
            const taskAssignedConverted = parseInt(taskAssigned);

            const updatedTaskAssigned = taskAssignedConverted - taskValueConverted;
            document.getElementById('taskAssigned').innerText = updatedTaskAssigned;
    
            const updatedTask = taskValueConverted + totalTaskConverted;
            document.getElementById('totalTask').innerText = updatedTask;

            this.setAttribute('disabled', 'disabled');
    
        });    
}

