import { Injectable, Output, EventEmitter } from '@angular/core'

export interface ICharacterModel {
	name: string;
	classId?: string;
  raceId?: string;
  subraceId?: string;
  height?: number;
  weight?: number;
  age?: number;
  hpMax?: number;
  languages: string[];
  armor: string[];
  weapons: string[];
  tools: string[];
  skills: string[];
}

@Injectable()
export class CharacterService {
  currentCharacter: ICharacterModel;
  characters: ICharacterModel[];
	
  constructor() {
    this.currentCharacter = this.create();
  }

  create(): ICharacterModel {
    return {
      name: '',
      languages: [],
      armor: [],
      weapons: [],
      tools: [],
      skills: []
    }
  }
}
