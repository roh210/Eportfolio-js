//template_26i7bgd
//service_n5sg4yn
//BUdHb6flS0gBKlVo7

/*
async function contact(event) {
  event.preventDefault()
 await emailjs
 .sendForm(
  "service_n5sg4yn" ,
  "template_26i7bgd",
  event.target,
  "BUdHb6flS0gBKlVo7"
 )
}
*/
// to make the email work once submitted
function contact(event) {
  event.preventDefault()
  const loading = document.querySelector(".modal__overlay--loading")
const success = document.querySelector(".modal__overlay--success")
loading.classList += " modal__overlay--visible"
emailjs
 .sendForm(
  "service_n5sg4yn" ,
  "template_26i7bgd",
  event.target,
  "BUdHb6flS0gBKlVo7"
 ).then(() =>{
  loading.classList.remove("modal__overlay--visible")
  success.classList += " modal__overlay--visible"
 }).catch(() => {
  loading.classList.remove("modal__overlay--visible")
  alert(
    "The email service is temporarily unavailable. Please contact me directly on"
  )
 })
}
let isModalOpen = false
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
  

}
