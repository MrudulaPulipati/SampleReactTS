import { ISearchBoxStyles, IStackTokens, mergeStyleSets, SearchBox, Stack } from "@fluentui/react";
import { Component } from "react";
import PopularTags from "./PopularTags";
import QuestionsInfo from "./QuestionsInfo";

const classNames = mergeStyleSets({
    bgColor: {
        // display: 'flex',
        // height: '100px',
        // width: '100%',
        background: 'linear-gradient(174.2deg,#243a5e,#1d2f4c 66.72%,#162339)'
    },
    qstn_search_container: {
        margin: '0 5vw',
        width: 'calc(100%-10vw)',
        maxWidth: 'calc(100%-10vw)'
    },
    Qustn_search: {
        display: 'inline-flex',
        alignItems: 'center',
        minHeight: '56px',
        height: '56px',
        clear: 'both'
    },
    qustn_info_wdth: {
        maxWidth: 'calc(100% - 10vw)',
        width: 'calc(100% - 10vw)',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    qstns_container: {
        width: '100%'
        // margin: '0 5vw',
        // width: 'calc(100%-360px)',
        // maxWidth: 'calc(100%-360px)'
    },
    side_cntnr: {
        width: '300px',
    }
});
const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 800 } };
const stackTokens: IStackTokens = { childrenGap: 20, padding: `0px 10px 0px 0px` };


export default class QuestionsTab extends Component {
    render() {
        return (
            <div>
                <div className={classNames.bgColor}>
                    <div className={classNames.qstn_search_container}>
                        <div className={classNames.Qustn_search}>
                            <SearchBox styles={searchBoxStyles} placeholder="Find posts, tags and users"
                                onEscape={ev => { console.log('Custom onEscape Called'); }}
                                onClear={ev => { console.log('Custom onClear Called'); }}
                                onChange={(_, newValue) => console.log('SearchBox onChange fired: ' + newValue)}
                                onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
                            />
                        </div>
                    </div>
                </div>
                <div className={classNames.qustn_info_wdth}>
                    <div>
                        <Stack key="qs_cntnr" horizontal tokens={stackTokens} horizontalAlign="space-between">
                            <div className={classNames.qstns_container}>
                                <QuestionsInfo></QuestionsInfo>
                            </div>
                            <div className={classNames.side_cntnr}>
                                <PopularTags></PopularTags>
                            </div>
                        </Stack>
                    </div>
                </div>
            </div>
        )
    }
}