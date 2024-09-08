import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Somanath Barge'],
    ['DOB', '10/04/2000'],
    ['Work Exp', '1+ Years'],
    ['Education', 'BTech(CSE)'],
    ['Interests', 'Music'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 1+ years of experience in software industry.',
    'Results-Driven .NET Developer with Professional Experience, Seeking a challenging career which gives me an opportunity to explore my capabilities',
  ];

  constructor() {}

  ngOnInit(): void {}
}
