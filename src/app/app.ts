//src/app/app.component.ts
import { Component } from '@angular/core';
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [Home, About, Projects, Contact],
  standalone: true,
})
export class App {}
