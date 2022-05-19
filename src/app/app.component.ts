import { Component } from '@angular/core';
import { lap } from './lap.component';
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  static lapid:number=1;
  title = 'stopwatch';
  hour:number=0;
  min:number=0;
  sec:number=0;
  milsec:number=0;
  tmrid:any;
  laps:lap[]=[];
  isResetable:boolean=false;
  isStartable:boolean=true;
  start()
  {
    if(this.isStartable)
    {
    this.isResetable=false;
    //console.log("in start");
    this.tmrid=setInterval(()=>{
      //console.log("in start watch")
      this.milsec++;
      //console.log(this.milsec)
      if(this.milsec==10)
      {
        this.milsec=0;
        this.sec++;
      }
      if(this.sec==60){
          this.min++;
          this.sec=0;
      }
      if(this.min==60){
        this.hour++;
        this.min=0;
      }
    },100);
    this.isStartable=false;
  }
  }
  lap()
  {
   const lp=new lap();
   lp.lapName="lap "+AppComponent.lapid.toString();
   lp.hour=this.hour;
   lp.min=this.min;
   lp.sec=this.sec;
   lp.milsec=this.milsec;
   this.laps.push(lp);
   console.log(this.laps);
   AppComponent.lapid++;
  }
  stopWatch()
  {
    this.isStartable=true;
    this.isResetable=true;
    clearInterval(this.tmrid);
  }
  reset(){
    if(this.isResetable){
    this.laps=[];
    this.hour=0;
    this.min=0;
    this.milsec=0;
    this.sec=0;
    }
  }
}
