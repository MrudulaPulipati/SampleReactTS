import { getTheme, IStackTokens, ITheme, mergeStyleSets, Stack } from "@fluentui/react";
import { Component } from "react";
import AllQuestionsList from "./AllQuestionsList";

const theme: ITheme = getTheme();
const { palette, fonts } = theme;

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
    }
})

const stackTokens: IStackTokens = { childrenGap: 20, padding: `0px 10px 0px 0px` };


export default class QuestionsInfo extends Component {
    render() {
        return (
            <div className={classNames.qustn_header}>
                <Stack key="allQstns" horizontal tokens={stackTokens} horizontalAlign="space-between">
                    <div className={classNames.qustn}> All Questions</div>
                    <div>
                        Test
                    </div>

                </Stack>
                <div>
                    <AllQuestionsList></AllQuestionsList>
                </div>
            </div>
        )
    }
}