import { Component } from '@angular/core';
import { PhoneRequest } from '../app.model';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent{

  phoneRequest:PhoneRequest={name:'',descr:'',price:0,imgUrl:'',disc:0}
  constructor(private appService:AppService, private router:Router){}

  add(){
    this.appService.addPhone(this.phoneRequest).subscribe(()=>{
      this.router.navigate(['/listPhones'])
    })
  }

}
