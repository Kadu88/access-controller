import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: 'monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  titulo_CP_01: String = 'Protocolos';
  legenda_CP_01: String = 'Total: ';
  numero_CP_01 = 789;

  titulo_CP_02: String = 'Processos';
  legenda_CP_02: String = 'Total: ';
  numero_CP_02 = 102;

  titulo_CP_03: String = 'Finalizados';
  legenda_CP_03: String = 'Total: ';
  numero_CP_03 = 387;

  titulo_CP_04: String = 'Cancelados';
  legenda_CP_04: String = 'Total: ';
  numero_CP_04 = 83;


  constructor() { }
  ngOnInit() {
  }
}
