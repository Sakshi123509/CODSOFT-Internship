//Nav and main
var t = gsap.timeline();
t.from("nav .logo", {
    opacity: 0,
    duration: 0.9,
    delay: 0.3,
});
t.from(".part2 h3", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.3,
});


var s = gsap.timeline();
s.from(".hero-text h1, .hero-text p, .hero-text button ", {
    x: -200,
    opacity: 0,
    duration: 0.8,
});
s.from(".hero-img img", {
    x: 200,
    opacity: 0,
    duration: 0.8,
}, "-=0.6")


// For #menu h2
gsap.from("#menu h2", {
    duration: 0.3,
    opacity: 0,
    scale: 0.5,
    y: -20,
    scrollTrigger: {
        trigger: "#menu",
        scroller: "body",
        markers: false, // optional
        start: "top 60%",
        toggleActions: "play none none none"
    }
});

///about
gsap.registerPlugin(ScrollTrigger);
var p = gsap.timeline({
    scrollTrigger: {
        trigger: "#About",
        scroller: "body",
        start: "top 70%", // adjust as needed
        toggleActions: "play none none none",
        markers: false, // remove in production
    }
})
p.from(".about-image img", {
    x: -200,
    opacity: 0,
    duration: 0.8,
});
p.from(".about-text", {
    x: 200,
    opacity: 0,
    duration: 0.8,
}, "-=0.6");


// For #Contact h2
gsap.from("#Contact h2", {
    duration: 0.3,
    opacity: 0,
    scale: 0.5,
    y: -20,
    scrollTrigger: {
        trigger: "#Contact",
        scroller: "body",
        markers: false, // optional
        start: "top 60%",
        toggleActions: "play none none none"
    }
});


//menu boxes
gsap.registerPlugin(ScrollTrigger);
var p = gsap.timeline({
    scrollTrigger: {
        trigger: "#menu",
        scroller: "body",
        start: "top 70%", // adjust as needed
        toggleActions: "play none none none",
        markers: false, // remove in production
    }
})
p.from(".left .box1", {
    x: -200,
    opacity: 0,
    duration: 1.2,
});
p.from(".right .box1", {
    x: 200,
    opacity: 0,
    duration: 1.2,
}, "-=0.6");
p.from(".left .box2", {
    x: -200,
    opacity: 0,
    duration: 1.2,
});
p.from(".right .box2", {
    x: 200,
    opacity: 0,
    duration: 1.2,
}, "-=0.6");
p.from(".left .box3", {
    x: -200,
    opacity: 0,
    duration: 1.2,
});
p.from(".right .box3", {
    x: 200,
    opacity: 0,
    duration: 1.2,
}, "-=0.6");

let msg = document.querySelector(".success-msg")
let form = document.querySelector("form");
let para = document.querySelector("#Contact p")
form.addEventListener("submit", function (e) {
    e.preventDefault(); // 
    para.classList.add("hidden")
    form.classList.add("hidden"); // ✅ hide form
    msg.classList.remove("hidden");
});

 
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".menu-toggle");
    const navbarLinks = document.getElementById("navbarLinks");
    let isMenuOpen = false;

    if (!toggleBtn || !navbarLinks) {
        console.error("❌ Toggle button or menu container not found.");
        return;
    }

    toggleBtn.addEventListener("click", function () {
        if (!isMenuOpen) {
            navbarLinks.classList.add("active");
            gsap.fromTo(navbarLinks, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
        } else {
            gsap.to(navbarLinks, {
                x: 200,
                opacity: 0,
                duration: 0.4,
                onComplete: () => {
                    navbarLinks.classList.remove("active");
                },
            });
        }
        isMenuOpen = !isMenuOpen;
    });
});

