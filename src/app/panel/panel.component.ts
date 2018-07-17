import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment';
import { UrlParamsService } from '../url-params.service';
// import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit, OnDestroy {
  private productid: string;
  private culturecode: string;

  public content = '';

  constructor(private http: HttpClient, private urlParamsService: UrlParamsService) {}

  async ngOnInit() {
    this.productid = await this.urlParamsService.getParam('productid');
    this.culturecode = await this.urlParamsService.getParam('culturecode');
    this.req();
  }

  req() {
    this.http.get(`${environment.getUrl}?product=${this.productid}&cultureCode=${this.culturecode}`).subscribe(
      (resolve) => {
        this.content = (resolve as any).UrlContent;
      },
      (reject) => {
        console.log(reject);
        setTimeout(() => {
          this.req();
        }, 3000);
      },
    );
  }

  ngOnDestroy() {}
}
