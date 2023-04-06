import './cardComponent.js'

class CardList extends HTMLElement {
    set cards(cards) {
      this._cards = cards;
      this.render();
    }
   
    render() {
      this._cards.forEach(card => {
        const cardItemElement = document.createElement('card-component');
        
        cardItemElement.card = card;
        this.appendChild(cardItemElement);
      });
    }
  }
   
  customElements.define('card-list', CardList);