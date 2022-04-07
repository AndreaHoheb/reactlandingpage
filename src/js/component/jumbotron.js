import React from "react";

export const Jumbotron = () => {
	return (
		<div className="container-fluid py-5">
			<h1 className="display-4">Hello, world!</h1>
			<p className="lead"></p>
			<hr className="my-4" />
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</p>
		</div>
	);
};
