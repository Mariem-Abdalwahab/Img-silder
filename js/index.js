let imgs = [
    {
        id: 1,
        src: "imgs/Nacho & Nya (Minolta SR-T 101, kodak portra 800).jpg",
    },
    
    {
        id: 2,
        src: "imgs/Mountains [1440x900].jpg",
    },
    {
        id: 3,
        src: "imgs/Denver on 35mm [2048x1152].jpg",
    },
    {
        id: 4,
        src: "imgs/Canon AE-1  Fuji Superia X-tra 400 ISO  October 2013_  Oxford city centre.  Film photography, lomo, lomography, 35mm, canon ae1.jpg",
    },
];

let pre = document.querySelector('.pre');
let next = document.querySelector('.next');
let pagin = document.querySelector('.pagin');
let num = document.querySelector('.imgs span');



let imgindex = 0;
let img = document.querySelector('.imgs img');
img.src = imgs[imgindex].src;
num.innerHTML = imgs[imgindex].id
// creat paginantion

function creat(imgs){
    return imgs.map(img=>{
        if(img.id != 1){
            return `<li data-id=${img.id-1} class="li not-active">${img.id}</li>`
        } else{
            return `<li data-id=${img.id-1} class="li active">${img.id}</li>`
        }
    }).join('');

}
pagin.innerHTML = creat(imgs);
let lis = [...document.querySelectorAll('.pagin li')];

// active btns
function activeLi(){
    lis.forEach(li=>{
        if(li.dataset.id == imgindex ){
            li.classList.add('active')
        } else{
            li.classList.remove('active')
        }
    })
}
activeLi();



pre.addEventListener('click',(e)=>{
    if (imgindex == 0) {
        pre.classList.add("notActive");
        next.classList.remove("notActive");
        
    }
    else{
        imgindex--;
        main(e.target);
    }
});

next.addEventListener('click',(e)=>{
    if(imgindex == imgs.length-1){
        pre.classList.remove("notActive");
        next.classList.add("notActive");
        
    } else{
        imgindex++;
        main(e.target);
    }
});

lis.map(li => {
    li.addEventListener("click",(e)=>{
        main(e.target);
    });
});

function main(type){
    
    if(type.classList.contains("li")){
        img.src = imgs[type.dataset.id].src;
        num.innerHTML = imgs[type.dataset.id].id
        imgindex = type.dataset.id;
    }else{
        img.src = imgs[imgindex].src;
        num.innerHTML = imgs[imgindex].id
    }
    check();
    activeLi();
   
}

function check(){
    if (imgindex == 0) {
        next.classList.remove("notActive");
        pre.classList.add("notActive");
        return 0;
    } else if(imgindex == imgs.length-1){
        pre.classList.remove("notActive");
        next.classList.add("notActive");
        return 0;
    }
    return 1;
}

check()