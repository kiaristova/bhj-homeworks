const btnAdd = document.getElementById("tasks__add")
const tasksList = document.getElementById("tasks__list")

btnAdd.addEventListener('click', function(e) {
    e.preventDefault();
    let text = document.getElementById('task__input').value
    if (text.length > 0) {
        document.getElementById('task__input').value = ''
        tasksList.insertAdjacentHTML("afterBegin",'<div class="task"><div class="task__title">'+text+'</div><a href="#" class="task__remove">&times;</a></div>')
        // console.log(tasksList);
        const first = tasksList.childNodes[0]
        const firsRemove = first.querySelector('.task__remove')
        firsRemove.addEventListener('click', function(ev) {
            ev.preventDefault();
            first.remove();
        })
    }
})