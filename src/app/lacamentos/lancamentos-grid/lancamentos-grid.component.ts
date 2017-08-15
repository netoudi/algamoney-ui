import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lancamentos-grid',
  templateUrl: './lancamentos-grid.component.html',
  styleUrls: ['./lancamentos-grid.component.scss']
})
export class LancamentosGridComponent {

  @Input() lancamentos = [];

}
