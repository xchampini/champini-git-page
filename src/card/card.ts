import { Component, computed, contentChildren, Directive } from '@angular/core';

@Directive({
  selector: '[card-icon]',
})
export class CardIcon {}

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  private readonly icons = contentChildren(CardIcon, { descendants: true });
  protected readonly hasIcons = computed(() => this.icons().length > 0);
}
