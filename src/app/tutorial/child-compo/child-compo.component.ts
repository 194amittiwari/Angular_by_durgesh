import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-compo',
  templateUrl: './child-compo.component.html',
  styleUrls: ['./child-compo.component.css']
})
export class ChildCompoComponent {
@Input() counter=0;
@Input() name='durgesh';
}
