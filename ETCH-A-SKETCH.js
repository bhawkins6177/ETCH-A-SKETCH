const container = document.querySelector ('#container');

/*for (let i = 0; i< input * input; i++) {
    let input = 16
    const content = document.createElement ('div');
    content.classList.add ('content');
    content.textContent = 'TEST';
    container.appendChild (content);
}*/
function StartBoard () {


for (let i = 0; i < 16; i++) {
  
    const row = document.createElement ('div');
    row.classList.add ('row');
    //row.textContent = 'TEST'
    container.appendChild (row);

    
    



    for (let i = 0; i < 16; i++){
        const content = document.createElement ('div');
        content.classList.add ('content')
        //content.textContent = 'O'
        row.appendChild (content)
    
}}}


StartBoard()
