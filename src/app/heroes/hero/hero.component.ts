import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = (this.name == 'Spiderman') ? 'Ironman' : 'Spiderman'
  }
  changeAge(): void {
    this.age = (this.age == 20) ? 45 : 20;
  }
  resetForm():void {
    this.name='ironman';
    this.age=45;
  }
}
