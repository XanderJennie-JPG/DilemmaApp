export function Greeting() {
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

	if (time < 12) {
		return "Goedemorgen,";
	} else if (time < 18) {
		return "Goedemiddag,";
	} else {
		return "Goedenavond,";
	}
}

export default Greeting;
