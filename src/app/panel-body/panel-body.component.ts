import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-body',
  templateUrl: './panel-body.component.html',
  styleUrls: ['./panel-body.component.css']
})
export class PanelBodyComponent implements OnInit {
  @Input() content: string;

  constructor() { }

  ngOnInit() { }

}
