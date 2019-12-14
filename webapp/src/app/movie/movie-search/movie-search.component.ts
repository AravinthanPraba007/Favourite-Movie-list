import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from 'src/app/service/movies.service';
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movieSearch: Movie[];
  searchKey: string;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchMovie() {
    this.movieService.getAllMovies().subscribe(movie => {
      this.movieSearch = movie;
      this.movieSearch = this.movieSearch.filter(movieFilter => movieFilter.title.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1);
    });
  }
}
