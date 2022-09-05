import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'jcvd';
  movies:any[] =[
    {title: 'Cyborg', id: 10134, character: 'Gibson Rickenbacker', overview: 'A martial artist hunts a killer in a plague-infested urban dump of the future.', releaseDate: '1989-04-07'},
    {title: 'Hard Target', id: 2019, character: 'Chance Boudreaux', overview: "When a woman's father goes missing, she enlists a …n who hunts homeless men as a form of recreation.", releaseDate: '1993-08-20'},
    {title: 'Kickboxer', id: 10222, character: 'Kurt Sloane', overview: 'If your enemy refuses to be humbled... Destroy him…m for life. Crazed with anger, Kurt vows revenge.', releaseDate: '1989-04-20'},
    {title: 'Universal Soldier: The Return', id: 10366, character: 'Luc Devereux', overview: 'Luc Deveraux, the heroic former Universal Soldier,…t pits man against machine and good against evil.', releaseDate: '1999-08-05'}
  ]


  constructor(private dataService: DataService) {}
  issData$: Observable<any> |undefined;
  seconds:number = 5;


  ngOnInit(): void {
    // setInterval(()=>{
    //   this.button1();
    //   }, this.seconds * 1000
    //   );
  }

  button1(){
    this.issData$ = this.dataService.test();
    this.issData$.subscribe((data:any)=>console.log(data.cast)
    )
  }

  button2(){
    this.dataService.getApiData().subscribe((data)=>{
      console.log(data);

    })

  }
}
