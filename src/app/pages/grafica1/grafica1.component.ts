import { Component } from '@angular/core';
import { Colors } from 'ng2-charts';
// import { ChartType } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Pan', 'Refresco', 'Hamburguesas'];
  public data1 = [[10,15,20]];
  public colors1: Colors[] = [
    {backgroundColor: ['#045D94','#2899E0','#E01212']}
  ];
  public labels2: string[] = ['Ocasional', 'Formal', 'Sport'];
  public data2 = [[50,30,20]];
  public colors2: Colors[] = [
    {backgroundColor: ['#E0CE00','#0B45E0','#94210F']}
  ];
  public labels3: string[] = ['Morado', 'Azul', 'Rojo'];
  public data3 = [[35,40,25]];
  public labels4: string[] = ['Invierno', 'Primavera', 'Verano'];
  public data4 = [[60,30,10]];
  public colors4: Colors[] = [
    {backgroundColor: ['#577C99','#007CE0','#DBE04A']}
  ];
  

}
