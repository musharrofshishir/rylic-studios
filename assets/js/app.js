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
// gsap.registerPlugin(ScrollTrigger);

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
  ease:"Power3.out",
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
gsap.from('._rylic_project_card_image_wrap',{
  y:50,
  duration:.3,
  ease:"Power4.out",
  scrollTrigger:{
    trigger: '._rylic_project_card_image_wrap',
    scrub:1
    // start: "top center"
  },
  stagger:true
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
  y:-90,
  rotation:5,
  ease:'Power3.out',
  duration:.2,
  opacity:0.8,
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

// Skew on scroll
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew:0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});
