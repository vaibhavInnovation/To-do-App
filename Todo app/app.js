//Getting date and time
let date=new Date();
let day=date.getDate();
let month=date.getMonth()+1;
let year=date.getFullYear();
document.querySelector('h1').prepend(`${day}/${month}/${year}`);
console.log(date.getDay());
let count=1;
let input=document.querySelector('input');
input.addEventListener('keydown',addTask);

//Adding task to main div
function addTask(e){
    if(e.keyCode==13){
        if(isEmpty()==true){
            createTask();
            input.value='';
            input.placeholder="Enter your another task...";
        }
        
    }
}

function createLabel(id){
    let crLabel=document.querySelector(`#${id}`);
    let delBtn=document.createElement('input');
    delBtn.className='check';
    delBtn.type='checkbox';
    delBtn.id=id+"-check";
    delBtn.style.width='25px';
    delBtn.style.height='25px';
    crLabel.appendChild(delBtn);

    let newLabel=document.createElement('label');
    newLabel.innerText=input.value;
    newLabel.htmlFor=delBtn.id;
    crLabel.appendChild(newLabel);

    let btn=document.createElement('button');
    btn.innerHTML='&#10006;';
    btn.onclick=removeParmanent;
    crLabel.appendChild(btn);
}

function createTask(){
    let newLi=document.createElement('li');
    newLi.id=`li${count}`;
    count++;
    document.querySelector('ul').prepend(newLi);
    createLabel(newLi.id);
}

function isEmpty(){
    if(input.value==''){
        return false;
    }
    else{
        return true;
    }
}

let re=document.querySelector('ul');
re.addEventListener('change',removeTask);

function removeTask(e){
    let li=document.querySelector(`#${e.target.parentNode.id}`);
    if(e.target.checked==true){
        document.querySelector('del').appendChild(li);
        li.style.opacity='0.3';
    }else{
        console.dir(e);
        li.style.opacity='1';
        document.querySelector('ul').prepend(li);
    } 
}

function removeParmanent(e){
    document.querySelector(`#${e.target.parentNode.id}`).remove();
}