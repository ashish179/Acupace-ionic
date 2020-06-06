import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  public authUser: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
     console.log(this.authUser);
    });
    console.log(this.authUser);
  }

}
