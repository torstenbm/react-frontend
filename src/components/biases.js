import React, { Component } from 'react';
import './biases.css';
import * as firebase from "firebase/app";
import "firebase/database"

class Biases extends Component {
  constructor(props){
    super(props);
    let firebaseConfig = {
      apiKey: "AIzaSyDZKI2COnqy7jbCooNG2sIJn4_0qRrhtDw",
      authDomain: "wikidata-analysis.firebaseapp.com",
      databaseURL: "https://wikidata-analysis.firebaseio.com",
      projectId: "wikidata-analysis",
      storageBucket: "",
      messagingSenderId: "35972699557",
      appId: "1:35972699557:web:8e0a19c7f368ee04"
    };
    this.state = {}
    firebase.initializeApp(firebaseConfig)
  }

  componentDidMount() {
    this.listenToDb();
  }

  listenToDb = () => {
    let ref = firebase.database().ref('/results');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  }

  renderElements = () => {
    let elements = [];
    for (let key in this.state){
      if (! (uri in this.state[key]) ) {
        continue;
      }
      let editDiff = "https://en.wikipedia.org/wiki/WP:Labels?diff=" + this.state[key]["rev-id"];
      elements.push(
        <div className="wiki" key={key}>
          <div className="name">
          The entity edited was: <a href={this.state[key].uri}>
              {this.state[key].uri}
            </a>
          </div>
          <div className="diff">
            Edit-diff: <a href={editDiff}>
              {editDiff}
            </a>
          </div>
          <div className="intention">
            Edit intention: {this.state[key].edit_intention}
          </div>
          <div className="similar">
            Most similar object is: <a href={this.state[key].most_similar[0]}>
              {this.state[key].most_similar[0]}
            </a> with a similarity score of { this.state[key].most_similar[1] }
          </div>
        </div>
      )
    }
    return elements.reverse()
  }


  render() {
    return (
        <div>
            <h2 className="title">Processed stream</h2>
            { 
              this.renderElements()
            }
        </div>
    );
  }
}

export default Biases;
