import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  
  @Input() countData: any = "0";
  @Input() otherCount: any = "0";
  @Output() triggerParent = new EventEmitter();

  constructor() {
    //alert("constructor: " + this.otherCount);
  }

  ngOnChanges(changes: SimpleChanges) {
  }  
  
  ngOnInit() {
    //alert("ngOnInit: " + this.otherCount);
  }

  ngAfterViewInit() {
    debugger;
  }
  
  ngAfterViewChecked() {
    debugger;
  }

  triggerParentFunction() {
    this.triggerParent.emit();
  }
  
  ngOnDestroy() {
  }

}
