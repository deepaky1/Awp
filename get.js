let enterbtn = () =>{
let xhr = new XMLHttpRequest();

let url ="https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=";

xhr.open("GET","url");

xhr.onload = () => {

const jsondata = JSON.parse(xhr.responseText);


console.log(jsondata);

xhr.send();
}

}