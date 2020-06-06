import { Component, OnInit } from '@angular/core';
import { Directive, Renderer2, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NotificationService } from './../../services/notification.service';
import { AuthService } from './../../services/auth.service';
import { DataService } from './../../services/data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastService } from './../../services/toast.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  public authUser: any;
  public inviteForm: FormGroup;
  public list: any;
  public submitAttempt: boolean = false;
  public subscription: any;
  public bodystring: any;
  constructor(
    private renderer: Renderer2,
    public formBuilder: FormBuilder,
    private webservice: NotificationService,
    private auth: AuthService,
    private toastService: ToastService,
    public data: DataService
  ) {
    this.inviteForm = this.formBuilder.group({
      attendee_email: new FormArray([
        new FormControl('', Validators.compose([
          Validators.pattern(
            '^[a-zA-Z0-9.]+[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'
          ),
          Validators.required
        ]))
      ]),
      host_meeting_start_time: ['', Validators.compose([Validators.required])],
      host_meeting_end_time: ['', Validators.compose([Validators.required])],
      channel_name: ['', Validators.compose([Validators.required])],
    });
  }
  ngOnInit() {
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log(typeof this.authUser);
    });
    let email = { attendee_email: this.authUser.user_email };
    this.subscription = this.webservice
      .notificationList(email)
      .subscribe((res: any) => {
        this.list = res.result;
        console.log(this.list);
      });
  }
  Invite() {
    this.submitAttempt = true;
    console.log(this.inviteForm);
    if (this.inviteForm.valid) {
      let bodystring = {
        host_id: this.authUser.ID,
        host_name: this.authUser.name,
        channel_name: this.inviteForm.get('channel_name').value,
        host_email: this.authUser.user_email,
        role: 'host',
        host_device_details: 'device_name',
        host_meeting_start_time: this.inviteForm.get('host_meeting_start_time')
          .value,
        host_meeting_end_time: this.inviteForm.get('host_meeting_end_time')
          .value,
        attendee_email: this.attendee_email.value,
      };
      console.log(bodystring);
      this.webservice.AddInvitation(bodystring).subscribe();
    } else {
      console.log('error');
    }
  }

   get attendee_email(): FormArray {
    return this.inviteForm.get('attendee_email') as FormArray;
  }
  addNameField() {
    this.attendee_email.push(new FormControl('', Validators.compose([
          Validators.pattern(
            '^[a-zA-Z0-9.]+[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'
          ),
          Validators.required
        ])
      )
        );
  }
  deleteNameField(index: number) {
    if (this.attendee_email.length !== 1) {
      this.attendee_email.removeAt(index);
    }
    console.log(this.attendee_email.length);
  }
  
}
