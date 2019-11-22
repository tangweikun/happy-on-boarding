var App = React.createClass({
  getInitialState: function() {
    return {
      step: 1
    };
  },

  increaseStep: function() {
    var step = this.state.step;
    step++;

    this.setState({ step: step });
  },

  decreaseStep: function() {
    var step = this.state.step;
    step--;

    this.setState({ step: step });
  },

  render: function() {
    return (
      <div className="App">
        <div className="Background" data-step={this.state.step}></div>
        <Slides step={this.state.step} />
        <Footer
          increaseStep={this.increaseStep}
          decreaseStep={this.decreaseStep}
          step={this.state.step}
        />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById("app"));
