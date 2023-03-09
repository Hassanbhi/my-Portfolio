
// text typing effect creating

let typedTextSpan = document.querySelector('.typing')
let cursor = document.querySelector('.cursor')
let textarray = ['Programer','Web Designer','Web Developer']
let typingDelay = 200;
let erasingDelay = 100;
let newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textarray[textArrayIndex].length){

        if(!cursor.classList.contains('type')){
            cursor.classList.add('type')
        }
        typedTextSpan.textContent += textarray[textArrayIndex].charAt(charIndex)
        charIndex++
        setTimeout(type,typingDelay)
    }
    else{
        //erase

        cursor.classList.remove('type')
        setTimeout(erase,newTextDelay)

    }
}

function erase (){
    if(charIndex > 0){
        typedTextSpan.textContent = textarray[textArrayIndex].substring(0,charIndex-1) 
        charIndex--;
        setTimeout(erase,erasingDelay)
        if(!cursor.classList.contains('type')){

            cursor.classList.add('type')
        }
    }
    else{
        textArrayIndex++
        if(textArrayIndex>textarray.length){
            textArrayIndex = 0;

        }
        setTimeout(type,typingDelay+1000)

        cursor.classList.remove('type')
    }
}

document.addEventListener('DOMContentLoaded',()=>{
   if(textarray.length){
    setTimeout(type,newTextDelay+250)
   } 
})
type()

// starting skills heading animaction


let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")
let number3 = document.getElementById("number3")
let count1 = 0;
let count2 = 0;
let count3 = 0;

setInterval(()=>{
    if(count1 == 66){
        clearInterval();
    }
    else{
        number1.innerHTML = count1 + "%"
        count1++
    }
},16)
setInterval(()=>{
    if(count2 == 71){
        clearInterval();
    }
    else{
        number2.innerHTML = count2 + "%"
        count2++
    }
},17)
setInterval(()=>{
    if(count3 == 81){
        clearInterval();
    }
    else{
        number3.innerHTML = count3 + "%"
        count3++
    }
},18)

// adding scroll script

// let scrollButton = document.querySelector('.scroll-up-btn')



// window.onscroll = function() {myFunction()};

// function myFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         scrollButton.classList.add("scroll-up-btn-appare")   
//     } 
//     else {
//         scrollButton.classList.remove("scroll-up-btn-appare") 
//     }
// }


// including swiper javascript

// starting bugger manue javascript

let bugger = document.querySelector(".bugger")
let buggerManue = document.querySelector(".bugger-manue")
let buggerClose = document.querySelector(".Close")

bugger.addEventListener('click',()=>{
    buggerManue.classList.remove("bugger-manue-hide")
    buggerManue.classList.add("bugger-manue-appare")
    if(buggerManue.classList.contains("bugger-manue-appare")){
        bugger.style.display = "none"
        console.log(buggerManue.classList.contains("bugger-manue-appare"))
    }
    else{
        bugger.style.display = "flex" 
    }
    
})

buggerClose.addEventListener('click',()=>{
    buggerManue.classList.remove("bugger-manue-appare")
    buggerManue.classList.add("bugger-manue-hide")

    bugger.style.display = "flex" 
})




// starting now logic


let showmore = document.querySelector(".show-more")
let navigatep = document.querySelector(".navigate-p")
let showmorecontent = document.querySelector(".show-more-content")
let hidethis = document.querySelector(".hide-this")
let hide = document.querySelector(".hide")

showmore.addEventListener("mouseover",()=>{
    navigatep.style.display = "flex"
})
showmore.addEventListener("mouseout",()=>{
    navigatep.style.display = "none"
})
showmore.addEventListener("click",()=>{
    showmorecontent.style.display = "inline"
    showmore.style.display = "none"
    hidethis.style.display = 'inline'
})


hidethis.addEventListener("mouseover",()=>{
    hide.style.display = "flex"
})
hidethis.addEventListener("mouseout",()=>{
    hide.style.display = "none"
})


hidethis.addEventListener("click",()=>{
    showmorecontent.style.display = "none"
    showmore.style.display = "inline"
    hidethis.style.display = 'none'
})



let whatbox = document.querySelector(".what-p")
let whatboxh = document.querySelector(".w-p-h")
let whatboximg = document.querySelector(".w-p-i")

const changeimg = ()=>{
    setTimeout(()=>{
        whatboximg.src = "img/R gif.gif"
        whatboxh.innerText = "Responsive design"
        
    },2200)
    setTimeout(()=>{
        whatboxh.style.opacity ="0.5"
        whatboximg.style.opacity = "0.5"
    },5300)
    setTimeout(()=>{
        whatboximg.src = "img/icon1.png"
        whatboxh.innerText = "Web design"
        whatboxh.style.opacity ="1"
        whatboximg.style.opacity = "1"
    },5800)

    setTimeout(changeimg,5950)
}
whatbox.addEventListener('mouseover',changeimg)