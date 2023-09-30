
function navClick() {
    var navbar = document.getElementById("navbar");
    var navbarList = document.getElementById("navbarScroll");
    var listdiv = document.getElementById("listDiv");
    var listItem = document.getElementsByClassName("link");

    navbarList.classList.toggle("ulOnHamClick");
    listdiv.classList.toggle("toggleWidth");

    for (let item of listItem) {
        item.classList.toggle("liOnHamClick");
    }
}

window.addEventListener('resize', e => {
    if (window.matchMedia(`(min-width: 1200px)`).matches) {
        var navbarList = document.getElementById("navbarScroll");
        var listdiv = document.getElementById("listDiv");
        var listItem = document.getElementsByClassName("link");

        navbarList.classList.remove("ulOnHamClick");
        listdiv.classList.remove("toggleWidth");

        for (let item of listItem) {
            item.classList.remove("liOnHamClick");
        }
    }
});
// Animation......

    const words = ["Monthly Family Support", "education,", "IT and Vocationals training,", "Daily Meals,", "clean water", "Health care and lot more.."];
    const textElement = document.getElementById("typed-text");
    const cursorElement = document.querySelector(".typed-cursor");

    let wordIndex = 0;
    let charIndex = 0;

    function typeText() {
                                                                    if (wordIndex < words.length) {
                                                                        if (charIndex < words[wordIndex].length) {
        textElement.innerText += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
                                                                        } else {
        setTimeout(eraseText, 1000); // Delay before erasing the word
                                                                        }
                                                                    } else {
        // Typing animation is done
        cursorElement.style.display = "none"; // Hide the cursor
                                                                    }
                                                                }

    function eraseText() {
                                                                    if (charIndex > 0) {
        textElement.innerText = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
                                                                    } else {
        wordIndex++;
    setTimeout(typeText, 500); // Delay before typing the next word
                                                                    }
                                                                }

    typeText();
