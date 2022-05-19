import { Component, Input } from "@angular/core";
import { lap } from "./lap.component";

@Component({
    selector: 'pm-lapdisp',
    templateUrl:'./lap-display.component.html'
})
export class lapDisplay{
    @Input() lapDisparr:lap[]=[];

}