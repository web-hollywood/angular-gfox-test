import { Component, OnInit } from '@angular/core';
import { PunkService } from '../../../core/services/punk.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'golfox-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit {

  beers: any;
  keyword: any;

  constructor(
    private punkService: PunkService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
  }

  async getBeersByName() {
    try {
      this.spinner.show();
      this.beers = await this.punkService.getBeersByName(this.keyword).toPromise();
    } catch (e) {
      this.toastr.error('Failed to get data.');
    } finally {
      this.spinner.hide();
    }
  }

  async getBeersByDescription() {
    try {
      this.spinner.show();
      this.beers = await this.punkService.getBeersByDescription(this.keyword).toPromise();
    } catch (e) {
      this.toastr.error('Failed to get data.');
    } finally {
      this.spinner.hide();
    }
  }

  searchBeers() {
    this.getBeersByName();
  }

}
