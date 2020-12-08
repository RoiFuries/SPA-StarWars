import getData from '../utils/getData';

const Home = async () => {
    const character = await getData();
    const view = `
        <div class="Characters">
            ${characters.results.map(people => ` 
                <article class="Chracter-item">
                    <a href="#/${people.id}/">
                        <img src="${people.image}" alt="${people.name}"> 
                        <h2>${people.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `;
    return view;
};
//  en                 
//  <img src="${character.image}" alt="${character.name}">  no va a funcionar

// el characters de la linea 7, de donde viene o a que hace referencia?

export default Home;