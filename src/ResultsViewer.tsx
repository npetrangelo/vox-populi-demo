import React from "react";
import {BallotBox} from "vox-populi";

interface ResultsViewerState {
    entries: Array<[string, number]>
}

class ResultsViewer extends React.Component<any, ResultsViewerState> {
    ballotBox: BallotBox<string>
    constructor(props: any) {
        super(props);

        this.ballotBox = props.ballotBox;
        this.state = {entries: []}
    }

    update = () => {
        this.setState({
            entries: this.ballotBox.histogram.topN(),
        });
    }

    render() {
        return (
            <div>
                {this.state.entries.map(([key, value]) => <h1 key={key}>{key}: {value}</h1>)}
            </div>
        );
    }
}

export default ResultsViewer;
