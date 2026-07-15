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

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const video = card.querySelector('.hover-video');

    // Safe check: Only add listeners if the video element actually exists
    if (video) {
      card.addEventListener('mouseenter', () => {
        video.play().catch(error => {
          console.log("Autoplay prevented:", error);
        });
      });

      card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    } else {
      console.warn("Could not find a .hover-video inside this card:", card);
    }
  });
});


const country = document.getElementById("country");
const countryFlag = document.getElementById("countryFlag");
const countryVideo = document.getElementById("countryVideo");
const sad_countryVideo = document.getElementById("sad_countryVideo");


async function getLocation() {
    const response = await fetch("../data/sample-ip.json");
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
    
    if (sad_countryVideo && countryCode) {
        sad_countryVideo.src = `media/country_videos/sad_${countryCode}.mp4`;
        sad_countryVideo.load();
    }
}

getLocation();