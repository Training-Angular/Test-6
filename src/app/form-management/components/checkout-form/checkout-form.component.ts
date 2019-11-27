import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-checkout-form",
  templateUrl: "./checkout-form.component.html",
  styleUrls: ["./checkout-form.component.scss"]
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm: FormGroup;
  submitted = false;
  editing = { isEditing: false, index: 0 };

  @Output() saveData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      username: ["", Validators.required],
      email: ["", [Validators.email]],
      address: ["", Validators.required],
      addressOptional: [""],
      country: ["", Validators.required],
      state: ["", Validators.required],
      zip: ["", Validators.required],
      paymentMethod: ["CC"],
      cardName: ["", Validators.required],
      cardNumber: ["", Validators.required],
      expiration: ["", Validators.required],
      cvv: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.checkoutForm.invalid) {
      return;
    }
    this.saveData.emit({
      data: this.checkoutForm.value,
      editing: this.editing
    });
    this.checkoutForm.reset();
    this.submitted = false;
    this.editing = { isEditing: false, index: 0 };
  }

  editForm(data: any, index: number) {
    this.checkoutForm.patchValue(data);
    this.editing = { isEditing: true, index };
  }
}
