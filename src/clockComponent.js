class ClockComponent extends HTMLElement {
  set clock(clock){
    this._clock = clock
    this.render()
  }

  render() {
    this.innerHTML = 
    `
      <div class="clock__card">
        <h1>${this._clock.country}</h1>
        <p class='time'></p>
        <p class='date'></p>
      </div>
    `
  }
}

customElements.define('clock-component', ClockComponent)
