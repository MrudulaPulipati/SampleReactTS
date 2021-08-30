import { ActivityItem, IActivityItemProps, IImageProps, Image, ImageFit, IStackTokens, Link, mergeStyleSets, Stack } from "@fluentui/react";
import { Component } from "react";
import { feedbackDataItems } from "../../data/FeedbackData";

const stackTokens: IStackTokens = { childrenGap: 20, padding: `0px 10px 0px 0px` };
const classNames = mergeStyleSets({
    stk_wdth: {
        maxWidth: 'calc(100% - 10vw)',
        width: 'calc(100% - 10vw)',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    activeItemStyle: {
        marginTop: '20px',
        boxShadow: '0 1.6px 3.6px 0 #00000021, 0 0.3px 0.9px 0 #0000001c',
        padding: '1rem',
        border: '1px solid #ffffff00',
        width: '25%',
        position: 'relative',
        selectors: {
            ':hover': {
                boxShadow: '0 6.4px 14.4px 0 #00000021 ,0 1.2px 3.6px 0 #0000001c !important',
                transition: 'all .3s cubic-bezier(.8,0,.2,1)'
            }
        }
    }
})

const imageProps: IImageProps = {
    maximizeFrame: true,
    imageFit: ImageFit.centerCover,
    width: 60,
    height: 60,
    // Show a border around the image (just for demonstration purposes)
    // styles: (props) => ({ root: { border: '1px solid ' + props.theme.palette.neutralSecondary } }),
};

export default class FeedbackOpt extends Component {
    feedbackItems = feedbackDataItems;
    activityItems: (IActivityItemProps & { key: string | number })[] = [];

    getActivityList() {

        this.feedbackItems.map(fbItem => {
            const reactNode: React.ReactNode = [
                <Stack key="overview" horizontal tokens={stackTokens} horizontalAlign="space-around">
                    <div>
                        <Image {...imageProps}
                            src={require("../../images/azure.png").default} alt='whatsNewImg'
                        />
                    </div>
                    <div>
                        <div key={1}>
                            {fbItem.title}
                        </div>
                    </div>
                    {/* <div>
                        <div key={1} className={classNames.nameText}>
                            OVERVIEW
                        </div>
                        <div className={classNames.mrg_top_10}>
                            <Link key={2}
                                className={classNames.linkText}
                                href='https://docs.microsoft.com/en-us/answers/support/'
                            >Get started with Q&A</Link>
                        </div>
                    </div> */}
                </Stack>

            ]
            const obj: (IActivityItemProps & { key: string | number }) = { key: fbItem.id, activityDescription: reactNode };
            this.activityItems.push(obj);
            console.log(this.activityItems);
        })
    }
    constructor(props: any) {
        super(props);
        this.getActivityList();
    }
    render() {
        return (

            <div className={classNames.stk_wdth}>
                Test
                {/* {(() => {
                    if (this.activityItems.length > 0) { */}
                {/* return ( */}

                {this.activityItems.length > 0 &&
                    <Stack horizontal tokens={stackTokens} horizontalAlign="space-around">
                        {this.activityItems.map((item: { key: string | number }, index: number) => (
                            <ActivityItem {...item} key={item.key + 'index' + index} className={classNames.activeItemStyle} />
                        ))}
                    </Stack>
                }
                {/* ) */}
                {/* }
                })} */}

            </div>
        )
    }
}