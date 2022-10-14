import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }
  @Input() countData:any="0";
  @Output() triggerParent = new EventEmitter();

  ngOnInit(): void {
  }
  triggerParentFunction() {
    this.triggerParent.emit();
  }

}
