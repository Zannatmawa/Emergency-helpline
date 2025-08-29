let count = 0;
const heart = document.querySelectorAll(".heartClicked");
const heartin = document.getElementById("heartInput")

heart.forEach(function (btn) {
    btn.addEventListener('click', function () {
        heartin.innerHTML = count++
    })
})



// btn 
const info = document.querySelector(".info")
const number = document.querySelector(".number")
const callButton = document.querySelectorAll(".callBtn");

callButton.forEach(function (b) {
    b.addEventListener('click', function () {
        alert("calling " + info.innerHTML + " service " + number.innerHTML + "...");
    })
})


// coin
const coinRemove = document.getElementById("coinRemove");
let currentCoins = parseInt(coinRemove.innerHTML);
callButton.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let currentCoins = parseInt(coinRemove.innerHTML);

        if (currentCoins >= 20) {
            currentCoins -= 20;
            coinRemove.innerHTML = currentCoins;
        } else {
            alert("Not enough coins!");
        }
    });
});


// history

// btn.addEventListener('click', function () {
//     const divAppend = document.getElementById("divAppend");
//     const newDiv = document.createElement("div")
//     const h1 = document.createElement("h1")
//     const span = document.createElement("span")
//     const h2 = document.createElement("h2")
//     const now = new Date()
//     const hours = now.getHours()
//     const minutes = now.getMinutes()
//     const seconds = now.getSeconds()
//     const currentTime = `${hours}:${minutes}:${seconds}`;

//     h1.style.fontSize = "18px"
//     span.style.color = "gray"
//     span.style.fontWeight = "bold"

//     h1.innerHTML = info.innerText
//     span.innerHTML = number.innerText;
//     h2.innerHTML = currentTime

//     newDiv.appendChild(h1)
//     newDiv.appendChild(span)
//     divAppend.appendChild(newDiv)
//     divAppend.appendChild(h2)

// })

//copyText
// let c = 0;
// const copyText = document.getElementById("copyText")
// const copyBtn = document.getElementById("copyBtn")
// copyBtn.addEventListener("click", function () {
//     navigator.clipboard.writeText(number.innerText)
//     alert("Text copied: " + number.innerText)
//     copyText.innerHTML = c++
// })
