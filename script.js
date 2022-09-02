
let images=[
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoq8YfVdrNzOHReGZ98XDdKQ_fuIR4alRvEw&usqp=CAU"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8lRrHtGuPtfKWQM8m6lgG58LnQJkgmy35w&usqp=CAU"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JOUWBlLjGLJFfGvUTD6mwF9R5giMvrzBtw&usqp=CAU"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz13xqAMNt3lcDyEefHQBZpzXRH6FgZWe4Cg&usqp=CAU"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tgEZM_TSyImrMHBJL9KE2Kuzn36yotyprw&usqp=CAU"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xDfi393orvPcSW7MKnO7Qs4RWPGJfgn33w&usqp=CAU"
    }
];
let i=null;
function myFun(){
    i=0;
    let img=document.querySelector("img");
    img.setAttribute("src",images[i].img)

}
let prevBtn=document.getElementById("prev");
prevBtn.addEventListener("click",goPrev);
function goPrev(){
    reset();
    if(i===0){
        let leftEnd=document.getElementById("prev");
        leftEnd.setAttribute("class","btn btn-danger")
        alert("There is no previous image..")
    }else{
        i--;
        let img=document.querySelector("img");
        img.setAttribute("src",images[i].img)
    }
}

let nextBtn=document.getElementById("next");
nextBtn.addEventListener("click",goNext);
function goNext(){
    reset();
    if(i===images.length-1){
        let rightEnd=document.getElementById("next");
        rightEnd.setAttribute("class","btn btn-danger")
        alert("There is no next image..")
    }else{
        i++;
        let img=document.querySelector("img");
        img.setAttribute("src",images[i].img)
    }
}

function reset(){
    if(i===0){
        let leftEnd=document.getElementById("prev");
        leftEnd.setAttribute("class","btn btn-success")
    }else if(i===images.length-1){
        let rightEnd=document.getElementById("next");
        rightEnd.setAttribute("class","btn btn-success")
    }
}