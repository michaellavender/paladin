import { Injectable, Output, EventEmitter } from '@angular/core'

export interface ICharacterModel {
	name?: string;
	charClass?: string;
	race?: string;
}

@Injectable()
export class CharacterService {
  currentCharacter: ICharacterModel;
	
	constructor() {
		this.currentCharacter = {
			
		}
	}
}
