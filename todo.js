var add = document.getElementById('add');
var todo = document.getElementById('todo');
var list = [];
// var close = document.createElement('button');
// close.innerHTML = 'x';

function makeList(){
    let template = list.map(item => `<li>${item}<button>x</button></li>`).join('\n');
    document.querySelector('ul').innerHTML = template;
    // document.body.appendChild(close);
    // item.appendChild(close);
    // close.onClick=function(){
    //     this.parentElement.style.display = 'none';
    // }
    // document.addEventListener('click', function(){
    //     this.parentElement.style.display = 'none';
    // });
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


