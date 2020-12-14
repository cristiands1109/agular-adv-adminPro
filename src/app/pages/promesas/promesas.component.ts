import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => console.log(usuarios));

    // const promesa = new Promise( (resolve, reject) => {

    //   if (false) {
    //     resolve('Hola Mundo')
    //   } else {
    //     reject('ERROR no cumple')
    //   }

    // });

    // promesa.then ((mensaje) => {
    //   console.log(mensaje);
    // }).catch(error => {
    //   console.log('ocurrio un', error)
    // });

    // console.log('Fin promesa');


  }

  getUsuarios () {

    const promesa = new Promise( resolve => {

      
          fetch('https://reqres.in/api/users?page=2')
          .then( resp => resp.json())
          .then(body => resolve(body.data))


    });

    return promesa;


  };

}
