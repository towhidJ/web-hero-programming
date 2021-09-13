function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => dataLoad(json))
}



function dataLoad(json)
{
    var sec = document.querySelector('section');

    const div = document.createElement('div');
    div.innerHTML= `
    <h1>${json.title}</h1>
    <p>${json.body}</p>
    `
    sec.appendChild(div);
}