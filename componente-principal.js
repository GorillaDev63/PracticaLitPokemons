import { LitElement, html, css } from 'lit';
import { pokemon } from './pokemon.js';
import './componente-dos.js';

export class ComponentePrincipal extends LitElement {
    static get properties() {
        return {
            pokemons: { type: Object },
            filtro: {type: String}
        };
    }
    static styles = [
        css`
            :host {
                display: block;
                color: blue;
                padding: 10px;
            }

            h1 {
                color: red;
            }

            img {
                max-width: 100%;
            }

            .pokeCard {
                display: flex;
                flex-direction: column-reverse;
                height: 18rem; 
                width: 18rem;
            }
        `
    ];

    constructor() {
        super();
        this.pokemons = pokemon.pokemon;
        this.filtro = "name"
        console.log(this.pokemons, "los pokemons");
        this.addEventListener("sendPokemon", (e) => {
            console.log(e.detail, "regresó?");
        });
    }


    opcionFiltro(e){
        this.filtro = e.target.value;
    }

    //actividad: renderizar cada uno de los pokemones en un componente que creemos en forma de card

    render() {

        

        return html`
        <h1>Pokemon</h1>
        <p>Catálogo de pokemons</p>
        <componente-dos 
        id = "monitos"
        class="pokeContainer"
        .pokemons=${this.pokemons}
        ></componente-dos>
        `;
    }
}
customElements.define('componente-principal', ComponentePrincipal);