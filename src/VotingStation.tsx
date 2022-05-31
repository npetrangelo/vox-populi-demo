import React from 'react';
import {BallotBox, GlobalConsensus} from "vox-populi";

class VotingStation extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        let strategy = new GlobalConsensus<string>(0.75);
        this.state = {
            strategy: strategy,
            ballotBox: new BallotBox<string>(0, strategy),
        };
        this.state.ballotBox.placeVote("Alice", "Bob");
    }

    render() {
        return <h1>{this.state.ballotBox.getWinner()}</h1>;
    }
}

export default VotingStation;
