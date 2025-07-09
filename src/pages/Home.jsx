import "./home.css";

export default function Home() {
	return (
		<>
			<div className="homeContainer">
				{/* Top Profile Bar with X */}
				<div className="profileBar">
					<div className="profileWrapper">
						<div className="profileName">Diana</div>
						<div className="xOut">X</div>
					</div>
				</div>
				{/* Chat Section to show what's happening */}
				<div className="chatSection">
					<div className="chatWrapper"></div>
				</div>
				{/* Files and Emojis Section */}
				<div className="extraContainer"></div>
				{/* Type Bar*/}
				<div className="typeBarContainer"></div>
			</div>
		</>
	);
}
