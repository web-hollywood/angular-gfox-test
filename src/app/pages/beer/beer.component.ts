import { Component, OnInit } from '@angular/core';
import { PunkService } from '../../core/services/punk.service';

@Component({
  selector: 'golfox-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  constructor(
    private punkService: PunkService
  ) { }

  ngOnInit() {
  }

}
