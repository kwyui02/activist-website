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

const country = document.getElementById("country");
const countryFlag = document.getElementById("countryFlag");
const countryVideo = document.getElementById("countryVideo");


async function getLocation() {
    const response = await fetch("./data/sample-ip.json");
    const data = await response.json();
    const countryName = data.location.country_name || data.location.country_name_official || "Unknown";
    const countryCode = data.location.country_code2 ? data.location.country_code2.toLowerCase() : null;

    console.log(countryName, countryCode);

    if (country) {
        country.textContent = countryName;
    }

    if (countryFlag && countryCode) {
        countryFlag.className = `fi fi-${countryCode}`;
    }

    if (countryVideo && countryCode) {
        countryVideo.src = `media/country_videos/${countryCode}.mp4`;
        countryVideo.load();
    }
}

getLocation();