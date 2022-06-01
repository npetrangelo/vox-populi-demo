import React from 'react';
import {BallotBox} from "vox-populi";
import {Form} from "react-bootstrap";

class VotingStation extends React.Component<any, any> {
    voter: string
    ballotBox: BallotBox<string>
    merge: Function
    constructor(props: any) {
        super(props);
        this.voter = props.voter;
        this.ballotBox = props.ballotBox;
        this.merge = props.merge;
        this.state = {selected: null};
    }

    handleInputChange = (event: any) => {
        let vote = event.target.value;
        console.log(vote);
        this.setState({
            selected: vote
        });
        this.ballotBox.placeVote(this.voter, vote);
        this.merge();
    }

    render() {
        return (
            <Form.Select onChange={this.handleInputChange}>
                <option>Place your vote</option>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Charles">Charles</option>
            </Form.Select>
        );
    }
}

export default VotingStation;
