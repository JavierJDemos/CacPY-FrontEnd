function validateForm() {
    const name =
        document.getElementById("name").value;
    const email =
        document.getElementById("email").value;
    const tel =
        document.getElementById("tel").value;
    const agree =
        document.getElementById("agree").checked;

    const nameError =
        document.getElementById("name-error");
    const emailError = document.getElementById(
        "email-error"
    );
    const telError = document.getElementById(
        "tel-error"
    );
    const agreeError = document.getElementById(
        "agree-error"
    );
    nameError.textContent = "";
    emailError.textContent = "";
    telError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Por favor ingrese su nombre correctamente";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Por favor ingrese un email válido";
        isValid = false;
    }

    if (tel === "" || tel.length > 13 || tel.length < 10) {
        telError.textContent =
            "Por favor ingrese su teléfono correctamente";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent =
            "Por favor acepte toda la información";
        isValid = false;
    }

    return isValid;
}
