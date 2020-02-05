import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  data = [
    "Pants",
    "Jacket",
    "iPhone Charger",
    "MacBook",
    "Underwear",
    "Hat",
    "T-Shirts",
    "Belt"
  ];
  data1 = ["Sleeping Pills", "Passport", "Sandwich"];
  name: string;
  sendValues() {
    if (this.name) {
      this.data.unshift(this.name);
    }
    this.name = "";
  }
  checkvalue(item) {
    if (item) {
      this.data1.unshift(item);
      const index: number = this.data.indexOf(item);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
    }
  }
  reverseValue(reversevalue) {
    if (reversevalue) {
      this.data.unshift(reversevalue);
      const index: number = this.data1.indexOf(reversevalue);
      if (index !== -1) {
        this.data1.splice(index, 1);
      }
    }
  }
  removeItem(removedItem) {
    if (removedItem) {
      const index: number = this.data.indexOf(removedItem);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
    }
  }
  removePackedItem(packedItem) {
    if (packedItem) {
      const index: number = this.data1.indexOf(packedItem);
      if (index !== -1) {
        this.data1.splice(index, 1);
      }
    }
  }
  allUnpacked() {
    let newvalue = this.data1.map(x => this.data.push(x));
    this.data1 = [];
  }
}
