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
  fixedWidth : '470px',
  autoplay: true,
  interval: 3000,
  pauseOnhover: true,
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
} ).mount();
// GSAP
// gsap.registerPlugin(ScrollTrigger);

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



gsap.from('._real_marque_content_wrap',{
  y:-100,
  rotation:5,
  ease:'Power3.out',
  scrollTrigger:{
    trigger: '._real_marque_wrap',
    scrub:1
  }
})