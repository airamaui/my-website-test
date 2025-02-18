document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.submit-all').addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default form submission

      // Retrieve existing stored submissions or initialize an empty array
      let storedAnswers = JSON.parse(localStorage.getItem('answers')) || [];

      // Get the current date and time
      const currentDate = new Date().toLocaleString(); // Format: MM/DD/YYYY, HH:MM:SS AM/PM

      // Generate a submission number
      const submissionNumber = storedAnswers.length + 1;

      // Collect new answers from input fields
      const newGroup = {
          id: submissionNumber,
          title: `Submission ${submissionNumber}`,
          date: currentDate, // Store the submission date
          answers: []
      };

      document.querySelectorAll('.answer-box').forEach((box) => {
          if (box.value.trim() !== "") { // Save only non-empty answers
              newGroup.answers.push(box.value);
          }
      });

      if (newGroup.answers.length > 0) {
          storedAnswers.push(newGroup); // Add new group of answers
          localStorage.setItem('answers', JSON.stringify(storedAnswers)); // Save all submissions

          // Also save the latest submission separately
          localStorage.setItem('latestSubmission', JSON.stringify(newGroup));
      }

      // Clear input fields after submission
      document.querySelectorAll('.answer-box').forEach((box) => {
          box.value = "";
      });

      // Redirect to `new-results.html`
      window.location.href = 'new-results.html';


    
    document.getElementById("submitButton").addEventListener("click", function() {
    console.log("Submit button clicked!"); // Debugging check
});

    
  });
});
