import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { RouteList as ExamModule } from '@module/exam';
import { RouteList as QuizModule } from '@module/quiz';


interface IMenuItem {
  MenuTitle: string;
  SubmenuList: ISubmenuItem[];
}

export interface ISubmenuItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
  public menuList: IMenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this._addMenus();
  }

  private _addMenus() {

    this.menuList.push({
        MenuTitle: 'Teacher',
        SubmenuList: this.getMenu(QuizModule(), 'teacher')
    });

    this.menuList.push({
        MenuTitle: 'Student',
        SubmenuList: this.getMenu(ExamModule(), 'student')
    });
}

private getMenu(route: Route[], prefix?: string) {
    prefix = !prefix ? '' : `/${prefix}`;
    return route.filter(x => x.data && x.data.isMenu)
        .map(x => {
            const item = {} as ISubmenuItem;
            if (!x.data) { return item; }
            item.title = x.data.title;
            item.link = `${prefix}/${x.path}`;
            return item;
        });
}

}
