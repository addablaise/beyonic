import { Component, OnInit } from '@angular/core';
import transactions from 'src/app/core/data/transactions';
import { Transaction } from 'src/app/core/models/transaction';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }
  public loadingState = true;
  public transactions: Transaction[] = [];

  ngOnInit(): void {
    setTimeout( () => {
      this.transactions = transactions;
      this.loadingState = false;
    }, 1000);
  }

  icon(type: any): String {
    let icon = "";

    if (type == "top-up") {
      icon = "fa-regular fa-credit-card";
    }
    else if (type == "send-money") {
      icon = "fa fa-arrow-up rotate-icon-45";
    }
    else if (type == "collection") {
      icon = "fa fa-arrow-right rotate-icon-45";
    }
    else if (type == "withdrawal") {
      icon = "fa fa-download";
    }

    return icon;
  }

  iconClass(status: any): String {
    let name = "";

    if (status == "completed") {
      name = "bg-beyonic-blue-50";
    }
    else if (status == "pending") {
      name = "bg-white border-2 border-beyonic-blue-50";
    }
    else if (status == "failed") {
      name = "bg-white border-2 border-dotted border-beyonic-blue-50";
    }

    return name;
  }

  class(status: any): String {
    let name = "";

    if (status == "completed") {
      name = "text-green-600";
    }
    else if (status == "pending") {
      name = "text-yellow-600";
    }
    else if (status == "failed") {
      name = "text-red-600";
    }

    return name;
  }

}
