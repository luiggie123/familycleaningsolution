const form = document.querySelector(".contact-form");
const statusMessage = document.querySelector(".form-status");
const contactEmail = "familycleaningsolution@gmail.com";

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const submitButton = form.querySelector(".form-submit");
  if (!submitButton) return;

  const formData = new FormData(form);
  const name = formData.get("name") || "";
  const propertyType = formData.get("property-type") || "";
  const location = formData.get("location") || "";
  const message = formData.get("message") || "";
  const subject = encodeURIComponent("Solicitud de estimado - Family Cleaning Solution");
  const body = encodeURIComponent(
    `Nombre: ${name}\nTipo de propiedad: ${propertyType}\nÁrea: ${location}\n\n¿Qué necesitas?\n${message}`
  );

  submitButton.disabled = true;
  submitButton.textContent = "Abriendo email";
  statusMessage.textContent =
    "Gracias. Se abrirá tu aplicación de email con la solicitud preparada.";
  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

  window.setTimeout(() => {
    submitButton.disabled = false;
    submitButton.innerHTML = `Enviar solicitud
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 12h13m-5-5 5 5-5 5" />
      </svg>`;
  }, 2600);
});
