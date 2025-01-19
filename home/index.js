document.querySelectorAll(".list-group-item").forEach((item) => {
    let counterElement = item.querySelector(".counter");
    let plusButton = item.querySelector(".plus-btn button:first-child");
    let minusButton = item.querySelector(".plus-btn button:last-child");

    counterElement.style.visibility = "hidden";

    plusButton.addEventListener("click", function () {
        let count = parseInt(counterElement.textContent || "0");
        if (count < 12) {
            count++;
            counterElement.textContent = count;
            counterElement.style.visibility = "visible";
            counterElement.style.fontSize = "19px";
        }
    });

    minusButton.addEventListener("click", function () {
        let count = parseInt(counterElement.textContent || "0");
        if (count > 1) {
            count--;
            counterElement.textContent = count;
        } else {
            counterElement.style.visibility = "hidden";
            counterElement.textContent = "0";
        }
    });
});


