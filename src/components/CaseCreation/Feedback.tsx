import { ChoiceGroup, CommandBarButton, IChoiceGroupOption, IStackTokens, ITextFieldStyles, mergeStyleSets, PrimaryButton, Stack, TextField } from "@fluentui/react";
import { Component } from "react";
import { feedbackDataItems } from "../../data/FeedbackData";

interface IFeedbackChoiceState {
    selectedChoiceKey: string | undefined;
    selectedInnerIssueKey: string | undefined;
    feedbackTitle?: string;
    feedbackDescription?: string;
    isSubmitButtonDisabled?: boolean;
}

const textStyles: Partial<ITextFieldStyles> = {
    fieldGroup: [
        { width: 600 }
    ]
};
const stackTokens: IStackTokens = { childrenGap: 20 };

const classNames = mergeStyleSets({
    stk_wdth: {
        maxWidth: 'calc(100% - 10vw)',
        width: 'calc(100% - 10vw)',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    submitBtn: {

    },
    btnsPadding: {
        padding: '10px 0'
    },
    choiceGroupStyle: {
        '.global(.ms-ChoiceField-wrapper .ms-ChoiceField-field .labelWrapper)': {
            paddingBottom: '2.25rem',
            paddingRight: '1.25rem',
            paddingLeft: '1.25rem'
        }
    }
})

// const cardStyles = {
//     root: {
//         '.global(.ms-ChoiceField-wrapper .ms-ChoiceField-field .labelWrapper)': {
//             paddingBottom: '2.25rem',
//             paddingRight: '1.25rem',
//             paddingLeft: '1.25rem'
//         }
//     },
// };

export default class Feedback extends Component<{}, IFeedbackChoiceState> {
    feedbackItems = feedbackDataItems;
    choiceOptions: IChoiceGroupOption[] = [];
    constructor(props: any) {
        super(props);
        this.getChoiceItems();
        this.state = {
            selectedChoiceKey: '1', selectedInnerIssueKey: '-1',
            feedbackDescription: '', feedbackTitle: '', isSubmitButtonDisabled: true
        };
    }

    getChoiceItems(): void {
        this.feedbackItems.map((fbItem): void => {
            // imageSrc: '../../images/azure.png',
            // , styles: {root: {width: 70, height: 70}}
            // iconProps: { iconName: 'TextDocument' },

            const obj = {
                key: fbItem.id + '',
                iconProps: { iconName: `${fbItem.iconName}` },
                imageSize: { width: 55, height: 60 },
                imageAlt: fbItem.title,
                text: fbItem.title,
            };
            this.choiceOptions.push(obj);
            console.log(this.choiceOptions);
        });
    }

    onTypeSelectionChange(ev: React.SyntheticEvent<HTMLElement> | undefined, option: IChoiceGroupOption | undefined) {
        this.setState({
            selectedChoiceKey: option?.key, selectedInnerIssueKey: '-1',
            feedbackTitle: '', feedbackDescription: ''
        });
    }

    issueOptions = [
        { key: 'A', text: 'I am not being granted credit/XP for completion' },
        { key: 'B', text: 'Problems with the Sandbox' },
        { key: 'C', text: 'Problems with registration/signing-in' },
        { key: 'D', text: 'Other' },
    ];

    issueOptions1 = [
        { key: 'A', text: 'Incorrect Information/Spelling/Content Mistake' },
        { key: 'B', text: 'I have questions about the learning content' },
        { key: 'C', text: 'Issues with translation quality' },
        { key: 'D', text: 'Other' },
    ];

    submitFeedback(): void {
        const headers = {
            'Content-Type': 'application/json',
        }
        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                title: this.state.feedbackTitle,
                description: this.state.feedbackDescription,
                "ContactID": "/contacts(18e20c30-d7f5-eb11-94ef-00224822ee89)"
            })
        };
        fetch('/devrel/createcase', options)
            .then(response => response.json())
            .then(response => {
                // Do something with response.
                // on successful 
                console.log('inres')
                this.clearFeedback();
            });
    }
    clearFeedback(): void {
        this.setState({
            selectedChoiceKey: '1', selectedInnerIssueKey: '-1',
            feedbackDescription: '', feedbackTitle: '', isSubmitButtonDisabled: true
        });

    }
    onIssueSelectionChange(ev: React.SyntheticEvent<HTMLElement> | undefined, option: IChoiceGroupOption | undefined) {
        this.setState({ selectedInnerIssueKey: option?.key });
    }
    onChangeFeedbackDesc = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement> | undefined,
        newText: string | undefined): void => {
        this.setState({ feedbackDescription: newText });
        const isDisable = ((newText?.trim() !== '') &&
            (this.state.feedbackTitle?.trim() !== '')) ? false : true;
        this.setState({ isSubmitButtonDisabled: isDisable });
    };
    onChangeFeedbackTitle = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement> | undefined,
        newText: string | undefined): void => {
        this.setState({ feedbackTitle: newText });
        console.log(this.state.feedbackTitle);
        const isDisable = ((this.state.feedbackDescription?.trim() !== '') &&
            (newText?.trim() !== '')) ? false : true;
        this.setState({ isSubmitButtonDisabled: isDisable });
    };
    render() {
        return (
            <div className={classNames.stk_wdth}>
                <h2>Report feedback</h2>
                <div>
                    {this.choiceOptions.length > 0 &&
                        <ChoiceGroup label="Select the type of feedback"
                            selectedKey={this.state.selectedChoiceKey} onChange={this.onTypeSelectionChange.bind(this)}
                            options={this.choiceOptions} required />
                    }
                    <div className={classNames.btnsPadding}>
                        {(this.state.selectedChoiceKey === '1' || this.state.selectedChoiceKey === '2') &&
                            <ChoiceGroup
                                options={this.state.selectedChoiceKey === '1' ? this.issueOptions : this.issueOptions1}
                                selectedKey={this.state.selectedInnerIssueKey}
                                onChange={this.onIssueSelectionChange.bind(this)}
                                label="Select an issue that applies to you" required={true} />
                        }
                    </div>
                    <div>
                        {(((this.state.selectedChoiceKey === '1' || this.state.selectedChoiceKey === '2') &&
                            this.state.selectedInnerIssueKey !== '-1') ||
                            (this.state.selectedChoiceKey === '3' || this.state.selectedChoiceKey === '4')) &&
                            <Stack>
                                <TextField label="Enter your feedback title" required onChange={this.onChangeFeedbackTitle.bind(this)}
                                    value={this.state.feedbackTitle} styles={textStyles} />
                                <TextField multiline rows={4} required value={this.state.feedbackDescription}
                                    label="Describe your feedback. If applicable, include steps to replicate your issue"
                                    onChange={this.onChangeFeedbackDesc.bind(this)} styles={textStyles} />
                            </Stack>
                        }
                    </div>
                </div>
                <div className={classNames.btnsPadding}>
                    <Stack horizontal tokens={stackTokens}>
                        <PrimaryButton text="Submit" onClick={this.submitFeedback.bind(this)} allowDisabledFocus
                            disabled={this.state.isSubmitButtonDisabled} />
                        {/* <DefaultButton text="Clear form" onClick={this._alertClicked} allowDisabledFocus /> */}
                        <CommandBarButton text="Clear form" onClick={this.clearFeedback.bind(this)} />
                    </Stack>
                </div>
            </div>
        )
    }
}