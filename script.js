function showPage(pageNumber) {
    const pages = document.querySelectorAll('.quiz-page');

    // Loop through each page element by index
    for (let index = 0; index < pages.length; index++) {
        // If the current index matches the pageNumber - 1, show the page; otherwise, hide it
        if (index === pageNumber - 1) {
            pages[index].style.display = 'block';
        } else {
            pages[index].style.display = 'none';
        }
    }
}


function nextPage(pageNumber) {
    showPage(pageNumber);
}

function previousPage(pageNumber) {
    showPage(pageNumber);
}

function submitQuiz() {
    const correctAnswers = {
        q1: "Paris",
        q2: "8",
        q3: "Mars",
        q4: "H2O",
        q5: "Shakespeare",
        q6: "100°C",
        q7: "Jupiter",
        q8: "Einstein",
        q9: "Pacific"
    };

    let score = 0;

    // Iterate over the correct answers and compare with user input
    for (const question in correctAnswers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    // Display the result
    const result = document.getElementById("result");
    result.innerHTML = `You scored ${score} out of 9.`;

    if (score === 9) {
        result.style.color = "green";
    } else if (score >= 6) {
        result.style.color = "orange";
    } else {
        result.style.color = "red";
    }
}

// Show the first page initially
window.onload = function () {
    showPage(1);
};