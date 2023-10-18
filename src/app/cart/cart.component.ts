import { Component,OnInit } from '@angular/core';
import { CartResponse, PhoneResponse } from '../app.model';
import { AppService } from '../app.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  items:PhoneResponse[]=[]

  constructor(private appService:AppService, private router:Router){}
  ngOnInit(): void {
    this.appService.seeCart(this.appService.userId).subscribe((response)=>{
      this.items=response;
    });
  }

  deleteFromCart(prodId:number){
    this.appService.deleteFromCart(prodId).subscribe(()=>{
      this.appService.seeCart(this.appService.userId).subscribe((response)=>{
        this.items=response;
      });
    });
  }

  get totalPrice(): number {
    return this.items.reduce((total, item) => total + (item.price - (item.price * item.disc / 100)), 0);
  }

  buyNow(){
    window.alert('Purchase Successfull')
    this.appService.deleteCart(this.appService.userId).subscribe(()=>{
      this.router.navigate(["/listPhones"])
    })
  }
  

}
