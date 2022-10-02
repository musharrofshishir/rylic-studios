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
} ).mount();

new Splide( '._rylic_testimonial_slider',{
  type   : 'loop',
  perPage: 3,
  arrows: false,
  perMove: 1,
  gap: 30,
  fixedWidth : '470px',
} ).mount();
// GSAP
gsap.registerPlugin(ScrollTrigger);
// marque animation
gsap.fromTo('._real_marque_content_ul',{
  // scrollTrigger:{
  //   trigger:'._real_marque_content_wrap',
  //   scrub: .2,
  // },
  x: -330,
  duration:3,
  ease: "linear",
},{
  x: 20,
  duration:3,
  ease: "linear",
  repeat: -1
});