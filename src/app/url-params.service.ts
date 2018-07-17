import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlParamsService {
  params;

  constructor(private route: ActivatedRoute) {}

  private getParams() {
    return new Promise<string>((resolve) => {
      this.route.queryParams.subscribe((params) => {
        if (Object.keys(params).length === 0) {
          return;
        }
        this.params = params;
        resolve();
      });
    });
  }

  async getParam(key: string) {
    await this.getParams();
    return this.params[key];
  }
}
