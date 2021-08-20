import { ActivityItem, IActivityItemProps, IImageProps, Image, ImageFit, IStackTokens, Link, mergeStyleSets, Stack } from '@fluentui/react';
import * as React from 'react';

const classNames = mergeStyleSets({
    activeItemStyle: {
        marginTop: '20px',
        boxShadow: '0 1.6px 3.6px 0 #00000021, 0 0.3px 0.9px 0 #0000001c',
        padding: '1rem',
        border: '1px solid #ffffff00',
        width: '25%',
        selectors: {
            ':hover': {
                boxShadow: '0 6.4px 14.4px 0 #00000021 ,0 1.2px 3.6px 0 #0000001c !important',
                transition: 'all .3s cubic-bezier(.8,0,.2,1)'
            }
        }
    },
    nameText: {
        fontSize: '12px'
    },
    mrg_top_10: {
        marginTop: '10px'
    },
    linkText: {
        fontWeight: '600',
        fontSize: '16px',
        textColor: '#005a9e',
        ':global(a::before)': {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1,
            content: "''",
        }
    },
    stk_wdth: {
        maxWidth: 'calc(100% - 10vw)',
        width: 'calc(100% - 10vw)',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
    }
});
const stackTokens: IStackTokens = { childrenGap: 20, padding: `0px 10px 0px 0px` };
const imageProps: IImageProps = {
    maximizeFrame: true,
    imageFit: ImageFit.centerCover,
    width: 60,
    height: 60,
    // Show a border around the image (just for demonstration purposes)
    // styles: (props) => ({ root: { border: '1px solid ' + props.theme.palette.neutralSecondary } }),
};

export default class ActivityItemDisplay extends React.Component {
    /* eslint-disable react/jsx-no-bind */
    activityItemExamples: (IActivityItemProps & { key: string | number })[] = [
        {
            key: 1,
            activityDescription: [
                <Stack key="overview" horizontal tokens={stackTokens} horizontalAlign="space-around">
                    <div>
                        <Image {...imageProps}
                            src={require("../images/overview.png").default} alt='whatsNewImg'
                        />
                    </div>
                    <div>
                        <div key={1} className={classNames.nameText}>
                            OVERVIEW
                        </div>
                        <div className={classNames.mrg_top_10}>
                            <Link key={2}
                                className={classNames.linkText}
                                href='https://docs.microsoft.com/en-us/answers/support/'
                            >Get started with Q&A</Link>
                        </div>
                    </div>
                </Stack>
            ],
        },
        {
            key: 2,
            activityDescription: [
                <Stack key="whatsNew" horizontal tokens={stackTokens} horizontalAlign="space-around">
                    <div>
                        <Image {...imageProps}
                            src={require("../images/new.png").default} alt='whatsNewImg'
                        />
                    </div>
                    <div>
                        <div key={1} className={classNames.nameText}>
                            WHAT'S NEW
                        </div>
                        <div className={classNames.mrg_top_10}>
                            <Link key={2}
                                className={classNames.linkText}
                                href='https://docs.microsoft.com/en-us/answers/support/qna-top-features'
                            >Top Microsoft Q&A features</Link>
                        </div>
                    </div>
                </Stack>
            ],
        },
        {
            key: 3,
            activityDescription: [
                <Stack key="howToGuide" horizontal tokens={stackTokens} horizontalAlign="space-around">
                    <div>
                        <Image {...imageProps}
                            src={require("../images/howto.png").default} alt='whatsNewImg'
                        />
                    </div>
                    <div>
                        <div key={1} className={classNames.nameText}>
                            HOW-TO GUIDE
                        </div>
                        <div className={classNames.mrg_top_10}>
                            <Link key={2}
                                className={classNames.linkText}
                                href='https://docs.microsoft.com/en-us/answers/support/quality-question'
                            >Guidelines for writing a quality question</Link>
                        </div>
                    </div>
                </Stack>
            ],
        },
        {
            key: 4,
            activityDescription: [
                <Stack key="howToGuide1" horizontal tokens={stackTokens} horizontalAlign="space-around">
                    <div>
                        <Image {...imageProps}
                            src={require("../images/howto.png").default} alt='whatsNewImg'
                        />
                    </div>
                    <div>
                        <div key={1} className={classNames.nameText}>
                            HOW-TO GUIDE
                        </div>
                        <div className={classNames.mrg_top_10}>
                            <Link key={2}
                                className={classNames.linkText}
                                href='https://docs.microsoft.com/en-us/answers/support/quality-answer'
                            >Write a quality answer</Link>
                        </div>
                    </div>
                </Stack>
            ],
        },
    ];

    render() {
        return (
            <div className={classNames.stk_wdth}>
                <Stack horizontal tokens={stackTokens} horizontalAlign="space-around">
                    {this.activityItemExamples.map((item: { key: string | number }, index: number) => (
                        <ActivityItem {...item} key={item.key + 'index' + index} className={classNames.activeItemStyle} />
                    ))}
                </Stack>
            </div>
        );
    }
};
