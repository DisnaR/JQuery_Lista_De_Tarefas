$(document).ready(function() {    
    $('#taskForm').submit(function(event) {
        event.preventDefault();
        addTask();
    });    
    $('#taskList').on('click', 'li', function() {
        toggleTask(this);
    });
    function addTask() {
        var taskName = $('#taskName').val();   
        $('#taskName').val('');    
        $('#taskList').append('<li class="task-item">' + taskName + '</li>');
    }
    function toggleTask(item) {    
        $(item).toggleClass('completed');
    }
});
