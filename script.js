(async function() {
    console.log("here jerome");
    const cycleText = [
        "a frontend developer 🤓",
        "a plant guru 🪴",
        "an adventurer 🏔",
        "a former plant assassin 🪴🥷"
    ];

    const cycleTextContainer = document.querySelector('#cycle-text-container');

    let i =0;
    setInterval(() => {
        cycleTextContainer.innerHTML = cycleText[i];
        i < cycleText.length -1? i++ : i=0;
    }, 2000);

})();