import { NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent, NgDocThemeService } from "@ng-doc/app";
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import {  NgIf } from "@angular/common";
import {
	NgDocButtonIconComponent,
	NgDocIconComponent,
	NgDocSmoothResizeComponent,
	NgDocTooltipDirective,
  preventInitialChildAnimations,
} from '@ng-doc/ui-kit';
import { filter } from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent, NgIf, 
    NgDocButtonIconComponent, NgDocIconComponent, NgDocSmoothResizeComponent, NgDocTooltipDirective],
  animations: [
    preventInitialChildAnimations,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'docs-site';
  currentTheme:any;
  logo:string = 'assets/img/Logotype-DarkMode.svg';
  leftContent:any;
  currentYear = new Date().getFullYear();

  constructor(protected readonly themeService: NgDocThemeService, private _router:Router) {
    this.themeService.themeChanges().subscribe((theme) => {
      this.setCurrentTheme();
    });
    this._router.events
    .pipe(filter((val) => val instanceof NavigationEnd))
    .subscribe(() => {
      if (this._router.url === '/') {
        this._router.navigate(['/getting-started']);
      }
    });
  }

  ngOnInit(): void {
    this.setCurrentTheme();
  }

  setCurrentTheme() {
    this.currentTheme = this.themeService.currentTheme;
    this.setLogo();
  }

  setLogo() {
    this.logo = this.currentTheme?.id === 'rp-dark' ? "assets/img/Logotype-DarkMode.svg" : "assets/img/Logotype-LightMode.svg";
  }

  setTheme(): void {
    this.themeService.set(this.currentTheme?.id === 'rp-dark' ? 'rp-light' : 'rp-dark');
  }

  isDarkTheme(): boolean {
    return this.currentTheme?.id === 'rp-dark';
  }
}
