import { Component, OnInit, ViewChild } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms'; //追加
import { MessageComponent } from '../message/message.component';
import { MycheckService} from '../mycheck.Service';

function alpha(c:FormControl){
  let REGPATTERN = /^[a-zA-Z]+$/;
  if(REGPATTERN.test(c.value)){
    return null;
  }else{
    return {alpha:{valid:false}}
  }
}

function even(c:FormControl){
  return c.value % 2 == 0 ? null : {even:{valid:false}};
}

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  title:string;
  message1:string;
  message2:string;
  styleClass:string;
  now:Date;
  count:number;
  input:string;
  visible:boolean;
  data:string[];
  switch:string;
  nowClass:any;
  styleMessage:string;
  nowStyle:any;
  text1:string;
  myControl:FormControl;
  message3:string;
  message4:string;
  myControlGroup:FormGroup;
  message:string[];
  lastTarget:any;
  lastColor:string;
  input1:string;
  @ViewChild(MessageComponent)
  private msgComponent:MessageComponent;
  message5:string;
  
  constructor(private fb: FormBuilder, private service:MycheckService) {

    setInterval(
      () => {
        this.now = new Date();
        this.styleClass = this.styleClass == 'red' ? '' : 'red';
        console.log(this.styleClass);
      }, 1000); //以秒单位实时更新
   }

  ngOnInit(): void {
    this.title = 'hello-app';
    this.styleClass = 'red';
    this.count = 0;
    this.visible = true;
    this.data = ['1番','2番','3番'];
    this.switch = 'one';
    this.message4 = 'false,false,false';
    this.nowClass = {'thin':false, 'large':false, 'frame':false};
    this.styleMessage = 'false,false,false';
    this.nowStyle = {'border-style':'', 'border-width':'', 'border-color':''}
    this.text1 = '入力してください。';
    this.myControl = new FormControl('入力してください');
    this.myControlGroup = this.fb.group({
      name: ['', [Validators.required, alpha]],
      mail: ['', [Validators.email]],
      age: [0, [Validators.min(1),Validators.max(150), even]]
    });
    // this.message = 'one,two,three,four,five';
    this.message = ['one','two','three','four','five'];
    this.input1 = '';
    this.message5 = this.service.hello('Taro'); //依存性注入
  }

  get name(){return this.myControlGroup.get('name');}
  get mail(){return this.myControlGroup.get('mail');}
  get age(){return this.myControlGroup.get('age');}

  today(){
    return this.now.toLocaleString(); //显示时间
  }

  doClick(){
    this.message1 = ++this.count + "回、クリックしました。";
    this.visible = !this.visible;
  }

  doType(val:string){
    this.input = val;
    this.message2 = '出力:' + this.input;
  }
  
  doSelect(val){
    this.switch = val;
  }
  
  check(c1, c2, c3){
    this.nowClass.thin = c1;
    this.nowClass.large = c2;
    this.nowClass.frame = c3;
    this.message4 = c1 + ',' + c2 + ',' + c3;
  }

  checkStyle(in1, in2 ,in3){
    this.nowStyle['border-style'] = in1;
    this.nowStyle['border-width'] = in2 + 'px';
    this.nowStyle['border-color'] = in3;
    this.styleMessage = JSON.stringify(this.nowStyle);
  }

  onSubmit(){
    // if(this.myControlGroup.invalid){
    //   this.message3 = 'VALIDATION ERROR';
    // }else{
      let result = this.myControlGroup.value;
      this.message3 = JSON.stringify(result);
    // }
  }

  push(){
    if(this.input1 == ''){
      alert('テキストを入力してください。');
      return;
    }
    this.msgComponent.push(this.input1);
    this.input1 = '';
  }

  pop(){
    this.msgComponent.pop()
  }

  doClickMessage(event){
    if(this.lastTarget != null){
      this.lastTarget.style.color = this.lastColor;
      this.lastTarget.style.backgroundColor = 'white';
    }
    this.lastTarget = event.target;
    this.lastColor = event.target.style.color;
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'red';
  }

}
