document.addEventListener('DOMContentLoaded', () => {
    // Function to handle the form submission
    function submitForm() {

        // Get values from the form inputs
        let fullName = document.querySelector("#fullName").value;
        let email = document.querySelector("#email").value;
        let subject = document.querySelector("#subject").value;
        let message = document.querySelector("#message").value;
        const validateFields = [];
        if(!fullName || !email || !subject || !message){
            if(!fullName){
                validateFields.push("fullName");
                document.querySelector("#fullName").classList.add("Error");
                document.querySelector("#fullName").placeholder ="Required Field";
            }
            if(!email){
                validateFields.push("email");
                document.querySelector("#email").classList.add("Error");
                document.querySelector("#email").placeholder = "Required Field";
            }
            if(!subject){
                validateFields.push("subject");
                document.querySelector("#subject").classList.add("Error");
                document.querySelector("#subject").placeholder = "Required Field";
            }
            if(!message){
                validateFields.push("message");
                document.querySelector("#message").classList.add("Error");
                document.querySelector("#message").placeholder = "Required Field";
            }
            return alert(`The following field(s) are required: ${validateFields.map(item => item.toUpperCase()).join(', ')}`)
        }

        // Construct the mailto URL
        var mailtoLink = "mailto:philip.dushie@gmail.com"
            + "?subject=Subject: " + encodeURIComponent(subject)
            + "&body=Full Name: " + encodeURIComponent(fullName)
            + "%0D%0AEmail: " + encodeURIComponent(email)
            + "%0D%0AMessage: " + encodeURIComponent(message);

        // Open the user's email client with the pre-filled email
        window.location.href = mailtoLink;
    }

    // Add event listener to button for form submission
    let submitButton = document.querySelector("#submit-btn");
    if (submitButton) {
        submitButton.addEventListener('click', submitForm);
    }
});