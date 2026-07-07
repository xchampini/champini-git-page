import { Component } from '@angular/core';
import { Card, CardIcon } from '../card/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Card, CardIcon, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
