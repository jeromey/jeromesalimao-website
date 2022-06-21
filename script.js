(async function() {
    const cycleText = [
        {text: "a frontend developer 🤓", image: "developer.jpg"},
        {text: "a plant guru 🪴", image: "plant_guru.jpg"},
        {text: "an adventurer 🏔", image: "adventurer.jpg"},
        {text: "a former plant assassin 🪴🥷", image: "plant_assassin.jpg"}
    ];

    const cycleTextContainer = document.querySelector('#cycle-text-container');
    const heroImage = document.querySelector("#hero-image");
    const images = {};

    let i =0;
    setInterval(() => {
        cycleTextContainer.innerHTML = cycleText[i].text;
        if (images[cycleText[i].image]) { heroImage.src =  images[cycleText[i].image].src; }
        i < cycleText.length -1? i++ : i=0;
    }, 2500);


    cycleText.forEach(cycleObj => {
        images[cycleObj.image] = new Image();
        images[cycleObj.image].src = `images/${cycleObj.image}`;
    })
})();