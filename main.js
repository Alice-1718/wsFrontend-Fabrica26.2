import { getHeroes, getHeroDetails, getPlayerStats} from './api.js';

async function main() {
    try {
        const heroes = await getHeroes();
        console.log(`Total de herois: ${heroes.length}`);

       // const stats = await getPlayerStats('Player-1234');
        //console.log(stats);
    }catch(error){
        console.error('Falha ao buscar dados:', error.message);
    }
}


main()


async function carregarHerois() {
  const herois = await getHeroes();
  const container = document.getElementById('lista');

  herois.forEach(heroi => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${heroi.portrait}" alt="${heroi.name}">
      <h3>${heroi.name}</h3>
      <p>${heroi.role}</p>
    `;
    container.appendChild(card);
  });
}

carregarHerois();

//
document.querySelector('.hero-btn').addEventListener('click', (e) => {
  e.preventDefault(); // impede o pulo instantâneo do #

  const lista = document.getElementById('lista');

  lista.classList.add('ativo');
  lista.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.hero-btn').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('app').classList.add('mostrar-lista');
});