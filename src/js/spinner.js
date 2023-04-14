

export default class Spinner {
    constructor() {
      this.overlay = document.querySelector('.spinner__overlay');
      this.spinner = document.querySelector('.spinner');
    }
  
    async enable() {
      await new Promise(resolve => setTimeout(resolve, 0)); 
      this.overlay.classList.remove('is-hidden');
      this.spinner.classList.add('spinner--start');
    }
  
    async disable() {
      await new Promise(resolve => setTimeout(resolve, 0)); 
      this.overlay.classList.add('is-hidden');
      this.spinner.classList.remove('spinner--start');
    }
  }
  