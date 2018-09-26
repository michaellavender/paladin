import { Injectable, Output, EventEmitter } from '@angular/core'

export interface ICharacterModel {
	name?: string;
	charClass?: string;
	race?: string;
}

@Injectable()
export class CharacterService {
	ICharacterModel currentCharacter;
	
	constructor() {
		this.currentCharacter = {
			
		}
	}
}
