import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageService } from './pages/home-page/home-page.service';
import { HomeService } from './pages/home/home.service';
import { SignupService } from './pages/signup/signup.service';
import { Signup } from './pages/signup/signup.model';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';







@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  islogin: boolean;
  signups: Signup[];
  path: any;
  securepath: any= window;
  constructor(public homepageserv: HomePageService,
    public homeservice: HomeService,
    private router: Router,
    public signupserv: SignupService,
    private camera: Camera){

    this.signups=this.signupserv.signup;

  }

  ngoninit(){
     this.islogin1();
  }


   islogin1(){
    this.islogin=this.homeservice.islogin;
    return this.islogin;
   }
   go(){
    this.router.navigate(['/signup']);
   }

   logout(){

    this.router.navigate(['/home']);
    //this.homeservice.setlogout();
   }

   public async addphoto(){

    const captur: CameraOptions = {
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      quality: 100,
      correctOrientation: true,

    };
    this.camera.getPicture(captur).then((result) =>{
      console.log(result);
      this.path= this.securepath.Ionic.WebView.convertFileSrc(result);

    }, error =>{
      console.log(error);

    });


  }

}
