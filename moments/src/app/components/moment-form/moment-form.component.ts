import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InvalidZone } from 'luxon';
import { OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';



@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent  implements OnInit  {
  @Output() onSubmit = new EventEmitter<Moment>()
 @Input() btnText!: string

  momentForm!: FormGroup
submitted = false

  constructor() {}


  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      image: new FormControl ('',[Validators.required]),
    })
  }

  get title() {
    return this.momentForm.get('title')!
  }

  get description() {
    return this.momentForm.get('description')!
  }

  get image() {
    return this.momentForm.get('image')!
  }




  
  
  onFileSelected(event:any) {

    const file: File  = event.target.files[0] 

    // this.momentForm.get('image')?.setValue(file)
    this.momentForm.patchValue({image:file})
    // console.log(this.momentForm.get('image')?.value)
  }

  

submit() {
  this.submitted = true

   console.log(this.momentForm.value)
  this.onSubmit.emit(this.momentForm.value)

}



}
