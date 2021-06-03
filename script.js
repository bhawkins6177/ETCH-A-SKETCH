const container = document.querySelector('#container');

function StartBoard(input) {


    for (let i = 0; i < input; i++) {
  
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

        for (let i = 0; i < input; i++){
            const content = document.createElement('div');
            content.classList.add('content')
            row.appendChild(content)
        }
    }  
    let content = document.querySelectorAll('.content')
        content.forEach(function(box) {
        box.addEventListener('mouseenter', function(){
        box.classList.add('hoverContent')  
                    })
                }  
            )  
        }

let input = 16

StartBoard(input)

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    let UserInput = prompt('please enter a number');
    const container = document.getElementById('container');
    container.innerHTML = ''; 



    StartBoard (UserInput)

    
})



    
/*

for (let i=0; i< input*input; i++) {
    
    let content = document.querySelector('.content');
    content.addEventListener('mouseenter',function() {
        content.classList.add('hoverContent')
        console.log('test')
    })}





function UserBoard() {
    console.log('test')
    //const row = document.getElementById ('row');
    //row.remove();
    let input = parseInt(prompt('please enter the board size'));

    if (input > 100) {
    alert ('ERROR input has to be less than 101')
    input = 100
    }
    //const content = document.getElementById ('content');
    content.remove();

    for (let i= 0; i < input; i++) {
       const UserRow = document.createElement('div');
        UserRow.classList.add('UserRow')
        UserRow.appendChild(container)

        for (let i= 0; i <input; i++ ) {
            const UserContent = document.createElement('div');
            UserContent.classList.add('UserRow')
            UserContent.appendChild(UserRow)
        }
    }
}



*/
