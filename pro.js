
let value;
let final = {
    Unit: null,
    items: [],
    price: null,
};

function hide(seindex) {
    document.querySelectorAll(".optionsForSelection1, .optionsForSelection2, .optionsForSelection3").forEach((element, index) => {
        element.style.display = index === seindex ? "block" : "none";
    });
}

document.querySelectorAll('input[name="unit"]').forEach((radio, index) => {
    radio.addEventListener("change", function () {
        value = this.value;
        hide(index)

        let totalElm = document.getElementsByClassName("offerprice")[index];
        let total = totalElm.innerHTML;
        document.getElementById("delTotal").innerHTML = total;
        final.Unit = value;
        final.price = total;

    });
});



document.querySelectorAll(".drops").forEach((selectElement, index) => {
    selectElement.addEventListener("change", function () {
        const selectedValue = this.value;
        console.log("Selected size:", selectedValue, index);
        if (!final.items[index]) {
            final.items[index] = { Size: null, Colour: null };
        }
        final.items[index].Size = selectedValue;
    });
});


document.querySelectorAll(".ColourDrops").forEach((selectElement, index) => {
    selectElement.addEventListener("change", function () {
        const selectedColour = this.value;
        console.log("Selected colour:", selectedColour, index);
        if (!final.items[index]) {
            final.items[index] = { Size: null, Colour: null };
        }
        final.items[index].Colour = selectedColour;
    });
});



document.getElementById("bttn").addEventListener("click", () => {
    console.log("final result:", final);

});

