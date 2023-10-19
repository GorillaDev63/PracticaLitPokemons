import { LitElement, html, css } from 'lit';

export class PokeCard extends LitElement {
    static get properties() {
        return {
            pokemon: { type: Object }
        };
    }
    static styles = [
        css`
            :host {
                display: block;
            }
            .pokeCard{
                /* display: flex; */
                flex-direction: column-reverse;
                height: 18rem;
                width: 18rem;
            }

            img{
                max-width: 100%;
            }
        `
    ];

    render() {
        return html`
            <div class="pokeCard">
                <h1>${this.pokemon.name}</h1>
            <p>${this.pokemon.about}</p>
            <img src="${this.pokemon.img}" alt="${this.pokemon.name}" >
            
            </div>`;
    }


}
customElements.define('poke-card', PokeCard);