import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { JokeModel } from '../../models/joke.model';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./joke.component.css'],
})
export class JokeComponent {
  joke$: Observable<JokeModel> = this._jokeService.getJoke();

  constructor(private _jokeService: JokeService) {}

  getNewJoke() {
    this.joke$ = this._jokeService.getJoke();
  }

  showPunchLine() {
    const punchline = document.querySelector('.joke_punchline') as HTMLElement;
    if (punchline) punchline.style.filter = 'blur(0)';
  }
}
