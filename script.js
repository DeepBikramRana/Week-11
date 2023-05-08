document.getElementById("parent").innerHTML=("Something else");
document.getElementById("parent").style.cssText=("backgorund-color:red; color:white; text-align:center");
document.getElementsById("exercise")[0].innerHTML=("I am 0.");
document.getElementsByTagName("h1")[1].innerHTML=("I am change");
document.querySelector("h1").style.cssText=("background-color:aqua; color:blue")
document.querySelector("#ram").style.cssText=("background-color:red; color:white")
document.querySelector("#mili").style.cssText=("background-color:green; color:pink")

const change = document.querySelectorAll("h2");
for (i=0;i<=change.length;i++){
    change[i].innerHTML=("I am a good boy")
}

function my(){
    const element = document.body;
    element.classList.toggle("dark-mode")
}