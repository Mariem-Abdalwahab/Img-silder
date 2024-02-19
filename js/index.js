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

let imgindex = 1;
let img = document.querySelector('.imgs img');
img.src = imgs[imgindex].src;
// creat paginantion

function creat(imgs){
    return imgs.map(img=>{
        return `<li data-id=${img.id}>${img.id}</li>`
    }).join('');

}
pagin.innerHTML = creat(imgs);
let lis = document.querySelectorAll('.pagin li');
lis = Array.from(lis);


pre.addEventListener('click',main);
next.addEventListener('click',main);

lis.map(li => {
    li.addEventListener("click",main);
});

function main(){
    if(this.classList.contains('pre')){
        imgindex--;
        if(imgindex<0){
            imgindex = imgs.length-1;
        }

    }
    else if(this.classList.contains('next')){
        imgindex++;
        if(imgindex==imgs.length){
            imgindex = 0;
        }
    }
    else{
        imgindex = this.dataset.id;
        imgindex--;
        console.log(imgindex);
    }

    img.src = imgs[imgindex].src;
    console.log(img.id)
}