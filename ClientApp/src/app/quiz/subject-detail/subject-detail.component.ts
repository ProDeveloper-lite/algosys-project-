import { Component, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { ListType, SubjectDetailApiService } from '@module/serverside'
import { IMatListConfig, IMatListItem, MatListEvent, ToastrService, DialogService } from '@module/shared';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss']
})
export class SubjectDetailComponent implements OnInit, OnDestroy {

  @Input() public listListner = new EventEmitter<MatListEvent<IMatListItem | undefined>>();

  public state = {
    subjectList: [] as ListType.ListItem[],
    newSubjectControl!: {} as FormControl,
    selectedSubject: undefined as (ListType.ListItem | undefined),
    showForm: false,
    listConfig: {
      title: 'Subject List',
      events: new EventEmitter<MatListEvent<IMatListItem>>()
    } as IMatListConfig<IMatListItem>,
  };

  private _subscriptions: Subscription[] = [];

  constructor(
    private _subjectApi: SubjectDetailApiService,
    private _toastrService: ToastrService,
    private _dialogService: DialogService) { }

  public ngOnInit(): void {
    this._subscriptions.push(this.state.listConfig.events
      .pipe(tap((data: MatListEvent<ListType.ListItem>) => this._selected(data)))
      .subscribe());

    this._subscriptions.push(this.listListner
      .pipe(tap((data: MatListEvent<IMatListItem | undefined>) => this._onListItemChanged(data)))
      .subscribe());

    this._getSubjectList();
    this.state.newSubjectControl = new FormControl('', [Validators.required]);
  }

  public addSubject() {
    this.state.newSubjectControl.reset();
    this.state.showForm = true;
  }

  public saveSubject(subject: string) {
    this._subjectApi.create({ name: subject }).subscribe((data) => {
      this.listListner.emit({ payload: data, action: 'add' } as MatListEvent<IMatListItem>);
    });
  }

  public showDeleteSubjectDialog() {
    this._dialogService.confirmDelete(() => this._deleteSubject());
  }

  public cancel() {
    this.state.showForm = false;
  }

  private _selected(data: MatListEvent<ListType.ListItem>) {
    this.state.selectedSubject = data.payload;
  }

  private _deleteSubject(): void {
    if (!this.state.selectedSubject) { return; }
    this._subjectApi
      .delete(this.state.selectedSubject.value)
      .pipe(tap(() => {
        this.state.selectedSubject = undefined;
        this.listListner.emit({ action: 'delete', payload: undefined });
        this._toastrService.success('Subject deleted');
      }))
      .subscribe();
  }

  private _getSubjectList() {
    this._subjectApi
      .getAllForList()
      .subscribe(data => this.state.subjectList = data);
  }

  private _onListItemChanged(event: MatListEvent<IMatListItem | undefined>): void {
    switch (event.action) {
      case 'add':
        if (!event.payload) { return; }
        this.state.showForm = false;
        this.state.listConfig.events.emit({ action: 'add', payload: event.payload });
        break;
      case 'delete':
        this._getSubjectList();
        break;
      default:
        this._toastrService.codeError(`Unhandled action : ${event.action}`);
    }
  }

  public ngOnDestroy() {
    this._subscriptions.forEach(x => x.unsubscribe());
  }
}
