import { Component, OnDestroy } from '@angular/core';
import { error } from 'protractor';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter} from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy  {

  public intervalSubs: Subscription;

  ngOnDestroy(){
    this.intervalSubs.unsubscribe();
  }

  constructor() { 

    // el llamado a la funcion con todos los parametros
    
    // this.retornaObservable().pipe( 
    //     retry(1)
    //   ).subscribe(
    //   valor => console.log('Subs:', valor),
    //   error => console.warn('Error', error),
    //   () => console.info('Obs terminado'));


    this.intervalSubs = this.retornaInterva().subscribe(
      (valor) => console.log(valor)
    );
  }

  retornaInterva(): Observable<number> {

    // tambien se puede hacer de la siguiente manera 'const intervalo$ =' se reemplaza con el return 
    return interval(500)
            .pipe(
              // take(10),
              map( valor => { 
                return valor+1;
              }),
              filter(valor => ( valor % 2 === 0)? true: false),
            );

  }

  // Funcion que retorna un observable

  retornaObservable(): Observable<number>{
    let i = -1;
    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval( () => {
        i++;
        observer.next(i);
        if(i === 4) {

          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 3) {
          // i = 0; 
          observer.error('llego a 3')
        }
        // console.log('TickTock');
      }, 1000)
    })
    return obs$;

  }


}
