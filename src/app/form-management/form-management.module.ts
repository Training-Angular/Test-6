import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckoutFormComponent } from "./components/checkout-form/checkout-form.component";
import { PaymentInputComponent } from "./components/payment-input/payment-input.component";
import { BillingAddressInputComponent } from "./components/billing-address-input/billing-address-input.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    CheckoutFormComponent,
    PaymentInputComponent,
    BillingAddressInputComponent
  ],
  exports: [CheckoutFormComponent]
})
export class FormManagementModule {}
