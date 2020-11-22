import { Component, EventEmitter, Input, Output} from '@angular/core';
import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input('title') titulo: string = 'Sin titulo';
  @Input('labels') doughnutChartLabels: Label[] = ['Label 1', 'Label 2', 'Label 3'];
  @Input('data') doughnutChartData = [
    [350, 450, 100],
  ];

    @Input('Colors') colors: Colors[] = [
      {backgroundColor: ['#6857E6','#009FEE','#F02059']}
    ];

}
