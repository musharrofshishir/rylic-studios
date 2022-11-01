// Alpine
const date ={
  year: '',
  getDate(){
    const getDate = new Date;
    return getDate.getFullYear()
  }
}
// Splide
new Splide( '._rylic_port_slider',{
  type   : 'loop',
  perPage: 3,
  arrows: true,
  perMove: 1,
  gap: 30,
  width: 'calc(90% - 26px)',
  fixedWidth : '370px',
  pagination: false,
  autoplay: true,
  interval: 3000,
  pauseOnhover: true,
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
} ).mount();

new Splide( '._rylic_testimonial_slider',{
  type   : 'loop',
  perPage: 3,
  arrows: false,
  perMove: 1,
  gap: 30,
  // fixedWidth : '470px',
  autoplay: true,
  interval: 3000,
  pauseOnhover: true,
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
} ).mount();
// GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2,   // seconds it takes to "catch up" to native scroll position
  effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
});

document.querySelector("#processClick").addEventListener("click", e => {
  // scroll to the spot where .box-c is in the center.
  // parameters: element, smooth, position
  // smoother.scrollTo("#process", true, "center center");
  
  // or you could animate the scrollTop:
  gsap.to(smoother, {
   scrollTop: smoother.offset("#process", "center center"),
   duration: 1
  });
});

// marque animation
gsap.fromTo('._real_marque_content_ul',{
  x: -2860,
  duration:25,
  ease: "linear",
},{
  x: 40,
  duration:25,
  ease: "linear",
  repeat: -1
});

gsap.fromTo('._rylic_trusted_content1',{
  x: -60,
  duration:35,
  ease: "linear",
},{
  x: -2540,
  duration:35,
  ease: "linear",
  repeat: -1
});
gsap.fromTo('._rylic_trusted_content2',{
  x: -15,
  duration:35,
  ease: "linear",
},{
  x: 2467,
  duration:35,
  ease: "linear",
  repeat: -1
});
// scroll

gsap.from('._rylic_service_content_top_img',{
  y:60,
  ease:"bounce.out",
  scrollTrigger:{
    trigger: '._rylic_service_content_wrap',
    scrub:1
  },
  delay:1.5
})
gsap.from('._rylic_service_shape',{
  y:75,
  x:20,
  ease:'Power3.out',
  scrollTrigger:{
    trigger: '._rylic_port_wrapper',
    scrub:1
  }
})
gsap.from('._rylic_port_shape',{
  y:50,
  x:-30,
  duration:.8,
  ease:'Power3.out',
  scrollTrigger:{
    trigger: '._rylic_port_wrapper',
    scrub:1
  }
})
gsap.from('._rylic_port_shape_ball',{
  y:-50,
  x:-30,
  duration:.5,
  opacity:.7,
  ease:'Power3.out',
  scrollTrigger:{
    trigger: '._rylic_port_wrapper',
    scrub:1
  }
})
gsap.from('._rylic_process_content_mid_li',{
  rotation:0,
  scale:.9,
  ease:"bounce.out",
  scrollTrigger:{
    trigger: '._rylic_process_content ',
    scrub:1,
    start: "top center"
  }
})
gsap.from('._real_marque_shape',{
  y:75,
  x:-55,
  rotation:-10,
  ease:'Power3.out',
  scrollTrigger:{
    trigger: '._real_marque_wrap',
    scrub:1
  },
})
gsap.from('._real_marque_content_wrap',{
  y:-70,
  rotation:5,
  ease:'Power3.out',
  scrollTrigger:{
    trigger: '._real_marque_wrap',
    scrub:1
  }
})
gsap.from('._rylic_testimonial_shape',{
  y:30,
  rotation:-15,
  ease:'Power3.out',
  scrollTrigger:{
    trigger: '._rylic_testimonial_wrapper',
    scrub:1
  }
})

// gsap.to('._rylic_nav_btn',{
//   y:100,
//   scrollTrigger:{
//     trigger:'._rylic_port_wrapper',
//     scrub: 1
//   }
// })
// elastic.out(1, 0.75)