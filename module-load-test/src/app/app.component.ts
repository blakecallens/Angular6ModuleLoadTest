import { Component, SystemJsNgModuleLoader, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private loader: SystemJsNgModuleLoader) {
  }

  async ngOnInit() {
    const factory = await this.loader.load('src/app/lazy/lazy.module#LazyModule');
  }

}
