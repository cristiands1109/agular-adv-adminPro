import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string;
  public tituloSubs$: Subscription;

  ngOnDestroy(){
    this.tituloSubs$.unsubscribe();
  }

  constructor( private router: Router) { 
    this.tituloSubs$ = this.getArgumentoRutas()
      .subscribe( data => {
        console.log(data);
        this.titulo = data.titulo;
        document.title = `AdminPro - ${this.titulo}`; 
    })
  }

  getArgumentoRutas() {
    return this.router.events
    .pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    )
  }


}
