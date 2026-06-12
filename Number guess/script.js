let a = Math.floor(Math.random() * 39);
let attempts = 0;
let maxAttempts = 5;

function checkNumber() {

    let num = Number(document.getElementById("num").value);
    attempts++;

    if (num == a) {
        document.getElementById("result").innerHTML =
            "You guessed the correct number";
    }

    else if (attempts >= maxAttempts) {

        document.getElementById("result").innerHTML =
            "You have used all 5 attempts.";

        document.getElementById("reveal").style.display = "block";
    }

    else if (num < a) {
        document.getElementById("result").innerHTML =
            "You guessed a smaller number. Attempts left: " +
            (maxAttempts - attempts);
    }

    else {
        document.getElementById("result").innerHTML =
            "You guessed the larger number. Attempts left: " +
            (maxAttempts - attempts);

        document.getElementById("reveal").style.display = "block";
    }
}

function correctans() {
    document.getElementById("result").innerHTML +=
        "<br><br>✅ Correct Number: " + a;
}