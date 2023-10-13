import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataMock } from 'src/app/data/dataMock';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() imgCover: string = '';
  @Input() contentTitle: string = '';
  @Input() contentDescription: string = '';
  private id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataMock.find((data) => data.id === id);

    if (!result) {
      console.log('There is no data!');
      return;
    }

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.imgCover = result.imgUrl;
  }
}
