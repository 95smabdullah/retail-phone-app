import { Component } from '@angular/core';
import { UserRequest,UserResponse } from '../app.model';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userRequest: UserRequest={user:'',password:''};
  errorMessage: string = '';
  loginMode=true;

  constructor(private appService:AppService, private router:Router){}

  login(){
    this.appService.login(this.userRequest).subscribe((userResponse:UserResponse)=>{
      if(userResponse.id===0){
        this.errorMessage = "Incorrect Username/Password"
      } else{
        this.errorMessage='';
        this.appService.userId=userResponse.id;
        this.router.navigate(['/listPhones']);
      }
    })
  }

  register(){
    this.appService.register(this.userRequest).subscribe((userResponse:UserResponse)=>{
      this.appService.userId=userResponse.id;
      this.router.navigate(['/listPhones']);
    })
  }

  toggleLoginMode(){
    this.loginMode=!this.loginMode;
  }

}