//camada de acesso à API
const BASE_URL = 'https://overfast-api.tekrop.fr';

async function fetchFromApi(endpoint){
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok){
        throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

export function getHeroes(){
    return fetchFromApi('/heroes');
}

export function getHeroDetails(herokey){
    return fetchFromApi(`/heroes/${herokey}`);
}

export function getPlayerStats(battleTag){
    return fetchFromApi(`/players/${encodeURIComponent(battleTag)}`);
}