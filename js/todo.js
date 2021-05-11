let add = document.getElementById('add');
let todo = document.getElementById('todo');
let list = [];
window.onload = function(){
    if(JSON.parse(localStorage.getItem('list'))!=null){
        list = JSON.parse(localStorage.getItem('list'));
        makeList();
    }
}


function makeList() {

    let template = list.map(item => `<li onclick="strikeThrough(this);"><span>${item.title}</span><button onclick="removeItem(this);">X</button><h5 id="time">${item.time}</h5></li>`).join('\n');
    document.querySelector('ul').innerHTML = template;
}

function removeItem(removeBtn) {
    let itemTxt = removeBtn.previousSibling.innerHTML;
    list.map((item, index) => {
        if (item.title == itemTxt) {
            list.splice(index, 1);
        }
        if(localStorage.getItem('list') == null){
            localStorage.setItem('list', JSON.stringify(list));
        }else{
            localStorage.setItem('list', JSON.stringify(list));
        }
    });
    makeList();

}

function strikeThrough(liItem){
    if(liItem.style.textDecoration == "line-through" || liItem.style.textDecorationColor == "white" ){
        liItem.style.textDecoration = "none";
    }else{
        liItem.style.textDecoration = "line-through";
        liItem.style.textDecorationColor = "white";
    }

    if(localStorage.getItem('list') == null){
        localStorage.setItem('list', JSON.stringify(list));
    }else{
        localStorage.setItem('list', JSON.stringify(list));
    }
}

add.addEventListener('click', function (event) {

    if (!todo.value) {
        alert('Please Enter Something');
    }
    else {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        list.push({ title: todo.value.trim(), time });
        todo.value = '';
        if(localStorage.getItem('list') == null){
            localStorage.setItem('list', JSON.stringify(list));
        }else{
            localStorage.setItem('list', JSON.stringify(list));
        }
        makeList();
        event.preventDefault();
    }
});