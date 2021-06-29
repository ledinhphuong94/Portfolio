let listMenu = document.getElementsByClassName('link1')
let aboutmeInfoList = document.getElementsByClassName('about__info_detail')
let knowledgeDetail = document.getElementsByClassName('resume__detail_inner')
let skillGroup = document.getElementsByClassName('skill__group__outer')


function resetClick(){
    for(let i = 0; i < listMenu.length; i++){
        listMenu[i].classList.remove('effectClick')
    }
    document.getElementById('up').style.visibility = 'hidden'
}

// for(let i = 0; i < listMenu.length; i++){
//     listMenu[i].addEventListener('click',function(){
//         resetClick()
//         listMenu[i].classList.add('effectClick')
//     })   
// }

let positionElement = []
    
window.addEventListener('scroll',()=>{
    positionElement[0] = document.getElementById("introduce").getBoundingClientRect().top;
    positionElement[1] = document.getElementById("aboutme").getBoundingClientRect().top;
    positionElement[2] = document.getElementById("education").getBoundingClientRect().top;
    positionElement[3] = document.getElementById("projects").getBoundingClientRect().top;
    positionElement[4] = document.getElementById("contact").getBoundingClientRect().top;     
    
    console.log(positionElement[3])

    if(positionElement[0] >390){
        resetClick();
    }

    for(let i=0; i< positionElement.length; i++){
        if(positionElement[i] < 200){
            resetClick()
            for(let y = 0; y < listMenu.length; y++){
                listMenu[i].classList.add('effectClick')
            }
        }
    }
    if(positionElement[0] < 200){
        document.getElementById('introduce__potraitphoto').classList.add('fall__down__on__scroll');
        document.getElementById('introduce__content').classList.add('go_right_on_scroll')
    }
    if(positionElement[1] < 200){
        for(let i = 0; i < aboutmeInfoList.length; i++){
            aboutmeInfoList[i].classList.add(`go_left_on_scroll${i}`)
        }
        document.getElementById('aboutme__header').classList.add('go_right_on_scroll')
        document.getElementById('aboutme__avatar').classList.add('fall__down__on__scroll')
        document.getElementById('aboutme__content').classList.add('go_up_on_scroll')
    }

    if(positionElement[2] < 200){
        document.getElementById('up').style.visibility = 'visible';
        for(let i = 0; i < knowledgeDetail.length; i++){
            knowledgeDetail[i].classList.add(`fall__down__on__scroll${i}`)
        }
        for(let i = 0; i < skillGroup.length; i++){
            skillGroup[i].classList.add(`go_left_on_scroll${i}`)
        }
        document.getElementById('knowledge__header').classList.add('go_right_on_scroll')
        
    }

    if(positionElement[3] < 200){
        document.getElementById('carousel__projects').classList.add('go_up_on_scroll')
        document.getElementById('projects__header').classList.add('go_right_on_scroll')
    }

    if(positionElement[4] < 200){
        document.getElementById('contact').classList.add('go_up_on_scroll')
        document.getElementById('contact__background').classList.add('go_right_on_scroll')
    }
})





// Typing effect
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid orange}";
        document.body.appendChild(css);
    };

// Arrow rotate effect
let arrowEffect = document.getElementById("arrow__expand")
function rotateArrow(){
    arrowEffect.classList.toggle("arrow__effect")
}

