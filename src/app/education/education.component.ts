import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Dnyanshree institute of engineering and technology Satara.",
      course: 'BTech in Computer Science & Engineering',
      duration: '2020-2023',
      score: '8.46 CGPA',
    },
    {
      institute: 'Satara polytechnic satara.',
      course: 'Diploma in Computer Engineering',
      duration: '2018-2020',
      score: '82.23%',
    },
    {
      institute: 'V. G. Paranjape Vidyalaya, Rahimatpur',
      course: 'SSC',
      duration: '2016-2017',
      score: '80%',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
