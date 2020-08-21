import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MycheckService } from '../mycheck.Service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  // _content:string[];
  @Input() content:string[];
  @Output() action = new EventEmitter<MouseEvent>();

  constructor(private service:MycheckService) {
    this.content = [];
   }

  ngOnInit(): void {
    this.content.push(this.service.hello());
  }

  doAction(event){
    this.action.emit(event);
  }

  push(item:string){
    this.service.name = item;
    this.content.push(this.service.hello());
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
