(async function() {
    console.log("here jerome");
    const cycleText = [
        "a frontend developer",
        "a plant guru",
        "an adventurer",
        "a former plant assassin"
    ];

    const cycleTextContainer = document.querySelector('#cycle-text-container');
    // for (let i=0; i<cycleText.length; i++) {
    //     await setInterval(() => {
    //         cycleTextContainer.innerHTML = cycleText[i]
    //     }, 3000)
    // }

    let i =0;
    setInterval(() => {
        cycleTextContainer.innerHTML = cycleText[i];
        i < cycleText.length -1? i++ : i=0;
    }, 2000);

})();