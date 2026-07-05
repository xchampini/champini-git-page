import { Component } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
