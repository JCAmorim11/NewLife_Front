import { NavegationComponent } from './../../../shared/components/navegation/navegation.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Directive, Input, OnInit, Optional } from '@angular/core';
import { valido, check } from 'src/app/shared/shared.module';
import { Router, RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {


  @Input() disableLink: boolean = true;

  
  
  
  constructor(private form: FormBuilder,private router: Router,
  @Optional() routerLinkWithHref: RouterLinkWithHref )
  { 

   }
   ngOnInit(): void {
  }
    
  checkar(){
    return check();
  }
    
  processingRequest = false;
  root: String = '';
  pswrd: string = '';
  loginForm= this.form.group({
    user: ['',Validators.required],
    pass: ['', Validators.required]
  });
  
  rtForm:HTMLFormElement = <HTMLFormElement>document.getElementById('forn');

  log(){
    this.root = (<HTMLSelectElement>document.getElementById('usuario')).value;
    this.pswrd = (<HTMLSelectElement>document.getElementById('senha')).value;
    if(this.checkar()){
      this.router.navigateByUrl('/register/resident');
      return;
    }
    if(this.root == "root" && this.pswrd == "root"){
      valido();
      console.log(check());
      this.router.navigateByUrl('/register/resident');
    }else{
      console.log(check());
      (<HTMLFormElement>document.getElementById('forn')).reset();
      alert("num foi");

    }
    
    return check()
  }
}
