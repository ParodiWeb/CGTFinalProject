function validateForm() {
    var form = document.getElementById("contactForm");
    var inputs = form.querySelectorAll("input, textarea");
    var isValid = true;

    inputs.forEach(function(input) {
        if (!input.value.trim()) {
            input.classList.add("error");
            isValid = false;
        } else {
            input.classList.remove("error");
        }
    });

    if (isValid) {
        return handleSubmit(); // Call handleSubmit if form is valid
    } else {
        return false; // Prevent form submission if validation fails
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Display thank you message
        document.getElementById("thankYouMessage").style.display = "block";
    });
});
