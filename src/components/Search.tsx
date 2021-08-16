import { SearchBox, ISearchBoxStyles } from '@fluentui/react/lib/SearchBox';
import { Component } from 'react';
import './Search.css';
// import Tile from './Tile';
import { getTheme, IStackTokens, Stack } from '@fluentui/react';
// import NavigationTabBar from './NavigationTabBar';

const theme = getTheme();
const stackTokens: IStackTokens = { childrenGap: 20, padding: `0px 10px 0px 0px` };
const verticalGapStackTokens: IStackTokens = { childrenGap: 10, padding: 10, };
const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 500 } };

export default class Search extends Component {


    render() {
        return (
            <div>
                <div className="background_display">
                    <div className="container">
                        <div className="welcome">WELCOME TO MICROSOFT Q&A</div>
                        <div className="question">What do you need help with today?</div>
                        <div className="det">Find it on Q&A - the home for technical questions and answers at Microsoft. New to Q7A? See our Get started article below</div>
                        <div className="inputContainer">
                            {/* <input className="input" type="text" name="search" placeholder=""></input> */}
                            <SearchBox
                                styles={searchBoxStyles}
                                placeholder="Find posts, tags and users"
                                onEscape={ev => {
                                    console.log('Custom onEscape Called');
                                }}
                                onClear={ev => {
                                    console.log('Custom onClear Called');
                                }}
                                onChange={(_, newValue) => console.log('SearchBox onChange fired: ' + newValue)}
                                onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
                            />
                        </div>
                    </div>
                </div>

                <div>
                </div>
            </div>
        )
    }


}