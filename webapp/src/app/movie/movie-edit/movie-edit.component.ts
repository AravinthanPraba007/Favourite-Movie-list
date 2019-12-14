import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../../service/movies.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  editForm: FormGroup;
  movie: Movie = {
    id: 0,
    title: '',
    imageUrl: '',
    boxOffice: 0,
    genre: '',
    dateOfLaunch: new Date('2017-12-22'),
    active: false,
    hasTeaser: false
  };
  newMovieId: number;
  movieEdited: boolean = false;
  addMovie: boolean = false;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.movieInEdit = true;
    const movieId = +(this.route.snapshot.paramMap.get('id'));
    this.newMovieId = movieId;

    if (movieId != 0) {
      this.movieService.getMovie(movieId).subscribe(movie => {
        this.movie = movie
        this.editForm = new FormGroup({
          'id': new FormControl(this.movie.id),
          'title': new FormControl(this.movie.title, [Validators.required, Validators.maxLength(100)]),
          'imageUrl': new FormControl(this.movie.imageUrl, Validators.required),
          'boxOffice': new FormControl(this.movie.boxOffice, [Validators.required, Validators.pattern('^[0-9]+$')]),
          'genre': new FormControl(this.movie.genre, Validators.required),
          'dateOfLaunch': new FormControl(this.movie.dateOfLaunch, Validators.required),
          'active': new FormControl(this.movie.active, Validators.required),
          'hasTeaser': new FormControl(this.movie.hasTeaser)
        });
      });
    } else {
      this.editForm = new FormGroup({
        'id': new FormControl(this.movie.id),
        'title': new FormControl('', [Validators.required, Validators.maxLength(200)]),
        'imageUrl': new FormControl('', Validators.required),
        'boxOffice': new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
        'genre': new FormControl('', Validators.required),
        'dateOfLaunch': new FormControl(this.movie.dateOfLaunch, Validators.required),
        'active': new FormControl('', Validators.required),
        'hasTeaser': new FormControl('')
      });
    }
  }

  updateMovieItem(): void {
    if (this.newMovieId != 0) {
      this.movie.title = this.editForm.value.title;
      this.movie.boxOffice = this.editForm.value.boxOffice;
      this.movie.imageUrl = this.editForm.value.imageUrl;
      this.movie.genre = this.editForm.value.genre;
      this.movie.dateOfLaunch = this.editForm.value.dateOfLaunch;
      this.movie.active = this.editForm.value.active;
      this.movie.hasTeaser = this.editForm.value.hasTeaser;
      this.movieService.ModifyMovies(this.movie).subscribe();
      this.movieEdited = true;
    }
    else {
      this.movie.id = this.newMovieId;
      this.movie.title = this.editForm.value.title;
      this.movie.boxOffice = this.editForm.value.boxOffice;
      this.movie.imageUrl = this.editForm.value.imageUrl;
      this.movie.genre = this.editForm.value.genre;
      this.movie.dateOfLaunch = this.editForm.value.dateOfLaunch;
      this.movie.active = this.editForm.value.active;
      this.movie.hasTeaser = this.editForm.value.hasTeaser;
      this.movieService.addMovies(this.movie).subscribe();
      this.addMovie = true;
    }
  }

  get id() { return this.editForm.get('id'); }
  get title() { return this.editForm.get('title'); }
  get genre() { return this.editForm.get('genre'); }
  get active() { return this.editForm.get('active'); }
  get imageUrl() { return this.editForm.get('imageUrl'); }
}
