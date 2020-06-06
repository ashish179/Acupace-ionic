import { Component, OnInit } from '@angular/core';
import { AngularAgoraRtcService, Stream } from 'angular-agora-rtc';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {Renderer2} from '@angular/core';
import { CountdownModule } from "ngx-countdown";
import { DataService } from './../../services/data.service';
import { AuthService } from './../../services/auth.service';
import { HttpService } from './../../services/http.service';
import { AlertService } from './../../services/alert.service';
import { ToastService } from './../../services/toast.service';



@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

 localStream: Stream // Add
 dataObject: any;
 channelName : string;
 UID : any;
 localCallId = 'agora_local';
 reset:any;
 public remoteStreams = {};
 subscription : any;
 remoteCalls: any = [];
 @ViewChild('agora_local',{static: false}) private element : ElementRef;
 @ViewChild('container',{static: false}) private container : ElementRef;
 @ViewChild('widgetsContent', {read: ElementRef,static:true}) public widgetsContent: ElementRef<any>;

public scrollRight(): void {
  this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 250), behavior: 'smooth' });
}

public scrollLeft(): void {
  this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 250), behavior: 'smooth' });
}
 public authUser: any;
  public LocalStreamID=this.localCallId;
  // Add
  constructor(
    private agoraService: AngularAgoraRtcService,
    private renderer: Renderer2,
    public data : DataService ,
    private toastService: ToastService,
    private auth: AuthService,
    private alert: AlertService,
    private httpservice : HttpService
  ) {
    this.agoraService.createClient();
  }

  // Add
  startCall() {
  this.dataObject = this.data.getData();
  console.log(this.dataObject);
  if(this.dataObject.meeting_status == "0"){
  if(this.dataObject.host_name == this.authUser.name){
    this.channelName = this.dataObject.channel_name
    this.UID = this.dataObject.host_room_id;
  }
  else{
   this.channelName = this.dataObject.channel_name
   this.UID = this.dataObject.room_id;
  }
    this.agoraService.client.join(null, this.channelName, this.UID, (uid) => {
      this.localStream = this.agoraService.createStream(this.UID, true, null, null, true, false);
      this.localStream.setVideoProfile('720p_3');
      this.subscribeToStreams();
    });
    }
  else{
      this.toastService.presentToast("meeting ended");
    }
  }

  // Add
   private subscribeToStreams() {

    this.localStream.init(() => {
      console.log("getUserMedia successfully");
      this.localStream.play('agora_local');
      this.remoteStreams["agora_local"] = this.localStream;
      this.agoraService.client.publish(this.localStream, function (err) {
        console.log("Publish local stream error: " + err);
      });
      this.agoraService.client.on('stream-published', function (evt) {
        console.log("Publish local stream successfully");
      });
    }, function (err) {
      console.log("getUserMedia failed", err);
    });

    // Add
    this.agoraService.client.on('error', (err) => {
      console.log("Got error msg:", err.reason);
      if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.agoraService.client.renewChannelKey("", () => {
          console.log("Renew channel key successfully");
        }, (err) => {
          console.log("Renew channel key failed: ", err);
        });
      }
    });

    // Add
    this.agoraService.client.on('stream-added', (evt) => {
      this.toastService.presentToast('stream added');
      const stream = evt.stream;
      this.agoraService.client.subscribe(stream, (err) => {
        console.log("Subscribe stream failed", err);
      });
    });

    // Add
    this.agoraService.client.on('stream-subscribed', (evt) => {
      this.toastService.presentToast('subscribed to a stream');
      const stream = evt.stream;
      this.remoteStreams[`agora_remote${stream.getId()}`] = stream ;
      if (!this.remoteCalls.includes(`agora_remote${stream.getId()}`)) this.remoteCalls.push(`agora_remote${stream.getId()}`);
      setTimeout(() => stream.play(`agora_remote${stream.getId()}`), 2000);
    });

    // Add
    this.agoraService.client.on('stream-removed', (evt) => {
      const stream = evt.stream;
      stream.stop();
      this.remoteCalls = this.remoteCalls.filter(call => call !== `#agora_remote${stream.getId()}`);
      console.log(`Remote stream is removed ${stream.getId()}`);
    });

    // Add
    this.agoraService.client.on('peer-leave', (evt) => {
      this.toastService.presentToast('someone left the chat');
      const stream = evt.stream;
      if (stream) {
        if(this.remoteStreams[this.localCallId]!=this.localStream){
          this.Toggle(this.localCallId,this.LocalStreamID);
        }
        delete this.remoteStreams[evt.uid];
        stream.stop();
        this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
        console.log(`${evt.uid} left from this channel`);
      }
    });
    this.adjust()
  }


  leave() {
    this.alert.presentAlertConfirm("Leaving","are you sure you want to leave you cant enter again").then((res)=>{console.log(res);
    if(res.role == "okay"){
    this.localStream.close();
    this.agoraService.client.leave(() => {
      this.toastService.presentToast('left channel');
      console.log("Leavel channel successfully");
    }, (err) => {
      console.log("Leave channel failed");
    });
       console.log("hello");
    for (let child of this.element.nativeElement.children) {
  this.renderer.removeChild(this.element.nativeElement, child);
}
  for (let child of this.container.nativeElement.children) {
  this.renderer.removeChild(this.container.nativeElement, child);
}
  let data = {"id":this.dataObject.id,"room_id":this.dataObject.room_id};
  console.log(data);
  this.httpservice.post("update_meeting_status.php",data).subscribe((res: any) => {
        console.log("response");
        console.log(res);
    });
    console.log(this.remoteCalls);
    }
    else{
    console.log("continue")
    }
    });
}


adjust(){
  this.renderer.setStyle(this.container.nativeElement,"position","absolute");
  this.renderer.setStyle(this.element.nativeElement,"position","absolute");
 this.renderer.setStyle(this.container.nativeElement,"z-index","1");
  this.renderer.setStyle(this.element.nativeElement,"z-index","2");
}



  ngOnInit() {
  this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log(typeof this.authUser);
    });

   console.log(this.authUser);

   this.startCall();
  }


  toggleView(){
    let data = "agora_local";
    console.log(this.remoteStreams);
    console.log(this.remoteStreams[data]);

  }
  Toggle(local:any,remote:any){
      console.log(this.remoteStreams[local]);
      console.log(this.remoteStreams[remote]);

      this.remoteStreams[local].stop();
      this.remoteStreams[local].play(remote);
      this.remoteStreams[remote].stop();
      this.remoteStreams[remote].play(local);
      let stream:Stream=this.remoteStreams[local];
      this.remoteStreams[local]=this.remoteStreams[remote];
      this.remoteStreams[remote]=stream;
  }
  Toggle_Stream(remoteId:any){
    console.log(remoteId);
  if(this.remoteStreams[this.localCallId]!=this.localStream){
    if(this.LocalStreamID!=remoteId){
      this.Toggle(this.localCallId,this.LocalStreamID);
      this.LocalStreamID = this.localCallId;
      this.Toggle(this.localCallId,remoteId);
      this.LocalStreamID = remoteId;
    }
    else{
      this.Toggle(this.localCallId,remoteId);
      this.LocalStreamID = this.localCallId;
    }
  }
  else{
    this.Toggle(this.localCallId,remoteId);
    this.LocalStreamID=remoteId;
  }
}

}
