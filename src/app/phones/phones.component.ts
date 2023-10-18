import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { CartRequest, PhoneResponse } from '../app.model';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit{
  phones:PhoneResponse[]=[];
  selectedPhones:boolean[]=this.phones.map(()=>false);
  phoneNames:boolean[]=this.phones.map(()=>true);
  filterName:string=''
  filterPriceMin:number=0
  filterPriceMax:number=99999
  cartRequest:CartRequest={userId:0,prodId:0}
  noFilter:boolean=true;
  
constructor (private appService:AppService, private router:Router){}

  ngOnInit(): void {
      // if(this.appService.userId===0){
      //   this.router.navigate(["/home"])
      // }
        this.appService.listPhone().subscribe((response)=>{
          this.phones=response;
          console.log(this.phones)
          console.log(this.phones[1].imgUrl)
          console.log('hi')
          console.log(this.phones[0].imgUrl)
        });
  }

  applyFilter(){
    this.noFilter=false;
    this.appService.listPhone().subscribe((response)=>{
      this.phones=response;
    });
  }

  filter(phone:PhoneResponse, i:number){
    return this.noFilter || (this.phoneNames[i] && this.filterPriceMin<=phone.price*(100-phone.disc)/100 && this.filterPriceMax>=phone.price*(100-phone.disc)/100)
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

  addToCart(prodId:number){
    this.cartRequest.prodId=prodId;
    this.cartRequest.userId=this.appService.userId;
    this.appService.addToCart(this.cartRequest).subscribe(()=>{
      window.alert(`Added to cart`)
    });
  }
}
