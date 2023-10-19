import { LitElement, html, css } from 'lit';

export class PokeCard extends LitElement {
    static get properties() {
        return {
            pokemon: { type: String }
        };
    }
    static styles = [
        css`
            :host {
                display: block;
            }
            .pokeCard{
                display:flex;
                flex-direction:column;
                height:18rem;
                width:18rem;
            }
        `
    ];

    render() {
        return html`
            <div class="pokeCard">
                <h1>${this.pokemon.name}</h1>
            <p>${this.pokemon.about}</p>
            
            </div>`;
    }


}
customElements.define('poke-card', PokeCard);