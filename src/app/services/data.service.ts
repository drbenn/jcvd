import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MovieComponentData } from '../models/jcvd.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Movies to pull from API
  movies: string[] = ["Cyborg","Hard Target"]
  castData:any[];
  movieData:MovieComponentData;
  allMovies:MovieComponentData[] = [];
  movieArray:string[]= [];


  constructor(private http: HttpClient) { }

  url = 'https://api.themoviedb.org/3/person/15111/movie_credits?api_key=404ce5b33ac049a63b4394f733381c9f&language=en-US';
  // private iss$ = this.http.get<any>(this.url);

  test() {
    console.log('test click');
    let response = this.http.get(this.url)
    console.log(response);

    return response;

  }


  getApiData():Observable<any[]>{
    let allData:any;


    return this.http.get<any[]>('https://api.themoviedb.org/3/person/15111/movie_credits?api_key=404ce5b33ac049a63b4394f733381c9f&language=en-US')
    .pipe(
      map((apiData:any[])=> {
        allData = apiData;
        this.castData = allData.cast

        // this.castData.forEach((movie)=>
        //   this.movieData =
        //       {
        //         title: movie.title,
        //         id: movie.id,
        //         character:movie.character,
        //         overview: movie.overview,
        //         releaseDate:movie.releaseDate,
        //       },

        // this.allMovies.push(this.movieData)

        // )


        console.log(this.castData);
        this.getRelevantApiInfo(this.castData);


        return allData
      })
    )
  }


  getRelevantApiInfo(dataFromApi: any[]){
    console.log(dataFromApi);
    dataFromApi.forEach((movie) => {
          let data =
              {
                title: movie.title,
                character:movie.character,
                overview: movie.overview,
                releaseDate:movie.release_date,
              }

        this.allMovies.push(data)

    dataFromApi.forEach((movie)=> {
      this.movieArray.push(movie.title);
    })






    });


    console.log(this.movieArray);



    console.log(this.allMovies);

  }
}



