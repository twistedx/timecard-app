import React from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    const handleDismiss = () => this.setState({ show: false });
    if (this.state.show) {
      return (
        <Alert variant="danger" onClose={handleDismiss} dismissible>
          <p>
            Uh oh! Looks like you're still clocked in on [job name]! Would you
            like to clock out?
          </p>
        </Alert>
      );
    }
  }
}

export default Alert;
