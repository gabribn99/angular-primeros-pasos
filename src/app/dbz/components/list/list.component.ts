import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characters?: Character[];

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();

  public deleteCharacter(id?: string): void {
    if (!id) return;
    this.onDeleteCharacterById.emit(id);
  }
}
