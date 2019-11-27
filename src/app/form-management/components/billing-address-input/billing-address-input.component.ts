import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-billing-address-input",
  templateUrl: "./billing-address-input.component.html",
  styleUrls: ["./billing-address-input.component.scss"]
})
export class BillingAddressInputComponent implements OnInit {
  @Input() checkoutForm: FormGroup;
  @Input() submitted: boolean;

  constructor() {}

  ngOnInit() {}
}
