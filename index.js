document.querySelector("h1").addEventListener("mouseover", function(){
    document.querySelector("h1").classList.add("big");
});

document.querySelector("h1").addEventListener("mouseleave", function(){
    document.querySelector("h1").classList.remove("big");
});
