let datos = `
    <form name="RegForm" onsubmit="return validateForm()">
        <h3>Formulario de consulta</h3>
        <p>
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="Name" placeholder="Ingrese su nombre completo">
            <span id="name-error" class="error-message"></span>
        </p>
        <p>
            <label for="email">Correo electrónico:</label>
            <input type="text" id="email" name="EMail" placeholder="Ingrese su email">
            <span id="email-error" class="error-message"></span>
        </p>
        <p>
            <label for="tel">Teléfono:</label>
            <input type="tel" id="tel" name="Teléfono" placeholder="Ingrese su teléfono">
            <span id="tel-error" class="error-message"></span>
        </p>
        <p>
            <label for="comment">Mensaje</label>
            <textarea id="comment" name="Comment"></textarea>
        </p>
        <p>
            <input type="checkbox" id="agree" name="Agree">
            <label for="agree">He leído y acepto toda la información</label>
            <span id="agree-error" class="error-message"></span>
        </p>
        <br>
        <p>
            <input type="submit" value="Enviar" name="Submit">
            <input type="reset" value="Cancelar" name="Reset">
        </p>
    </form>
`

document.querySelector("#form-contacto").innerHTML = datos