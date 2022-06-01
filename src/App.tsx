import React, {RefObject} from 'react';
import logo from './logo.svg';
import './App.css';
import Row from 'react-bootstrap/Row';
import VotingStation from "./VotingStation";
import ResultsViewer from "./ResultsViewer";
import {BallotBox, GlobalConsensus} from "vox-populi";

class App extends React.Component<any, any> {
    resultsBox: BallotBox<string>
    aliceBox: BallotBox<string>
    bobBox: BallotBox<string>
    charlesBox: BallotBox<string>
    resultsBoxElement: RefObject<ResultsViewer>
    constructor(props: any) {
        super(props);
        let strategy = new GlobalConsensus<string>(0.5);
        this.resultsBox = new BallotBox<string>(3, strategy);
        this.aliceBox = new BallotBox<string>(3, strategy);
        this.bobBox = new BallotBox<string>(3, strategy);
        this.charlesBox = new BallotBox<string>(3, strategy);
        this.resultsBoxElement = React.createRef<ResultsViewer>();
    }

    mergeBoxes = () => {
        console.log("merging boxes")
        for (let box of [this.aliceBox, this.bobBox, this.charlesBox]) {
            this.resultsBox.merge(box);
        }
        for (let box of [this.aliceBox, this.bobBox, this.charlesBox]) {
            box.merge(this.resultsBox);
        }
        this.resultsBoxElement?.current?.update();
    }

    render() {
        return (
            <div className="App">
                <Row>
                    <VotingStation voter="Alice" ballotBox={this.aliceBox} merge={this.mergeBoxes}/>
                    <VotingStation voter="Bob" ballotBox={this.bobBox} merge={this.mergeBoxes}/>
                    <VotingStation voter="Charles" ballotBox={this.charlesBox} merge={this.mergeBoxes}/>
                </Row>
                <ResultsViewer ballotBox={this.resultsBox} ref={this.resultsBoxElement}/>
            </div>
        );
    }
}

export default App;
