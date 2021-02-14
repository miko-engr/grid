import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FormlyFieldConfig } from '@ngx-formly/core';
// import { ColumnApi, GridApi } from "ag-grid";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "grid";

  model: any = {};
  options = {};
  form = new FormGroup({ radio: new FormControl() });

  field: FormlyFieldConfig[] = [
    {
      key: "grid",
      type: "grid",
      templateOptions: {
        columnDefs: [
          { field: "make", editable: true },
          { field: "sl", editable: true },
          { field: "price", editable: true },
          { field: "je", aggFunc: "sum", valueGetter: "data.sl * data.price" },
          { field: "style" },
          { field: "clothes" }
        ],
        rowData: [
          {
            make: "Toyota",
            sl: 1,
            price: 35000,
            je: 35000,
            style: "Smooth",
            clothes: "Jeans"
          },
          {
            make: "Ford",
            sl: 1,
            price: 35000,
            je: 35000,
            style: "Filthy",
            clothes: "Shorts"
          },
          {
            make: "Porsche",
            sl: 1,
            price: 35000,
            je: 35000,
            style: "Dirty",
            clothes: "Padded"
          }
        ]
      }
    }
  ];

  submit() {
    alert(JSON.stringify(this.form.value));
  }
}
