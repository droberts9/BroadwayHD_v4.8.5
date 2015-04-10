/********************************************************************
  RENDERER PLACEHOLDER
*********************************************************************/
var Skin = React.createClass({
  getInitialState: function() {
    return {module: []};
  },

  componentDidMount: function() {
    _ = this.props._;
  },

  switchComponent: function(args) {
    var newState = args || {};
    this.setState(newState);
  },

  render: function() {
    switch (this.state.module[0]) {
      case STATE.START:
        return (
          <StartScreen {...this.props} contentTree={this.state.contentTree} />
        );
      case STATE.PLAYING:
        return (
          <PlayingScreen {...this.props} />
        );
      case STATE.PAUSE:
        return (
          <PauseScreen {...this.props} />
        );
      default:
        return false;
    }
  }
});
