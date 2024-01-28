import React from "react";

const Description = ({
	heightpok,
	weightpok,
	pokstat1,
	pokstat2,
	posbs1,
	posbs2,
}) => {
	return (
		<div className="desc">
			<p>
				<b>Height</b> : <b>{heightpok * 10} cm.</b>
			</p>

			<p>
				<b>Weight</b> : <b>{weightpok * 0.1} kg</b>
			</p>

			<h3>Stat</h3>

			<p>
				<b>
					{pokstat1} : {posbs1}
				</b>
			</p>

			<p>
				<b>
					{pokstat2} : {posbs2}
				</b>
			</p>

		</div>
	);
};

export default Description;
