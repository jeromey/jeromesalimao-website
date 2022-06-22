(async function() {
    const cycleText = [
        {text: "a plant guru 🪴", image: "plant_guru.jpg"},
        {text: "an adventurer 🏔", image: "adventurer.jpg"},
        {text: "a former plant assassin 🪴🥷", image: "plant_assassin.jpg"},
        {text: "a frontend developer 🤓", image: "developer.jpg"},
    ];

    const cycleTextContainer = document.querySelector('#cycle-text-container');
    const heroImage = document.querySelector("#hero-image");
    const sideImageContainer = document.getElementById('side-image-container');
    const images = {};

    let i =0;
    setInterval(() => {
        cycleTextContainer.innerHTML = cycleText[i].text;
        if (images[cycleText[i].image]) { 
            // heroImage.src =  images[cycleText[i].image].src; 
            sideImageContainer.style.backgroundImage = `url(${images[cycleText[i].image].src}`;
            console.log(images[cycleText[i].image].src)
        }
        i < cycleText.length -1? i++ : i=0;
    }, 2500);


    cycleText.forEach(cycleObj => {
        images[cycleObj.image] = new Image();
        images[cycleObj.image].src = `images/${cycleObj.image}`;
    })
})();