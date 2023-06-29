
import { Character } from '../interfaces/character.interface';

import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor( private dbzService : DbzService) {}

  public get characters() : Character[] {
    return [...this.dbzService.characters];
  }

  public onDeleteCharacterById( id: string) : void {
    this.dbzService.deleteCharacterById(id);
  }

  public addCharacter(newCharacter : Character) : void {
    this.dbzService.addCharacter(newCharacter);
  }
}
