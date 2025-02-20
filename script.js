function submitAnswers() {
    console.log("submitAnswers() function is working!");

    let storedAnswers = JSON.parse(localStorage.getItem('answers')) || [];
    const currentDate = new Date().toLocaleString();
    const submissionNumber = storedAnswers.length + 1;
    const newGroup = {
        id: submissionNumber,
        title: `Submission ${submissionNumber}`,
        date: currentDate,
        answers: []
    };
    
    document.querySelectorAll('.answer-box').forEach((box) => {
        if (box.value.trim() !== "") {
            newGroup.answers.push(box.value);
        }
    });

    if (newGroup.answers.length > 0) {
        storedAnswers.push(newGroup);
        localStorage.setItem('answers', JSON.stringify(storedAnswers));
        localStorage.setItem('latestSubmission', JSON.stringify(newGroup));
    }

    document.querySelectorAll('.answer-box').forEach((box) => {
        box.value = "";
    });

    window.location.href = 'new-results.html';
}

// Attach the function to the submit button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitButton").addEventListener("click", submitAnswers);
});
