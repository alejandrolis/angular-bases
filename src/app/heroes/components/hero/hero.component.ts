import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman'
  public age: number = 45

  public get capitalizedName():string {
    return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  public changeHeroName(name:string):void{
    this.name = name;
  }

  public changeHeroAge(age:number):void{
    this.age = age;
  }

  public resetForm():void{
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // });
  }
}
