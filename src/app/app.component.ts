import { Component, ViewChild, OnInit } from "@angular/core";
import { CheckoutFormComponent } from "./form-management/components/checkout-form/checkout-form.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  dataEdit: any;
  data: any;
  storage: Storage;
  @ViewChild(CheckoutFormComponent, { static: false })
  checkoutForm: CheckoutFormComponent;

  constructor() {
    this.storage = window.localStorage;
  }

  ngOnInit(): void {
    this.data = this.getValueFromStorage("form");
  }

  setObjectIntoStorage(key: string, value: any): void {
    if (!value) {
      return;
    }
    this.storage[key] = JSON.stringify(value);
  }

  getValueFromStorage<T>(key: string): T {
    const obj = JSON.parse(this.storage[key] || null);
    return (obj as T) || null;
  }

  onSaveData(event) {
    const currentData: [any] = this.getValueFromStorage("form");
    let newData = null;
    const { data, editing } = event;
    if (editing.isEditing) {
      newData = [
        ...currentData.slice(0, editing.index),
        data,
        ...currentData.slice(editing.index + 1)
      ];
    } else {
      newData = currentData ? [...currentData, data] : [data];
    }
    this.setObjectIntoStorage("form", newData);
    this.data = this.getValueFromStorage("form");
  }

  deleteData(index: number) {
    this.data.splice(index, 1);
    this.setObjectIntoStorage("form", this.data);
  }

  editData(index: number) {
    this.dataEdit = this.data[index];
    this.checkoutForm.editForm(this.dataEdit, index);
  }
}
