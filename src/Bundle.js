import React, { Component } from 'react';

export default class Bundle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: null
    };
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const { load: nextLoad } = nextProps;
    const { load } = this.props;
    if (nextLoad !== load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null
    });
    props.load().then(mod => {
      this.setState({
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    const { mod } = this.state;
    const { children } = this.props;
    return mod ? children(mod) : null;
  }
}
