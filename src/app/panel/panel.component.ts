import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public content = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.req();
  }

  req() {
    const productid = 7;
    const culturecode = 'zh-CN';


    const getReq = this.http.get(`${environment.baseUrl}PrivacyPolicyDocuments/?product=${productid}&cultureCode=${culturecode}`);

    getReq.subscribe((resolve) => {
      console.log(resolve);
      this.content = (resolve as any).UrlContent;
    });
  }

}
