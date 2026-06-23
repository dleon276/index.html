// Abrir y cerrar modal
const modal = document.getElementById("contactModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

// Enviar a WhatsApp
document.getElementById("whatsappForm").addEventListener("submit", function(e){
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Número de WhatsApp Business en formato internacional
  let phone = "573219643866"; // 

  let text = `Hola, soy ${name} (${email}).\n${message}`;
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
});
