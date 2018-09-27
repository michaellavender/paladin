import { Injectable, Output, EventEmitter } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

export interface IRule {
  id: string;
  name: string;
  description: string;
}

export interface IItemData extends IRule {
  cost: number;
}

export interface IAbility extends IRule {
}

export interface IArmor extends IItemData {
}

export interface IBackground extends IRule {
  skills: string[];
}

export interface IClass extends IRule {
}

export interface IMonster extends IRule {
}

export interface IRace extends IRule {
}

export interface ISkill extends IRule {
  ability: string;
}

export interface ISpell extends IRule {
}

export interface ITool extends IItemData {
}

export interface IWeapon extends IItemData {
}

@Injectable()
export class RulesService {
  abilities: IAbility[];
  armors: IArmor[];
  backgrounds: IBackground[];
  classes: IClass[];
  monsters: IMonster[];
  races: IRace[];
  skills: ISkill[];
  spells: ISpell[];
  tools: ITool[];
  weapons: IWeapon[];

  constructor(private httpClient: HttpClient) {
    this.abilities = [];
    this.armors = [];
    this.backgrounds = [];
    this.classes = [];
    this.monsters = [];
    this.races = [];
    this.skills = [];
    this.spells = [];
    this.tools = [];
    this.weapons = [];

    this.loadData();
  }

  loadData() {
    this.httpClient.get<IAbility[]>('/assets/data/abilities.json')
      .subscribe(data => { this.abilities = data; });

    this.httpClient.get<IArmor[]>('/assets/data/armor.json')
      .subscribe(data => { this.armors = data; });

    this.httpClient.get<IBackground[]>('/assets/data/backgrounds.json')
      .subscribe(data => { this.backgrounds = data; });

    this.httpClient.get<IClass[]>('/assets/data/classes.json')
      .subscribe(data => { this.classes = data; });

    this.httpClient.get<IMonster[]>('/assets/data/monsters.json')
      .subscribe(data => { this.monsters = data; });

    this.httpClient.get<IRace[]>('/assets/data/races.json')
      .subscribe(data => { this.races = data; });

    this.httpClient.get<ISkill[]>('/assets/data/skills.json')
      .subscribe(data => { this.skills = data; });

    this.httpClient.get<ISpell[]>('/assets/data/spells.json')
      .subscribe(data => { this.spells = data; });

    this.httpClient.get<ITool[]>('/assets/data/tools.json')
      .subscribe(data => { this.tools = data; });

    this.httpClient.get<IWeapon[]>('/assets/data/weapons.json')
      .subscribe(data => { this.weapons = data; });
  }

  ability(id): IAbility {
    return this.abilities.find(a => a.id === id);
  }

  armor(id): IArmor {
    return this.armors.find(a => a.id === id);
  }

  background(id): IBackground {
    return this.backgrounds.find(a => a.id === id);
  }

  class(id): IClass {
    return this.classes.find(c => c.id === id);
  }

  monster(id): IMonster {
    return this.monsters.find(m => m.id === id);
  }

  race(id): IRace {
    return this.races.find(r => r.id === id);
  }

  skill(id): ISkill {
    return this.skills.find(r => r.id === id);
  }

  spell(id): ISpell {
    return this.spells.find(s => s.id === id);
  }

  tool(id): ITool {
    return this.tools.find(s => s.id === id);
  }

  weapon(id): IWeapon {
    return this.weapons.find(w => w.id === id);
  }
}
