const dados = [
  { 
    img: "../img/corte1.jpeg", 
    title: "Corte Masculino", 
    desc: "Estilo moderno e bem-feito.", 
    gender: "masculino" 
  },
  { 
    img: "../img/corte 2.webp", 
    title: "Barba Desenhada", 
    desc: "Modelagem profissional da barba.", 
    gender: "masculino" 
  },
  { 
    img: "../img/corte3.jpg", 
    title: "Sobrancelha Masculina", 
    desc: "Remoção e design.", 
    gender: "masculino" 
  },
  { 
    img: "../img/fe1.jpeg", 
    title: "Corte Feminino", 
    desc: "Tendências do momento.", 
    gender: "feminino" 
  },
  { 
    img: "../img/fe2.jpg", 
    title: "Pintura de Cabelo", 
    desc: "Tons naturais e modernos.", 
    gender: "feminino" 
  },
  { 
    img: "../img/fe4.jpg", 
    title: "Tratamento Capilar", 
    desc: "Hidratação profunda.", 
    gender: "feminino" 
  }
];

const gallery = document.getElementById("gallery");
const buttons = document.querySelectorAll(".btn-filter");
const toggleBtn = document.getElementById("toggleThemeBtn");

function renderCards(cards) {
  gallery.innerHTML = "";
  cards.forEach(item => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4";
    col.innerHTML = `
      <div class="card h-100" data-gender="${item.gender}" style="cursor: pointer;" onclick="openModal('${item.img}')">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.desc}</p>
        </div>
      </div>
    `;
    gallery.appendChild(col);
  });
}

function openModal(imgSrc) {
  const modalImg = document.getElementById("modalImage");
  modalImg.src = imgSrc;
  const modal = new bootstrap.Modal(document.getElementById('imageModal'));
  modal.show();
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filtro = btn.getAttribute("data-filter");

    if (filtro === "todos") {
      renderCards(dados);
    } else {
      const filtrados = dados.filter(d => d.gender === filtro);
      renderCards(filtrados);
    }
  });
});

// Alternar tema
toggleBtn.addEventListener("click", () => {
  const body = document.body;
  const isLight = body.classList.contains("light-theme");

  if (isLight) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    toggleBtn.innerHTML = "☀️ Modo Claro";
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    toggleBtn.innerHTML = "🌙 Modo Escuro";
  }
});

// Renderizar todos ao carregar
window.onload = () => {
  renderCards(dados);
}; 