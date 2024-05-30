import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class registerComponent {
 
  //signup will be a formgroup object
  public Register !: FormGroup
  api="http://localhost:3000/registerUsersList/"
  constructor( private formbuilder: FormBuilder,private http: HttpClient, private router: Router){}

  ngOnInit():void
  {
  
    this.Register=this.formbuilder.group({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      cPassword: new FormControl('',Validators.required)
    },{validator:this.checkPasswords });
   // this.register()
  }
  checkPasswords(formgroup:FormGroup):any{
    
    const password =formgroup.get('password')?.value;
    const cPassword =formgroup.get('cPassword')?.value;
    //return password === cpassword?null:{mismatch:true}
    if (password === cPassword) {
      return null; // Passwords match
  } else {
      return { passwordMismatch: true }; // Passwords don't match
  }
}
  

  register()
  {
    this.http.post<any>(this.api,this.Register.value).subscribe(resp=>{

      alert('sign up successful');
      //the navigator method accepts an array of route as an argument
      this.Register.reset()
      this.router.navigate(["/login"])
    },error=>{
        alert("something went wrong");

    })
  }
    
  }


