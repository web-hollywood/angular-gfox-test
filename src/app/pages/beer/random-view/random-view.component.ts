import { Component, OnInit } from '@angular/core';
import { PunkService } from '../../../core/services/punk.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'golfox-random-view',
  templateUrl: './random-view.component.html',
  styleUrls: ['./random-view.component.scss']
})
export class RandomViewComponent implements OnInit {

  beer: any = null;

  constructor(
    private punkService: PunkService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getRandomBeer();
  }

  async getRandomBeer() {
    try {
      this.spinner.show();
      this.beer = await this.punkService.getRandomBeers().pipe(map((beers => beers[0]))).toPromise();
    } catch (e) {
      this.toastr.error('Failed to get data.');
    } finally {
      this.spinner.hide();
    }
  }

  async getRandomNonAchoholicBeer() {
    try {
      this.spinner.show();
      this.beer = await this.punkService.getRandomNonAlcoholicBeers().pipe(map((beers => beers[0]))).toPromise();
    } catch (e) {
      this.toastr.error('Failed to get data.');
    } finally {
      this.spinner.hide();
    }
  }

}
