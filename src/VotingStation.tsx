import React from 'react';
import {BallotBox, GlobalConsensus} from "vox-populi";
import {Form} from "react-bootstrap";

class VotingStation extends React.Component<any, any> {
    voter: string
    ballotBox: BallotBox<string>
    constructor(props: any) {
        super(props);
        this.voter = props.voter;
        let strategy = new GlobalConsensus<string>(0.5);
        this.ballotBox = new BallotBox<string>(3, strategy);
        this.state = {selected: null};
        this.ballotBox.placeVote("Alice", "b");
        this.ballotBox.placeVote("Bob", "b");
        this.ballotBox.placeVote("Charles", "b");
    }

    handleInputChange = (event: any) => {
        let vote = event.target.value;
        console.log(vote);
        this.setState({
            selected: vote
        });
        this.ballotBox.placeVote(this.voter, vote);
    }

    render() {
        return (
            <Form.Select onChange={this.handleInputChange}>
                <option>Open this select menu</option>
                <option value="a">Alice</option>
                <option value="b">Bob</option>
                <option value="c">Charles</option>
            </Form.Select>
        );
    }
}

export default VotingStation;
