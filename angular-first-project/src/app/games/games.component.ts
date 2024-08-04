import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  //Se utiliza Input para pasar propiedades de padre a hijo
  @Input() username="";

  //Sirve para pasar info de hijo a padre
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: "Unchearted"
    },
    {
      id: 2,
      name: "God of War"
    },
    {
      id: 3,
      name: "Grand Theft Auto V"
    }
  ]
}
