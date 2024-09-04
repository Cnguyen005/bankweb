
window.onload = function(){
    let top = document.querySelector(".scroll-up");
    top.addEventListener("click", () => {
        document.documentElement.scrollTo({
            top:0,
            behavior: "smooth",
        });
    });
    window.addEventListener("scroll", () => {
        if(window.scrollY > 120){
            top.classList.add("active");
        } else{
            top.classList.remove("active")
        }
    });
    let main = document.getElementById("main")
    let images = document.querySelectorAll(".thumb div");
    for(let im of images)
        im.onclick = function(){
            main.src = this.querySelector("img").src;
        }

    let forums = document.getElementsByClassName("forum");
    for(let f of forums)
        f.classList.add("wow");
    let oddForum = document.querySelectorAll(".forum:nth-child(odd)");
    for (let f of oddForum)
        f.classList.add("animate__backInLeft");
    let evenForum = document.querySelectorAll(".forum:nth-child(even)");
    for (let f of evenForum)
        f.classList.add("animate__backInRight");

    let KM = document.querySelectorAll(".KM");
    for(let k of KM){
        k.classList.add("wow");
        k.classList.add("animate__bounceInUp");
    }
    let ser = document.querySelectorAll(".services div");
    for(let s of ser){
        s.classList.add("wow");
        s.classList.add("animate__slideInLeft");
    }

    let banner = document.querySelectorAll(".banner img");
    for(let b of banner){
        b.classList.add("wow");
        b.classList.add("animate__zoomIn");
    }

        wow = new WOW(
            {
            boxClass:     'wow',      // default
            animateClass: 'animate__animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
          }
          )
          wow.init();
}

$(document).ready(function(){
    $(".light").click(function() {
        $(this).toggleClass("day")
        $("body").toggleClass("night");
        $(".light i").toggleClass("bi-sun-fill")
    })

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 169) {
            $("nav.container").css({
                "position": "fixed",
                "top": 0,
                "z-index": 999,
                "left": 0,
                "right": 0,
            })
            $("ul.mainmenu").css({
                "margin": 0,
            })
        } else {
            $("nav.container").css({
                "position": "relative",
            })
        }
    })

    $(".tab-content p").hide()
    $("ul.tab a").click(function(){
        event.preventDefault()
        $("ul.tab a").removeClass("choose")
        $(this).addClass("choose")

        var tab = $(this).attr("href")
        $(".tab-content ul").hide()
        $(".tab-content p").hide()
        $(tab).show()
    })

    $(".thumb div").click(function(){
        $(".thumb div").removeClass("pick")
        $(this).addClass("pick")
    })
})

