let add = document.getElementById('add');
let todo = document.getElementById('todo');
let list = [];


function makeList() {
    let template = list.map(item => `<li><span>${item}</span><button onclick="removeItem(this);">X</button><h5 id="time"></h5></li>`).join('\n');
    document.querySelector('ul').innerHTML = template; 
    
}

function removeItem(removeBtn) {
    let itemTxt = removeBtn.previousSibling.innerHTML;
    list.map((item, index) => {
        if (item == itemTxt) {
            list.splice(index, 1);
        }
    });
    makeList();
    
}

add.addEventListener('click', function(event){

    if (!todo.value) {
        alert('Please Enter Something');
    }
    else {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        list.push(todo.value);
        todo.value = '';
        makeList();
        document.getElementById('time').innerHTML = time;
        event.preventDefault();
    }
});