import { ActivityItem, Icon, Link, mergeStyleSets } from '@fluentui/react';
import { Component } from 'react';

const classNames = mergeStyleSets({
    exampleRoot: {
        marginTop: '20px',
    },
    nameText: {
        fontWeight: 'bold',
    },
});

/* eslint-disable react/jsx-no-bind */
const activityItemExamples = [
    {
        key: 1,
        activityDescription: [
            <div>
                <Link key={1} className={classNames.nameText} onClick={() => { alert('A name was clicked.'); }}>
                    WilliePhillips-5484
                </Link>
                <span key={2}> asked </span>
                <span aria-hidden="true" className="">•</span>
                <span className="" title="Nov 27, 2020 6:41:01 AM"> <time role="presentation" dateTime="2020-11-27T06:41:01.823Z">Nov 27 2020 at 12:11 PM</time> </span>
                <span aria-hidden="true">| </span>
                <Link key={3} className={classNames.nameText} onClick={() => { alert('A name was clicked.'); }}>
                    WenyanZhang-MSFT
                </Link>
                <span> commented </span>
                <span aria-hidden="true" className="">• </span>
                <span title="Aug 24, 2021 6:40:37 AM">
                    <time role="presentation" dateTime="2021-08-24T06:40:37.863Z">49 secs ago</time> </span>
                <div>
                    <Link key={4} className={classNames.nameText}
                        onClick={() => { alert('A name was clicked.'); }}>
                        sqlite-net-pcl query without Class Model
                    </Link>
                </div>
            </div>

        ],
        activityIcon: <Icon iconName={'Message'} />,
        comments: [
            <span key={1}>Hello! I am making a comment and mentioning </span>,
            <Link
                key={2}
                className={classNames.nameText}
                onClick={() => {
                    alert('An @mentioned name was clicked.');
                }}
            >
                @Anđela Debeljak
            </Link>,
            <span key={3}> in the text of the comment.</span>,
        ],
        timeStamp: 'Just now',
    },
    {
        key: 2,
        activityDescription: [
            <div className="">
                <div className="" style={{ position: 'relative' }}>
                    <span className=""> <a href="/answers/users/1483843/sakuraime.html" rel="user"><span>sakuraime</span></a> </span>
                    <span> asked </span>
                    <span aria-hidden="true" className="">•</span>
                    <span className="" title="Nov 27, 2020 6:41:01 AM"> <time role="presentation" dateTime="2020-11-27T06:41:01.823Z">Nov 27 2020 at 12:11 PM</time> </span>
                    <span aria-hidden="true">|</span>
                    <span className=""> <a href="/answers/users/1483843/sakuraime.html" rel="user"><span>sakuraime</span></a> </span>
                    <span> commented </span>
                    <span aria-hidden="true" className="">•</span>
                    <span title="Aug 24, 2021 6:40:37 AM"> <time role="presentation" dateTime="2021-08-24T06:40:37.863Z">49 secs ago</time> </span>
                </div>
            </div>
        ],
        activityIcon: <Icon iconName={'Trash'} />,
        timeStamp: '2 hours ago',
    },
    {
        key: 3,
        activityDescription: [
            <Link
                key={1}
                className={classNames.nameText}
                onClick={() => {
                    alert('A name was clicked.');
                }}
            >
                Julian Arvidsson
            </Link>,
            <span key={2}> moved </span>,
            <Link
                key={3}
                className={classNames.nameText}
                onClick={() => {
                    alert('A document was clicked.');
                }}
            >
                PresentationTitle.pptx
            </Link>,
            <span key={4}> to </span>,
            <Link
                key={5}
                className={classNames.nameText}
                onClick={() => {
                    alert('A folder was clicked.');
                }}
            >
                Destination Folder
            </Link>,
        ],
        activityIcon: <Icon iconName={'FabricMovetoFolder'} />,
        timeStamp: 'Yesterday',
    },
];

export default class AllQuestionsList extends Component {
    render() {
        return (
            <div>
                {activityItemExamples.map((item: { key: string | number }) => (
                    <ActivityItem {...item} key={item.key} className={classNames.exampleRoot} />
                ))}
            </div>
        );
    }
};
