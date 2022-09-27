// Alpine
const date ={
  year: '',
  getDate(){
    const getDate = new Date;
    return getDate.getFullYear()
  }
}
// GSAP
gsap.registerPlugin(ScrollTrigger);
// marque animation
// gsap.fromTo('._real_marque_content_ul',{
//   // scrollTrigger:{
//   //   trigger:'._real_marque_content_wrap',
//   //   scrub: .2,
//   // },
//   x: -330,
//   duration:3,
//   ease: "linear",
// },{
//   x: 20,
//   duration:3,
//   ease: "linear",
//   repeat: -1
// });