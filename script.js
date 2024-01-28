const hamb = document.querySelector(".hamb");
const nav = document.querySelector("nav");

hamb.addEventListener("click", () => {
    nav.classList.toggle("active")
});
