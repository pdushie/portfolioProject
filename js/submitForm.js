function submitForm() {
    var fullName = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var message = document.getElementsByName("message")[0].value;

    // Construct the mailto URL
    var mailtoLink = "mailto:philip.dushie@gmail.com"
        + "?subject=Contact Form Submission"
        + "&body=Full Name: " + fullName
        + "%0D%0AEmail: " + email
        + "%0D%0AMessage: " + message;

    // Open the user's email client with the pre-filled email
    window.location.href = mailtoLink;
}