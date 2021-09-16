const counter = document.querySelector(".content_count");
const incr = document.querySelector(".incr");
const prevCounter = document.querySelector(".previous_count");
const save = document.querySelector(".save");

let count = 0;
incr.addEventListener("click", () => {
    count++;
    counter.innerHTML = count;
});

save.addEventListener("click", () => {
    let prevCount = count + " - ";
    prevCounter.innerHTML += prevCount;
    counter.innerHTML = 0;
    count = 0;
});

