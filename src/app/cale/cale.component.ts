import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-cale',
  templateUrl: './cale.component.html',
  styleUrls: ['./cale.component.css']
})
export class CaleComponent implements OnInit {

  result:string //表示内容
  cale:number //計算フラグ（1:+ 2:- 3:* 4:/)
  reset:boolean //リセットフラグ
  num:number
  resultStyle:string
  buttonStyle:string
  buttonColor:string

  constructor() { }

  ngOnInit(): void {
    this.result = '0'
    this.reset = false
    this.cale = 9
    this.num = 0.0
    this.resultStyle = 'resultStyle'
    this.buttonStyle = 'buttonWidth'
    this.buttonColor = 'orange'
  }

  doClick(val:string){
    if(this.reset){
      this.result = '0'
    }

    //頭文字0チェック
    if(this.result.substr(0,1) == '0' && this.result.substr(1,1) != '.'){
      if(val == '.'){
        this.result = '0'.concat(val)
      }else{
        this.result = val
      }
    }else if(this.result.substr(0,1) == '-' && this.result.substr(1,1) == '0'){
      this.result = '-'.concat(val)
    }else{
      this.result = this.result.concat(val)
    }
    this.reset = false
  }

  doFloat(){
    var p = '.'
    var flg = false
    for(var i = 0; i < this.result.length - 1; i++){
      if(this.result.substring(i,i+1) == p){
        flg = true
        break
      }
    }
    if(!flg){
      this.doClick(p)
    }
  }

  doReverse(){
    if(this.result.substr(0,1) == '-'){
      this.result = this.result.substr(1)
    }else{
      this.result = '-'.concat(this.result)
    }
  }

  doClean(){
    this.result = '0'
    this.num = 0.0
    this.cale = 9
    this.reset = false
  }

  doCale(val:number){
    
    if(this.cale < 4){
      switch (this.cale) {
        case 0:
          this.num = this.num + parseFloat(this.result)
          break;
        case 1:
          this.num = this.num - parseFloat(this.result)
          break;
        case 2:
          this.num = this.num * parseFloat(this.result)
          break;
        default:
          this.num = this.num / parseFloat(this.result)
          break;
      }
      this.result = String(this.num)
    }else{
      this.num = parseFloat(this.result)
    }

    this.cale = val
    this.reset = true
  }

  doCaleEnd(){
    this.doCale(0)
    this.num = 0.0
    this.cale = 9
    this.reset = true
  }
}
