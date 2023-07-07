import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
              <ol key={'relativeList'}>
                <li key={'relativeListItem1'}>Mohit</li>
                <li key={'relativeListItem2'}>Nitin</li>
                <li key={'relativeListItem3'}>Vipin</li>
                <li key={'relativeListItem4'}>Himanshu</li>
                <li key={'relativeListItem5'}>Monu</li>
              </ol>

            </div>
        )
    }
}


export default App;
