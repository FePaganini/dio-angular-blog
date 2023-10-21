import { Component, OnInit } from '@angular/core';
import { dataMock } from 'src/app/data/dataMock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bigCardData = dataMock[0];
  smallCardsData = dataMock.slice(1);
  constructor() {}

  ngOnInit(): void {}
}
