import React from "react";
import {BallotBox, GlobalConsensus} from "vox-populi";

class ResultsViewer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        let strategy = new GlobalConsensus<string>(0.5);
        this.state = {
            strategy: strategy,
            ballotBox: new BallotBox<string>(3, strategy),
        };
        this.state.ballotBox.placeVote("Alice", "Bob");
        this.state.ballotBox.placeVote("Bob", "Bob");
        this.state.ballotBox.placeVote("Charles", "Alice");
    }

    render() {
        let entries: Array<string> = this.state.ballotBox.histogram.topN(3);
        return (
            <div>
                {entries.map(([key, value]) => <h1>{key}: {value}</h1>)}
            </div>
        );
    }
}

export default ResultsViewer;
