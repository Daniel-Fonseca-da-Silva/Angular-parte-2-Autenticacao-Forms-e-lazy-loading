import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
          name: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  login() {

    const name = this.loginForm.get('name').value;
    const password = this.loginForm.get('password').value;

    this.authService
        .authenticate(name, password)
        .subscribe(
            () => console.log('autenticado'),
            err => {
                console.log(err)
                this.loginForm.reset()
                this.userNameInput.nativeElement.focus
                alert('Invalid user name or password')
            }
        );
}

}
