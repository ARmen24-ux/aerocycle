
const chatbotBody = document.getElementById("chatbot-body");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

let step = 0;
let answers = {};

const questions = [
  "¿Qué modelo de avión te interesa?",
  "¿Deseas personalización? (sí / no)",
  "¿Qué tipo de personalización deseas?",
  "¿A dónde deseas que lo enviemos? (Local / Nacional / Internacional)",
  "¿Cómo prefieres que te contactemos? (WhatsApp / Email)",
  "Por favor, escribe tu nombre:",
  "Ahora tu correo electrónico:",
  "¿Deseas dejar tu número de WhatsApp? (opcional)",
];

function appendMessage(text, sender = "bot") {
  const msg = document.createElement("div");
  msg.className = sender === "bot" ? "bot-msg" : "user-msg";
  msg.textContent = text;
  chatbotBody.appendChild(msg);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function nextStep(userInput) {
  if (step > 0) {
    const key = questions[step - 1];
    answers[key] = userInput;
  }

  if (step === 2 && answers[questions[1]].toLowerCase() !== "sí") {
    step++; // saltar personalización si no aplica
  }

  if (step < questions.length) {
    appendMessage(questions[step]);
    step++;
  } else {
    appendMessage("¡Gracias! Hemos recibido tu solicitud. Pronto te contactaremos con una cotización personalizada.");
    console.log("Respuestas del usuario:", answers);
    chatInput.disabled = true;
    sendBtn.disabled = true;
  }
}

sendBtn.addEventListener("click", () => {
  const input = chatInput.value.trim();
  if (!input) return;
  appendMessage(input, "user");
  chatInput.value = "";
  setTimeout(() => nextStep(input), 500);
});

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});

// Inicia el flujo
appendMessage(questions[step]);
step++;

// Mostrar el chatbot
document.getElementById("open-chatbot-btn").addEventListener("click", () => {
  document.getElementById("chatbot-container").classList.remove("chatbot-hidden");
});

// Ocultar el chatbot
document.getElementById("close-chatbot").addEventListener("click", () => {
  document.getElementById("chatbot-container").classList.add("chatbot-hidden");
});