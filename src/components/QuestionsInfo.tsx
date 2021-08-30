import { Icon, IStackTokens, Link, mergeStyleSets, Stack } from "@fluentui/react";
import { Component } from "react";
import { iconDisplay } from "../data/AllQuestionsData";
import AllQuestionsList from "./AllQuestionsList";

// const theme: ITheme = getTheme();
// const { palette, fonts } = theme;

const classNames = mergeStyleSets({
    qustn_header: {
        borderBottom: 'solid 1px #ccc',
        width: '100%',
        marginBottom: '15px',
        padding: '5px 0',
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    qustn: {
        fontSize: '22px',
        color: '#2f4151',
        lineHeight: '38px'
    },
    iconClass: {
        position: 'relative',
        margin: 0,
        borderRadius: 0,
        border: 'solid 1px #dddddd',
        padding: '0px 11px'
    },
    iconActive: {
        backgroundColor: '#2f4151',
        border: '1px solid #2f4151',
        color: '#fff'
    },
    iconLi: {
        lineHeight: '30px',
        listStyle: 'none',
        float: 'left'
    }
})

const stackTokens: IStackTokens = { childrenGap: 20, padding: `0px 10px 0px 0px` };
const items = iconDisplay;

export default class QuestionsInfo extends Component {
    changeIconStyle(item: any) {
        console.log(item.target.value);
        items.map((t) => t.isActive = false)
        // item.isActive = true;
    }
    render() {
        return (
            <div className={classNames.qustn_header}>
                <Stack key="allQstns" horizontal tokens={stackTokens} horizontalAlign="space-between">
                    <div className={classNames.qustn}> All Questions</div>
                    <div>
                        {items.map((itm, i) => (
                            <li key={itm.id + 'Qstn_lst'} onClick={() => { itm.isActive = true; }}
                                className={`${classNames.iconLi} ${classNames.iconClass} ${itm.isActive ? classNames.iconActive : ''}`}>
                                <Link key={itm.id + 'Qstn_link'} href={itm.url}
                                    className={`${itm.isActive ? classNames.iconActive : ''}`}>
                                    <Icon iconName={itm.iconName}></Icon>
                                </Link>
                            </li>
                        ))}
                        {/* {items.map((itm, i) => (
                            <Link key={itm.id + 'Qstn_link'} onClick={() => { itm.isActive = true; }}
                                className={`${classNames.iconClass} ${itm.isActive ? classNames.iconActive : ''}`} href={itm.url}>{itm.id}
                                <Icon iconName={itm.iconName} className={``}></Icon>
                            </Link>
                        ))} */}


                    </div>

                </Stack>
                <div>
                    <AllQuestionsList></AllQuestionsList>
                </div>
            </div>
        )
    }
}