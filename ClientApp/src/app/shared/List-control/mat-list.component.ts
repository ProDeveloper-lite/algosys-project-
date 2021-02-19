import { Component, Input, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';

type ListAction = 'change' | 'add' | 'delete';

export interface MatListEvent<T> {
    action: ListAction;
    payload: T;
}

export interface IMatListItem {
    text: string;
    value: number;
    [key: string]: any;
}

export interface IMatListConfig<T> {
    textProperty?: string;
    valueProperty?: string;
    title: string;
    events: EventEmitter<MatListEvent<T>>;
    selectFirst?: boolean;
}

interface MatListConfigInternal extends IMatListConfig<IMatListItem> {
    textProperty: string;
    valueProperty: string;
    selectFirst: boolean;
}

@Component({
    selector: 'app-mat-list',
    template: `
<mat-list>
    <h2 class="title">{{config.title}}</h2>
    <mat-divider></mat-divider>
    <ng-container *ngFor="let item of list">
        <mat-list-item [ngClass]="{'selected': isSelected(item)}" (click)="clicked(item)">
            {{ item[config.textProperty] }}
            <ng-container *ngIf="item['icon']">
                <button mat-icon-button>
                    <mat-icon>{{item['icon']}}</mat-icon>
                </button>
            </ng-container>
        </mat-list-item>
        <mat-divider></mat-divider>
    </ng-container>
</mat-list>
    `,
    styleUrls: ['./mat-list.component.scss']
})
export class MatListComponent implements OnInit, OnChanges {

    @Input() public list: IMatListItem[] = [];
    @Input() public config!: MatListConfigInternal;

    private selectedItem: IMatListItem | undefined = undefined;
    private DefaultConfig: MatListConfigInternal = {
        textProperty: 'text',
        valueProperty: 'value',
        title: 'Default Title',
        events: new EventEmitter<MatListEvent<any>>(),
        selectFirst: false
    };
    public ngOnInit(): void {
        this.config = Object.assign(this.DefaultConfig, this.config || {});
        this.config.events.subscribe((event: MatListEvent<any>) => { this._onSelectedItemChanged2(event); });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.list) {
            this.selectedItem = undefined;
            if (this.config.selectFirst && this.list.length > 0) {
                this.clicked(this.list[0]);
            }
        }
    }

    public clicked(item: IMatListItem): void {
        if (this.selectedItem && this._areItemsEqual(item, this.selectedItem)) {
            return;
        }
        this.selectedItem = item;
        this.config.events.emit({ action: 'change', payload: item });
    }

    public isSelected(item: IMatListItem): boolean {
        if (!this.selectedItem) {
            return false;
        }
        return this._areItemsEqual(item, this.selectedItem);
    }

    private _onSelectedItemChanged2(event: MatListEvent<any>): void {
        switch (event.action) {
            case 'add':
                this.list.push(event.payload);
                setTimeout(() => this.clicked(event.payload));
                break;
            case 'change':
                setTimeout(() => this.clicked(event.payload));
        }
    }

    private _areItemsEqual(item1: IMatListItem, item2: IMatListItem): boolean {
        return item1[this.config.valueProperty] === item2[this.config.valueProperty];
    }
}
