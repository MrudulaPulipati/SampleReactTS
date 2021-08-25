import { IStackTokens, Pivot, PivotItem, Stack } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';
import { Component } from 'react';
import './NavigationTabBar.css';
import QuestionsTab from './QuestionsTab';
import Search from './Search';

// const overflowProps: IButtonProps = { ariaLabel: 'More commands' };
const stackTokens: IStackTokens = { childrenGap: 20, padding: `0px 10px 0px 0px` };

interface INavigationBarState {
  selectedTabKey: string | undefined;
}
export default class NavigationTabBar extends Component<{}, INavigationBarState> {

  constructor(props: any) {
    super(props);
    this.state = { selectedTabKey: '0' };
  }

  handleLinkClick = (item?: PivotItem) => {
    if (item) {
      this.setState({ selectedTabKey: item.props?.itemKey });
    }
  };

  render() {
    function _alertClicked() {
      alert('Clicked');
    }
    return (
      <div>
        {/* <div>
          <CommandBar items={_items} overflowButtonProps={overflowProps} ariaLabel="Inbox actions"
            primaryGroupAriaLabel="navigation actions" farItemsGroupAriaLabel="More actions"
          />
        </div> */}
        <div>
          <Pivot aria-label="Large Link Size Pivot Example"
            onLinkClick={this.handleLinkClick}>
            <PivotItem headerText="Q&A" itemKey="0">
              <Search></Search>
            </PivotItem>
            <PivotItem headerText="Questions" itemKey="1">
              <QuestionsTab></QuestionsTab>
            </PivotItem>
            <PivotItem headerText="Tags" itemKey="2">
            </PivotItem>
            <PivotItem headerText="Users" itemKey="3"></PivotItem>
            <PivotItem headerText="Feedback" itemKey="4"></PivotItem>
            <PivotItem headerText="FAQ & Help" itemKey="5"></PivotItem>
          </Pivot>
          <Stack horizontal className="qustn_btn_display" tokens={stackTokens} verticalAlign="center">
            <DefaultButton text="Site feedback" onClick={_alertClicked} />
            <PrimaryButton text="Ask a question" onClick={_alertClicked} allowDisabledFocus />
          </Stack>
        </div>

        {/* {(this.state.selectedTabKey) === '0' ? (
            <Search></Search>
          ) : ''} */}

        {/* {(() => {
          if (this.state.selectedTabKey === '0') {
            return (
              <Search></Search>
            )
          } else if (this.state.selectedTabKey === '1') {
            return (
              <QuestionsTab></QuestionsTab>
              // <div>You are in Questions tab.</div>

            )
          } else if (this.state.selectedTabKey === '2') {
            return (
              <div>You are in Tags tab.</div>
            )
          } else if (this.state.selectedTabKey === '3') {
            return (
              <div>You are in Users tab.</div>
            )
          } else if (this.state.selectedTabKey === '4') {
            return (
              <div>You are in Feedback tab.</div>
            )
          } else if (this.state.selectedTabKey === '5') {
            return (
              <div>You are in FAQ & Help tab.</div>
            )
          }
        })()} */}
      </div>

    );
  }

};

const _items: ICommandBarItemProps[] = [
  {
    key: 'q&a',
    text: 'Q&A',
    cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    href: '',
  },
  {
    key: 'questions',
    text: 'Questions',
    href: '',
  },
  {
    key: 'tags',
    text: 'Tags',
    // iconProps: { iconName: 'Share' },
    onClick: () => console.log('Share'),
  },
  {
    key: 'users',
    text: 'Users',
    // iconProps: { iconName: 'Download' },
    onClick: () => console.log('Users'),
  }, {
    key: 'feedback',
    text: 'Feedback',
    onClick: () => console.log('Feedback'),
  }, {
    key: 'faq&help',
    text: 'FAQ & Help',
    onClick: () => console.log('FAQ & Help'),
  },
];

