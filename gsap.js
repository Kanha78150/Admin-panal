let tl = gsap.timeline()

tl.from(".icon i", {
    opacity: 0,
    duration: 0.55,
    x: -30,
    stagger: 1,
})

tl.from(".li-nav-item-flex i", {
    opacity: 0,
    duration: 0.55,
    x: -30,
    stagger: 1
})

gsap.from(".li-nav-item-flex .nav-items", {
    opacity: 0,
    duration: 0.55,
    y: -30,
    stagger: 1
})

tl.from(".profile", {
    opacity: 0,
    duration: 0.85,
    y: 20
})

gsap.from(".innear-search", {
    opacity: 0,
    duration: 0.85,
    y: -40
})


gsap.from(".innear-search i", {
    opacity: 0,
    duration: 0.85,
    y: -40
})

gsap.from(".hello h3", {
    opacity: 0,
    duration: 0.85,
    y: -40
})

gsap.from(".hello p", {
    opacity: 0,
    duration: 0.85,
    x: -40
})

gsap.from(".fliter-input", {
    opacity: 0,
    duration: 0.85,
    x: -40
})


gsap.from(".views-dash", {
    opacity: 0,
    duration: 0.95,
    x: -40
})

gsap.from(".profit-loss", {
    opacity: 0,
    duration: 0.95,
    y: -40
})


gsap.from(".sells-panal", {
    opacity: 0,
    duration: 8,
    y: -40
})