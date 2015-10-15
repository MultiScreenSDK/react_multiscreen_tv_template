import React from 'react';
import MultiscreenService from './MultiscreenService';

/* TV App */
export default class App extends React.Component {
  constructor(props) {
    super(props);
    // check if query string has the req params
    if (props.params && props.params.length > 0) {
      var regex = /[?&]([^=#]+)=([^&#]*)/g;
      var params = {};
      var match;
      while(match = regex.exec(decodeURIComponent(props.params))) {
        params[match[1]] = match[2];
      }
      if (params.data) {
        var data = JSON.parse(params.data);
        console.log('params data', data);
      }
    }

    this.state = {
      // any initial states
    };

    this.msEvents = {
      hi: function(data, client) {
        console.log('hi', data, client);
        this.setState('hi', data);
      }
    }
  }

  componentDidMount() {
    new MultiscreenService(this);
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    console.log('Render app:', this.state.map, this.state.audio);
    return (
      <div id="app">
        <IdleScreen></IdleScreen>
      </div>
    );
  }
}

/* Simple components */

var IdleScreen = React.createClass({
  render: function() {
    return (
      <div id="idle-screen">
      </div>
    );
  }
});

var MorningMap = React.createClass({
  componentDidMount: function() {
    if (!this.props.map) return;
    var map = new google.maps.Map(document.getElementById('map'), {
      center: this.props.map.home,
      zoom: 12
    });
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
  },

  render: function() {
    if (!this.props.map) return <IdleScreen />;
    return (
      <div id="map"></div>
    );
  }
})
