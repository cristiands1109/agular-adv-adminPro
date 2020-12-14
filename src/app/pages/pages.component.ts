import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { url } from 'inspector';
import { SettingsService } from '../services/settings.service';
// import {customInitFuntions} from '../../assets/js/custom.js';

declare function customInitFunctions ();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  
  

  constructor( private settingsService: SettingsService) { }

  ngOnInit(): void {
    customInitFunctions();

  }

}
