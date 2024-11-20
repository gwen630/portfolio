//mobile ver

//status-bar clock 
function updateTime(){
  const timeElement = document.getElementById("time")
  const currentTime = new Date()
  const hours = currentTime.getHours().toString().padStart(2, "0")
  const minutes = currentTime.getMinutes().toString().padStart(2, "0")
  const timeString = hours+':'+minutes

  timeElement.textContent = timeString
}

setInterval(updateTime, 1000)
updateTime()




/* nav menu slider */
var swiper = new Swiper(".navSwiper", {
  slidesPerView: "auto",
  spaceBetween: 14,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* s3 menu slider */
var swiper2 = new Swiper(".s3Swiper", {
  slidesPerView: "auto",
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


