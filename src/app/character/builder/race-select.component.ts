import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RulesService } from '@rules/rules.service'
import { CharacterService } from '@character/character.service'

@Component({
  templateUrl: './race-select.component.html'
})
export class RaceSelectComponent {
  constructor(
    private readonly router: Router,
    private readonly chracterSvc: CharacterService,
    private readonly rules: RulesService) {

  }

  ngOnInit() {
  }
}
