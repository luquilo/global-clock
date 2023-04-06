class CardComponent extends HTMLElement {
  set card(card){
    this._card = card
    this.render()
  }

  render() {
    this.innerHTML = 
    `
      <div class="card">
        <h1>${this._card.name}</h1>
      </div>
    `
  }
}

customElements.define('card-component', CardComponent)
