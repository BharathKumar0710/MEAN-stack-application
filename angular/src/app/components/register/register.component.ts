import { Component, OnInit } from "@angular/core";
import { ValidateService } from "../../services/validate.service";
// import { FlashMessagesModule, FlashMessagesService } from "angular2-flash-messages/module";


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    // private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {}

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };
    // Required fields
    if (!this.validateService.validateRegister(user)) {
      console.log("Please fill in all the fields", {
        cssClass: "alert-danger",
        timeout: 3000
      });
      return false;
    }
    // validate Email
    if (!this.validateService.validateEmail(user.email)) {
      console.log("Please use a valid email", {
        cssClass: "alert-danger",
        timeout: 3000
      });
      return false;
    }
    //  // Required fields
    //  if (!this.validateService.validateRegister(user)) {
    //   console.log('Please fill in all the fields');
    //   return false;
    // }
  }
}
