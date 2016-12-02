class Rover {

	DIRECTION = ["n", "e", "s", "w"];

	constructor($y=0, $x=0, $direction="n") {
		this.latitude = $y;
		this.longitude = $x;
		this.direction = $direction;
	}

	function instructions(){
		console.log("Where do you want to go?");
		console.log("KEY Left:[l] Right:[r] Move[m]");
		var response = readline();
		response.forEach(function(i){
			switch (expression) {
				case 'l':
					$direction = DIRECTION[DIRECTION.index($direction)-1]
					break;
				case 'r':
					$direction = DIRECTION[DIRECTION.index($direction+1)%4]
					break;
				case 'm':
				 	move
					break;
				case 'exit':
					break;

			default:

			}
		});
	}

	function move(){
		switch (expression) {
			case 'n':
			this.latitude += 1;
			break;
			case 'e':
			this.longitude += 1;
			break;
			case 's':
			this.latitude -= 1;
			break;
			case 'w':
			this.longitude -= 1;
			break;
		}
	}

	function to_string(){
		return "The Rover is (" + this.longitude + "," + this.latitude + ") facing -> " + this.direction + "\n FOR MORE INFORMATION - Use the key to move the Rover\n"
	}

}

let appollo = new Rover

while (true) {
	appollo.instructions
	console.log(appollo);

	if (appollo.response === 'exit') {
		exit()
	}
}
