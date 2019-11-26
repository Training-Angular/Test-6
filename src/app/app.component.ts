import { Component, ViewChild } from "@angular/core";
import { CheckoutFormComponent } from "./form-management/components/checkout-form/checkout-form.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  dataEdit: any;
  data: any;
  storage: Storage;
  @ViewChild(CheckoutFormComponent) checkoutForm: CheckoutFormComponent;

  constructor() {
    this.storage = window.localStorage;
  }

  ngOnInit(): void {
    this.data = this.getValue("form");
  }

  setObject(key: string, value: any): void {
    if (!value) {
      return;
    }

    this.storage[key] = JSON.stringify(value);
  }

  getValue<T>(key: string): T {
    const obj = JSON.parse(this.storage[key] || null);
    return <T>obj || null;
  }

  onSaveData(event) {
    let tmp: [any] = this.getValue("form");

    let result = null;
    let { data, editing } = event;
    if (editing.isEditing) {
      result = [
        ...tmp.slice(0, editing.index),
        data,
        ...tmp.slice(editing.index + 1)
      ];
    } else {
      result = tmp ? [...tmp, data] : [data];
    }
    this.setObject("form", result);
    this.data = this.getValue("form");
  }

  deleteData(index: number) {
    this.data.splice(index, 1);
    this.setObject("form", this.data);
  }

  editData(index: number) {
    this.dataEdit = this.data[index];
    this.checkoutForm.editForm(this.dataEdit, index);
  }
}
