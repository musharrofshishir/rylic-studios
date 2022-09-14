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