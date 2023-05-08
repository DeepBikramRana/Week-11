function myFunction(){
    const element = document.body;
    element.classList.toggle("dark-mode");
    const button = document.querySelector("button");
    if(element.classList.contains("dark-mode")){
        button.textContent="Light mode";
    }else{
        button.textContent="Dark mode";
    }
}

const textchange = document.querySelector("#change");
const values = ["a student", "a traveller", "a king"];
let counter = 0;
setInterval(()=>{
    textchange.textContent=values[counter];
    counter=(counter+1)%values.length;
},3000);