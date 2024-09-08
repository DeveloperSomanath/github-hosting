import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: '.Net Developer',
      company: 'Sdaemon Infotech Pvt Ltd',
      duration: 'Jan 2024 - Now',
      description: [
        'Developing the front end using .NET Core MAUI (Multi-platform App UI) with Blazor, and the back end using .NET Core Web API.',
      ],
    },
    {
      role: '.Net Developer Intern',
      company: 'DutyPar AI Technology',
      duration: 'Jul 2023 - Dec 2023',
      description: [
        'Developed a strong foundation in C# and .NET MVC through comprehensive training.',
      ],
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
