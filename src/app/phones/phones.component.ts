import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { PhoneResponse } from '../app.model';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit{
  phones:PhoneResponse[]=[];
  
constructor (private appService:AppService, private router:Router){}

  ngOnInit(): void {
        this.appService.listPhone().subscribe((response)=>{
          this.phones=response;
          console.log(this.phones)
          console.log(this.phones[1].imgUrl)
          console.log('hi')
          console.log(this.phones[0].imgUrl)
        });
  }

  delete(id:number){
    this.appService.deletePhone(id).subscribe(()=>{
      this.appService.listPhone().subscribe((response)=>{
        this.phones=response;
      }); 
    });
  }

  update(id:number){
    this.router.navigate(['/update',id])
  }
}
