import { TestBed, inject } from '@angular/core/testing';

import { PunkService } from './punk.service';
import { HttpClientModule } from '@angular/common/http';

describe('PunkService', () => {
  let punkService: PunkService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PunkService],
      imports: [HttpClientModule]
    });
  });

  beforeEach(() => {
    punkService = TestBed.get(PunkService);
  });

  it('should be created', inject([PunkService], (service: PunkService) => {
    expect(service).toBeTruthy();
  }));

  it('#getRandomNonAlcoholicBeers() function should return random Beers from the API', (async() => {
    const res: any[] = await punkService.getRandomNonAlcoholicBeers().toPromise();
    expect(res.length).toBeGreaterThan(0);
    const beer: any = res[0];
    expect(beer.name).toBeDefined();
  }));

  it('#getRandomBeers() function should return random Beers from the API', (async() => {
    const res: any[] = await punkService.getRandomBeers().toPromise();
    expect(res.length).toBeGreaterThan(0);
    const beer: any = res[0];
    expect(beer.name).toBeDefined();
  }));

  it('#getBeersByName(\'test\') function should return Beers from the API', (async() => {
    const res: any[] = await punkService.getBeersByName('test').toPromise();
    expect(res.length).toBeGreaterThan(0);
    const beer: any = res[0];
    expect(beer.name).toBeDefined();
  }));

  it('#getBeersByDescription(\'test\') function should return Beers from the API', (async() => {
    const res: any[] = await punkService.getBeersByDescription('test').toPromise();
    expect(res.length).toBeGreaterThan(0);
    const beer: any = res[0];
    expect(beer.name).toBeDefined();
  }));
});
