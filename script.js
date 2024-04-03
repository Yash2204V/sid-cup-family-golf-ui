var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");
var navImg = document.querySelector("#nav img");

navImg.addEventListener("mouseenter", function () {
    navImg.style.scale = 0.9
})
navImg.addEventListener("mouseleave", function () {
    navImg.style.scale = 1
})


document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrBlur.style.left = dets.x - 110 + "px";
    crsrBlur.style.top = dets.y - 110 + "px";
})

const h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3,
        crsr.style.border = "1px solid #fff ",
        crsr.style.backgroundColor = "transparent"
        elem.style.color = "#95c11e"
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1,
        crsr.style.border = "0px solid #fff ",
        crsr.style.backgroundColor = "#95c11e";
        elem.style.color = "white"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -50%",
        end: "top -75%",
        scrub: 2
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    // duration: 1,
    // stagger: 0.1,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})
gsap.from("#colon2", {
    y: 70,
    x: 70,
    // duration: 1,
    // stagger: 0.1,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end: "top 55%",
        scrub: 4
    }
})
gsap.from("#page3 p", {
    y: 20,
    x: 20,
    // duration: 1,
    // stagger: 0.1,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 50%",
        scrub: 3
    }
})

gsap.from("#page4 h4", {
    y: 60,
    // duration: 1,
    // stagger: 0.1,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        start: "top 5%",
        end: "top 7%",
        scrub: 4
    }
})