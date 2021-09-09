import { CheckboxVisibility, DetailsList, IColumn, mergeStyleSets, ScrollablePane, SelectionMode } from "@fluentui/react";
import { Component } from "react";
import { CasesStatusCodeEnum } from "../../data/CasesStatusCodeEnum";
import { fetchWrapper } from "../../Wrapper/FetchWrapper";

export interface ICasesState {
    columns: IColumn[];
    items: any[];
    selectionDetails?: string;
    isModalSelection?: boolean;
    isCompactMode?: boolean;
    announcedMessage?: string;
    allCases: any[]
}
const statusCodeEnum = CasesStatusCodeEnum;
const classNames = mergeStyleSets({
    // ':global(.ms-DetailsRow-check.ms-Check-checkHost)': {
    //     height: '100%'
    // },
    posRelative: {
        position: 'relative',
        height: '100vh'
    },
    scrollPanelStyle: {
        height: '300px'
    },
    detailsListStyle: {
        // overflowY: 'hidden',
        // height: '300px',
        ':global(.ms-List-page)': {
            width: '100%',
            margin: '0'
        },
        ':global(.ms-List-cell)': {
            width: '100%',
            padding: '0px',
        },
        ':global(.ms-DetailsList-contentWrapper .ms-List-surface .ms-List-page)': {
            // height: 'auto'
        }
    }
})
const width = (1100 / 4);
export default class ViewCase extends Component<{}, ICasesState> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: [],
            columns: this.columns,
            announcedMessage: undefined,
            allCases: []
        };
    }

    columns: IColumn[] = [
        {
            key: 'column1',
            name: 'Case Number',
            fieldName: 'incidentid',
            minWidth: width,
            maxWidth: width,
            isRowHeader: true,
            isResizable: true,
            isSorted: true,
            isSortedDescending: false,
            sortAscendingAriaLabel: 'Sorted A to Z',
            sortDescendingAriaLabel: 'Sorted Z to A',
            onColumnClick: this._onColumnClick.bind(this),
            data: 'string',
            isPadded: true,

        },
        {
            key: 'column2',
            name: 'Case Title',
            fieldName: 'caseTitle',
            minWidth: width,
            maxWidth: width,
            isResizable: true,
            onColumnClick: this._onColumnClick.bind(this),
            data: 'number',
            onRender: (item: any) => {
                return <span>{item.title}</span>;
            },
            isPadded: true,
        },
        {
            key: 'column3',
            name: 'Status',
            fieldName: 'status',
            minWidth: width,
            maxWidth: width,
            isResizable: true,
            data: 'string',
            onColumnClick: this._onColumnClick.bind(this),
            onRender: (item: any) => {
                return <span>{statusCodeEnum[item.statuscode]}</span>;
            },
            isPadded: true,
        },
        {
            key: 'column4',
            name: 'Created On(UTC)',
            fieldName: 'createdon',
            minWidth: width,
            maxWidth: width,
            isResizable: true,
            data: 'string',
            onColumnClick: this._onColumnClick.bind(this),
            onRender: (item: any) => {
                return <span>{item.createdon}</span>;
            },
        },
    ];
    componentDidMount() {
        this.getAllCases();
    }

    getAllCases(): void {
        fetchWrapper.get('https://devrelapi.azurewebsites.net/api/devrel/get')
            .then(response => {
                this.setState({ allCases: response.value });
                console.log(response.value);
            })
            .catch(error => console.error('There was an error!', error));
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*',
        // }

        // const request = new Request('/devrel/get', { headers });
        // fetch(request)
        //     .then(response => response.json())
        //     .then(response => {
        //         this.setState({ allCases: response.value });
        //         console.log(response.value);
        //     });
    }
    _getKey(item: any, index?: number): string {
        return item.key;
    }
    _onItemInvoked(item: any): void {
        alert(`Item invoked: ${item.title}`);
    }
    _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
        const key = columnKey as keyof T;
        return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
    }


    private _onColumnClick(ev: React.MouseEvent<HTMLElement>, column: IColumn): void {
        const { columns, items } = this.state;
        const newColumns: IColumn[] = columns.slice();
        const currColumn: IColumn = newColumns.filter(currCol => column.key === currCol.key)[0];
        newColumns.forEach((newCol: IColumn) => {
            if (newCol === currColumn) {
                currColumn.isSortedDescending = !currColumn.isSortedDescending;
                currColumn.isSorted = true;
                this.setState({
                    announcedMessage: `${currColumn.name} is sorted ${currColumn.isSortedDescending ? 'descending' : 'ascending'
                        }`,
                });
            } else {
                newCol.isSorted = false;
                newCol.isSortedDescending = true;
            }
        });
        const newItems = this._copyAndSort(items, currColumn.fieldName!, currColumn.isSortedDescending);
        this.setState({
            columns: newColumns,
            items: newItems,
        });
    };

    render() {
        return (
            <div className={classNames.posRelative}>
                <ScrollablePane className={classNames.scrollPanelStyle}>
                    <DetailsList className={classNames.detailsListStyle}
                        items={this.state.allCases}
                        compact={false}
                        columns={this.columns}
                        getKey={this._getKey}
                        setKey="none"
                        selectionMode={SelectionMode.none}
                        isHeaderVisible={true}
                        onItemInvoked={this._onItemInvoked}
                        checkboxVisibility={CheckboxVisibility.hidden}
                    />
                </ScrollablePane>
            </div>
        )
    }
}