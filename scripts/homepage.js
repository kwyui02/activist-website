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

var quoteList = [
    "Climate Change is the defining issue of our time and we are at a defining moment. From shifting weather patterns that threaten food production, to rising sea levels that increase the risk of catastrophic flooding, the impacts of climate change are global in scope and unprecedented in scale. - United Nations",
    "The world must come together to confront climate change. There is little scientific dispute that if we do nothing, we will face more drought, famine and mass displacement that will fuel more conflict for decades. - Barack Obama",
    "We don’t have time to sit on our hands as our planet burns. For young people, climate change is bigger than election or re-election. It’s life or death. - Alexandria Ocasio-Cortez",
    "We simply must do everything we can in our power to slow down global warming before it is too late... The science is clear. The global warming debate is over. - Arnold Schwarzenegger"
]

var myBtn = document.getElementById("myBtn");
var quote = document.getElementById("quote");
var count = 0;

myBtn.addEventListener("click", displayQuote);

function displayQuote() {
    quote.innerHTML = quoteList[count];
    count += 1;

    if (count >= quoteList.length) {
        count = 0;
    }
}