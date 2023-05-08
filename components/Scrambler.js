const upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerletters = "abcdefghijklmnopqrstuvwxyz";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

export function Scramble(event, upperCase = true, lowerCase = false) {
    if (!upperCase && !lowerCase) {
        return;
    }

    let interval = null;

    const letterSet = upperCase && lowerCase ? letters : upperCase ? upperletters : lowerletters;

    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (letter === " " || letter === "-") return letter;
                if(index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letterSet[Math.floor(Math.random() * letterSet.length)]
            })
            .join("");

        if(iteration >= event.target.dataset.value.length){
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 10);
}

export function ScrambleElement(element, upperCase = true, lowerCase = true) {
    if (!upperCase && !lowerCase) {
        return;
    }

    let interval = null;

    const original = element.textContent;

    const letterSet = upperCase && lowerCase ? letters : upperCase ? upperletters : lowerletters;

    let iteration = 0;

    clearInterval(interval);

    // calculate timout, so that it only takes 5 seconds to scramble the entire text
    const timeout = 500 / original.length;

    interval = setInterval(() => {
        element.textContent = element.textContent
            .split("")
            .map((letter, index) => {
                if (letter === " " || letter === "-") return letter;
                if (index < iteration) {
                    return original[index];
                }

                return letterSet[Math.floor(Math.random() * letterSet.length)]
            })
            .join("");

        if (iteration >= original.length){
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, timeout);
}