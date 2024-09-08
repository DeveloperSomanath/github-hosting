import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Tailor Shop',
      technologies: '.Net Core MVC',
      description: [
        'Developed a platform where tailors can showcase their designs to all users',
        'Users can place orders by providing their outfit size specifications',
        'Used .Net Core MVC Clean Architecture',
      ],
    },
    {
      title: 'Chatting App',
      technologies: 'C#, Blazor',
      description: [
        'Developed a platform where user can create their account',
        'Users can chat with all remaining users',
        'Learned C, C++ to build an O.S.',
      ],
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
