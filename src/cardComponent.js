import profilePicture from '../images/user.png';

class CardComponent extends HTMLElement {
  set card(card) {
    this._card = card;
    this.render();
  }

  // penulisan mungkin agak terlihat tidak rapi disini karena pemberian style secara manual (white spacing dan inline style)

  render() {
    this.innerHTML = `
      <div class="card">
        <div class='image-wrapper' style='display: flex; align-items:center; justify-content: center; margin-top:50px; margin-bottom:50px;'>
          <img src="${profilePicture}" alt="profile" width='150'>
        </div>        
        <h1><pre>nama                 : ${this._card.name}</pre></h1>
        <h1>tempat tinggal : ${this._card.address.street}, ${this._card.address.city}</h1>
        <h1><pre>email                 : ${this._card.email}</pre></h1>
      </div>
    `;
  }
}

customElements.define("card-component", CardComponent);
