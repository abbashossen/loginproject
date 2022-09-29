import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public account = {
    password: null
      };

      // eslint-disable-next-line @typescript-eslint/no-inferrable-types, @typescript-eslint/quotes
      public barLabel: string = "Password strength:";
  constructor(private router: Router ,private signupservice: SignupService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    if(form.valid){
      this.signupservice.adduser(form.value.username,form.value.password);
      form.reset();

      this.router.navigate(['/home']);
    }

  }

}
