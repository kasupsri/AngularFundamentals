import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { TOASTR_TOKEN,IToastr } from '../common/toastr.service'

@Component({
  templateUrl : './profile.component.html',
  styles:[`
    em { float:right; color:#E05C65; padding-left: 10px; }
    .error input { background-color:#E05C65; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-holder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup = new FormGroup({})
  private firstName:FormControl = new FormControl()
  private lastName:FormControl = new FormControl()

  constructor(private authService:AuthService, 
    private router:Router,
    @Inject(TOASTR_TOKEN) private toastr:IToastr) {

  }

  ngOnInit(){
     this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required,Validators.pattern('[a-zA-Z].*')])
     this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues:any){
    if(this.profileForm.valid){
    this.authService.updateCurrentUser(formValues.firstName,formValues.lastName)
      .subscribe(()=> {
        this.toastr.success('Profile Saved')
      })
    }
  }

  logout(){
    this.authService.logout().subscribe(()=> {
      this.router.navigate(['/user/login'])
    })
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }

  cancel(){
    this.router.navigate(['events'])
  }

}