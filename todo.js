var add = document.getElementById('add');
var todo = document.getElementById('todo');
var list = [];
// var close = document.createElement('button');
// close.innerHTML = 'x';

function makeList(){
    let template = list.map(item => `<li>${item}<button>X</button></li>`).join('\n');
    document.querySelector('ul').innerHTML = template;
    // document.querySelector('button').addEventListener('click',function(){
    //     this.closest('li').remove();
    // });
    document.querySelector('button').onclick = function(){
        this.parentElement.remove();
    }
    
}

function addToList(){

    if( !todo.value ){
    alert('Please Enter Something')
    }
    else{
        list.push(todo.value);
        todo.value = '';
        makeList();
    }
}


