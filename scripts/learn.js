function openPage(link) {
    console.log(link.value);
    location.href = link.value;
};

const menuToggle = document.querySelector(".toggle")
const showcase = document.querySelector(".showcase")

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active")
    showcase.classList.toggle("active")
})