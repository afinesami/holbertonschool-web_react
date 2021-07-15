import React, { Component, Children } from 'react';

export default class WithLogging extends Component {
	constructor(props) {super(props);};

	componentDidMount() { let comps = this.props.children.type.name || 'Component';
		console.log(`Component ${comps} is mounted`);
	};

	componentWillUnmount() { let comps = this.props.children.type.name || 'Component';
		console.log(`Component ${comps} is going to unmount`);
	};

	render() {
		return (this.props.children);
	};
};

