import { Component, Input } from '@angular/core';

@Component({
  selector: 'proof',
  templateUrl: './proof.component.html',
  styleUrls: ['./proof.component.css']
})
export class ProofComponent{

  @Input() public text:string

  constructor() { }
}
