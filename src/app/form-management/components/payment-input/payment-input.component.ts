import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-payment-input",
  templateUrl: "./payment-input.component.html",
  styleUrls: ["./payment-input.component.scss"]
})
export class PaymentInputComponent implements OnInit {
  @Input() checkoutForm: FormGroup;
  @Input() submitted: boolean;
  constructor() {}

  ngOnInit() {}
}
