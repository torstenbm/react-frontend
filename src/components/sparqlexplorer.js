import React, { Component } from 'react';
import './sparqlexplorer.css';
import Axios from 'axios';

class SparqlExplorer extends Component {

    state = {
        query: `SELECT ?item ?itemLabel 
        WHERE 
        {
          ?item wdt:P31 wd:Q146.
          SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
        }`,
        results: ""
    }
    handleChange = event => {
        const value = event.target.value;
        this.setState({query: value})
    }
    executeQuery = () => {
        Axios.post("http://0.0.0.0:49160/runQuery", {query: this.state.query})
        .then(result => this.setState({results: JSON.stringify(result.data)}))
    }
  render() {
    return (
        <div className="explorer">
            <textarea value={this.state.query} onChange={this.handleChange}></textarea>
            <button onClick={this.executeQuery}>Submit</button>
            <textarea readOnly value={this.state.results}></textarea>
        </div>
    );
  }
}

export default SparqlExplorer;