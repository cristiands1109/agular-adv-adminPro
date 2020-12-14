import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  private linkTheme = document.querySelector('#theme')

  constructor() { 
    // console.log('Setting Service Init');
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    
    this.linkTheme.setAttribute('href',url);
  }

  changeTheme( theme: string){
    
    // cambio de tema mediante vanila javascript

    const url = `./assets/css/colors/${theme}.css`
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme()

  }

  checkCurrentTheme() {

    const links = document.querySelectorAll('.selector');

    
    links.forEach( elem => {
      // remover el elemento html
      elem.classList.remove('working');

      // obtener el atributo personalizado
        const btnTheme = elem.getAttribute('data-theme');
      // construir el link para con el anterior atributo
        const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      // obtner el link actual para luego realizar la comparacion
        const currentTheme = this.linkTheme.getAttribute('href');

        if (btnThemeUrl === currentTheme ){ 
          elem.classList.add('working')
        }


    });

  }
}
