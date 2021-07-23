const categories = document.querySelector("#Categories");
const pickone = document.querySelector("#pickone");
const watchlist = document.querySelector("#watchlist");
const addmovie = document.querySelector("#addmovie");
const search = document.querySelector("#search");
const signup = document.querySelector("#signup")


categories.addEventListener("click", () => {
window.location.href = "index.html";
})
pickone.addEventListener("click", () => {
window.location.href = "pickone.html";
})
watchlist.addEventListener("click", () => {
window.location.href = "watchlist.html";
})
addmovie.addEventListener("click", () => {
window.location.href = "addmovie.html";
})
signup.addEventListener("click", () => {
window.location.href = "signup.html";
})