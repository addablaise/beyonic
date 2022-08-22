import { Component, OnInit } from '@angular/core';
import account from 'src/app/core/data/account';
import transactions from 'src/app/core/data/transactions';
import user from 'src/app/core/data/user';
import { Account } from 'src/app/core/models/account';
import { MenuItem } from 'src/app/core/models/menu-item';
import { Transaction } from 'src/app/core/models/transaction';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  public slide: number = 0;
  public user: User = user;

  public account: Account = {
    currency: "UGX",
    balance: 0,
    weekly: 0,
    incoming: 0,
    outgoing: 0,
  };


  public transactions: Transaction[] = [];

  public actions: MenuItem[] = [
    {
      name: "Top Up",
      icon: "fa-regular fa-credit-card",
      link: ""
    },
    {
      name: "Send Money",
      icon: "fa fa-arrow-up rotate-icon-45",
      link: ""
    },
    {
      name: "Collect",
      icon: "fa fa-arrow-right rotate-icon-45",
      link: ""
    },
    {
      name: "Withdraw",
      icon: "fa fa-download",
      link: ""
    }
  ];

  ngOnInit(): void {
    setTimeout( () => {
      this.account = account;
      this.transactions = transactions;
    }, 3000);
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

  load() {
    this.account = account;
    this.transactions = transactions;
  }

}
