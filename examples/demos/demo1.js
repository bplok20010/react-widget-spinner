import React, { Component } from "react";
import Spinner from "../../src";

function TimeoutLoading() {
	const [value, setValue] = React.useState(0.01);

	React.useEffect(() => {
		let start = value;
		const timer = setInterval(() => {
			if (start > 0.99) {
				start = 0.01;
			}
			setValue(start);
			start += 0.01;
		}, 300);
	}, []);

	const state = value <= 0.5 ? "primary" : value <= "0.8" ? "warning" : "danger";

	return (
		<div>
			<Spinner size="large" value={value} type={state} /> {~~(value * 100)}%
		</div>
	);
}

export default class DEMO extends Component {
	render() {
		return (
			<div>
				<Spinner />
				<Spinner type="none" />
				<Spinner type="danger" />
				<Spinner type="success" />
				<Spinner type="warning" />
				<Spinner value={0.5} />
				<hr />
				<Spinner size="small" />
				<Spinner />
				<Spinner size="medium" />
				<Spinner size="large" />
				<Spinner size={50} />
				<hr />
				<TimeoutLoading />
			</div>
		);
	}
}
