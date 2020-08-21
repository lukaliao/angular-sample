import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  // _content:string[];
  @Input() content:string[];
  @Output() action = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  doAction(event){
    this.action.emit(event);
  }

  push(item:string){
    this.content.push(item);
  }

  pop(){
    this.content.pop();
  }

  // @Input()
  // set content(s:string){
  //   this._content = s.split(',');
  // }

  // get content(){
  //   return this._content.join(',');
  // }

  // doClick(){
  //   this._content.pop();
  // }
}
