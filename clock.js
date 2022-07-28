const hours = document.querySelector(".hr")
const minutes = document.querySelector(".mn")
const seconds = document.querySelector(".sc")

setInterval(()=>{
    let day = new Date()
    let hr = day.getHours() * 30
    let mn = day.getMinutes() * 6
    let sc = day.getSeconds() * 6
    hours.style.transform = `rotatez(${(hr) + (mn/12)}deg)`
    minutes.style.transform = `rotatez(${(mn)}deg)`
    seconds.style.transform = `rotatez(${(sc)}deg)`
})