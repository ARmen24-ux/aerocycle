document.addEventListener('DOMContentLoaded', () => {
  // Referencias a elementos
  const openChatBtn = document.getElementById('open-chatbot-btn');
  const closeChatBtn = document.getElementById('close-chatbot');
  const chatbotContainer = document.getElementById('chatbot-container');
  const whatsappBtn = document.querySelector('.whatsapp-float');

  const openPlanoBtn = document.querySelector('.btn-ver-plano');
  const pdfModal = document.getElementById('pdf-modal');
  const closePdfModalBtn = pdfModal?.querySelector('.close');

  const modelModal = document.getElementById('model-modal');
  const closeModelModalBtn = modelModal?.querySelector('.close');
  const renderPreviewBtn = document.getElementById('render-preview');

  // Abrir chatbot y ocultar botones
  openChatBtn.addEventListener('click', () => {
    chatbotContainer.classList.remove('chatbot-hidden');
    openChatBtn.style.display = 'none';
    if (whatsappBtn) whatsappBtn.style.display = 'none';
  });

  // Cerrar chatbot y mostrar botones
  closeChatBtn.addEventListener('click', () => {
    chatbotContainer.classList.add('chatbot-hidden');
    openChatBtn.style.display = 'inline-block';
    if (whatsappBtn) whatsappBtn.style.display = 'block';
  });

  // Funciones para mostrar y ocultar
  const showElement = (el) => {
    if (el) el.style.display = 'block';
  };

  const hideElement = (el) => {
    if (el) el.style.display = 'none';
  };

  // CHATBOT: Mostrar y ocultar (estos ya están cubiertos arriba, se podrían quitar para evitar doble escucha)
  if (openChatBtn && chatbotContainer) {
    openChatBtn.addEventListener('click', () => {
      chatbotContainer.classList.remove('chatbot-hidden');
    });
  }

  if (closeChatBtn && chatbotContainer) {
    closeChatBtn.addEventListener('click', () => {
      chatbotContainer.classList.add('chatbot-hidden');
    });
  }

  // MODAL PDF
  if (openPlanoBtn && pdfModal) {
    openPlanoBtn.addEventListener('click', () => {
      showElement(pdfModal);
    });
  }

  if (closePdfModalBtn) {
    closePdfModalBtn.addEventListener('click', () => {
      hideElement(pdfModal);
    });
  }

  // MODAL MODELO 3D
  if (renderPreviewBtn && modelModal) {
    renderPreviewBtn.addEventListener('click', () => {
      showElement(modelModal);
    });
  }

  if (closeModelModalBtn) {
    closeModelModalBtn.addEventListener('click', () => {
      hideElement(modelModal);
    });
  }

  // Cerrar modales si clic fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === pdfModal) hideElement(pdfModal);
    if (e.target === modelModal) hideElement(modelModal);
  });

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideElement(pdfModal);
      hideElement(modelModal);
      if (chatbotContainer) {
        chatbotContainer.classList.add('chatbot-hidden');
        openChatBtn.style.display = 'inline-block';
        if (whatsappBtn) whatsappBtn.style.display = 'block';
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.testimonial-list blockquote');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  // Opcional: auto slider cada 8 segundos
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 8000);
});
