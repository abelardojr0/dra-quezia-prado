document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu_hamburguer');
  const nav = document.querySelector('.cabecalho_nav');

  menuBtn.addEventListener('click', function () {
    nav.classList.toggle('ativo');
  });
});

let temas = [
  {
    cor_principal: '#e0d0c0',
    cor_secundaria: '#65232d',
    cor_destaque: '#b6592e',
  },
  {
    cor_principal: '#65232d',
    cor_secundaria: '#b6592e',
    cor_destaque: '#e0d0c0',
  },
  {
    cor_principal: '#b6592e',
    cor_secundaria: '#e0d0c0',
    cor_destaque: '#65232d',
  },
  {
    cor_principal: '#b6592e',
    cor_secundaria: '#65232d',
    cor_destaque: '#e0d0c0',
  },
];

function trocarCores() {
  let select = document.getElementById('tema');
  let indice = select.value;
  let tema = temas[indice];

  document.documentElement.style.setProperty(
    '--cor-principal',
    tema.cor_principal,
  );
  document.documentElement.style.setProperty(
    '--cor-secundaria',
    tema.cor_secundaria,
  );
  document.documentElement.style.setProperty(
    '--cor-destaque',
    tema.cor_destaque,
  );
}
