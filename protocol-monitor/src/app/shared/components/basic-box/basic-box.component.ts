import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-box',
  templateUrl: './basic-box.component.html',
  styleUrls: ['./basic-box.component.css']
})
export class BasicBoxComponent implements OnInit {

  @Input() titulo = '';
  @Input() subTitulo = '';
  @Input() valor = '';
  @Input() cor = '';

  constructor() { }

  ngOnInit() {
  }

}
