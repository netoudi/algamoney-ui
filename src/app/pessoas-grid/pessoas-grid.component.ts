import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pessoas-grid',
  templateUrl: './pessoas-grid.component.html',
  styleUrls: ['./pessoas-grid.component.scss']
})
export class PessoasGridComponent {

  @Input() pessoas = [];

}
