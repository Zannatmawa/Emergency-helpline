let count = 0;
const heart = document.querySelectorAll(".heartClicked");
const heartin = document.getElementById("heartInput")

heart.forEach(function (btn) {
    btn.addEventListener('click', function () {
        heartin.innerHTML = count++
    })
})

//call btn
const cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
    const info = card.querySelector(".info").innerText;
    const number = card.querySelector(".number").innerText;
    const button = card.querySelector(".callBtn");
    //

    if (info === "National Emergency" || info === "Police" || info === "Fire Service" || info === "Ambulance" || info === "Women & Child Helpline" || info === "Anti-Corruption") {
        button.addEventListener("click", function () {
            //
            const coinRemove = document.getElementById("coinRemove");
            let currentCoins = parseInt(coinRemove.innerHTML);

            if (currentCoins >= 20) {
                currentCoins -= 20;
                //
                alert("Calling " + info + " service " + number + "...");
                //add history
                const divAppend = document.getElementById("divAppend");
                const newDiv = document.createElement("div")
                const h1 = document.createElement("h1")
                const span = document.createElement("span")
                const h2 = document.createElement("h2")
                const now = new Date()
                const hours = now.getHours()
                const minutes = now.getMinutes()
                const seconds = now.getSeconds()
                const currentTime = hours + " :" + minutes + " :" + seconds;

                h1.style.fontSize = "16px"
                span.style.color = "gray"
                span.style.fontWeight = "semibold"
                h2.style.marginLeft = '200px'

                h1.innerHTML = info
                span.innerHTML = number;
                h2.innerHTML = currentTime

                newDiv.appendChild(h1)
                newDiv.appendChild(span)
                divAppend.appendChild(newDiv)
                divAppend.appendChild(h2)
                //
                coinRemove.innerHTML = currentCoins;
            } else {
                alert("Not enough coins!");
            }
            //

        });
    }
});




//clearBtn
const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function () {
    divAppend.innerHTML = " "
})


// copy btn
let c = 1;
const copyButtons = document.querySelectorAll(".copyBtn");
copyButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const number = document.querySelector(".number");
        console.log(number.innerHTML)
        const copyText = document.querySelector(".copyText");
        navigator.clipboard.writeText(number.innerText).then(() => {
            alert("Text copied: " + number.innerText);
            copyText.innerHTML = c++;
        });
    });
});

