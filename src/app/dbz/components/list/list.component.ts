import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  @Output()
  onDeleteId : EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id?: string):void {
    if(!id) return;

    this.onDeleteId.emit(id);
  }
}
