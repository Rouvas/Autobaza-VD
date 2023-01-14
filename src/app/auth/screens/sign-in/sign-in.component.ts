import { Component, OnInit } from '@angular/core';

import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private notifications: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

}
