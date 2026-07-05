import { Component } from '@angular/core';
import { Card } from '../card/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Card, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
