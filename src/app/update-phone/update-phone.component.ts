import { Component, OnInit } from '@angular/core';
import { PhoneRequest } from '../app.model';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-phone',
  templateUrl: './update-phone.component.html',
  styleUrls: ['./update-phone.component.css']
})
export class UpdatePhoneComponent implements OnInit {

  phoneRequest:PhoneRequest={name:'',descr:'',price:0,imgUrl:'',disc:0}
  id:number=0;
  constructor(private appService:AppService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = +idParam;
    } else {
      this.id = 0;
    }
  }
  
  update(){
    this.appService.updatePhone(this.phoneRequest, this.id).subscribe(()=>{
      this.router.navigate(['/listPhones'])
    })
  }

}