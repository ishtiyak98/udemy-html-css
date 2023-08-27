//! gsap.to(".box", {duration: 1, x: 300,})

//! gsap.set(".box", { transformOrigin: "50% 50%" });
//! gsap.to(".box, .astronaut", { duration: 2, rotation: 360 });

gsap.from(".box", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"})