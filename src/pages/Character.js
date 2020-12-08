import GetHash from '../utils/GetHash'
import getData from '../utils/getData';


const Character =  async () => {
    const id = GetHash();
    const people = await getData(id);
    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <img src="${people.image}" alt="${people.name}">
            <h2>${people.name}</h2>
        </article>
        <article class="Characters-card">
            <h3>Fils: <span>${people.episode.length}</span></h3>
            <h3>Cumple: <span> ${people.birth_year}</h3>
            <h3>Origen: <span> ${people.homeworld}</h3>
            <h3>Gender: <span> ${people.gender}</h3>
            <h3>Naves: <span> ${people.starships}</h3>
            <h3>Altura: <span> ${people.height}</h3>
        </article>
    </div>
    `;
    return view;
};

export default Character;