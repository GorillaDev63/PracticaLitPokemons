import { LitElement, html, css } from 'lit';
import './poke-card.js';

export class ComponenteDos extends LitElement {
    static get properties() {
        return {
           pokemons: { type:Object } 
        };
    }
    static styles = [
        css`
            :host {
                display: block;
            }
            .pokeContainer{
                display: grid;
            }
        `
    ];


    render() {
        return html`
        <p>Este es el segundo componente</p>
        <div class='pokeContainer'>
        ${this.pokemons.map((poke) => 
            html`<poke-card  .pokemon= ${poke}></poke-card>`
        )}
        </div>
        `;
    }
}
customElements.define('componente-dos', ComponenteDos);