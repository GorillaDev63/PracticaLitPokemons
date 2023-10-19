import { LitElement, html, css } from 'lit';
import { pokemon } from './pokemon.js';
import './componente-dos.js';

export class ComponentePrincipal extends LitElement {
    static get properties() {
        return {
            pokemons: { type: Object }
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
        `
    ];

    constructor() {
        super();
        this.pokemons = pokemon.pokemon;
        console.log(this.pokemons, "los pokemons");
        this.addEventListener("sendPokemon", (e) => {
            console.log(e.detail, "regresó?");
        });
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