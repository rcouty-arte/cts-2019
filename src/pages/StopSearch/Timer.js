import React, { Component } from 'react';
import moment from 'moment';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.date = moment(props.date);
    this.intervalId = null;

    this.state = {
      visibleDate: moment.utc(this.date.diff(moment())).format("HH:mm:ss")
    };
  }

  dateUpdate = () => {
    this.setState({
      visibleDate: moment.utc(this.date.diff(moment())).format("HH:mm:ss")
    });
  }

  componentDidMount() {
    this.intervalId = setInterval(this.dateUpdate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        {this.state.visibleDate}
      </div>
    );
  }
}

export default Timer;
