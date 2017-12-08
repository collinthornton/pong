<script>
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	var x = canvas.width/2;
	var y = canvas.height/2;
	var dx = 5;
	var dy = -2;
	var randomList = [2, -2, 1, 0, -1];

	var ballRadius = 15;

	var paddleHeight = 120;
	var paddleWidth = 30;
	var paddleDistanceFromEdge = 20;
	var paddleOneY = (canvas.height-paddleHeight)/2;
	var paddleTwoY = (canvas.height-paddleHeight)/2;
	var paddleOneLeftSide = canvas.width - paddleDistanceFromEdge - paddleWidth - ballRadius;
	var paddleOneRightSide = canvas.width - paddleDistanceFromEdge - ballRadius;
	var paddleTwoRightSide = paddleDistanceFromEdge + paddleWidth + ballRadius;
	var paddleTwoLeftSide = paddleDistanceFromEdge + ballRadius;
 
	var upPressed = false;
	var downPressed = false;
	var wPressed = false;
	var sPressed = false;

	var playerOneScore = 0;
	var playerTwoScore = 0;

	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	function keyDownHandler(e) {
		if(e.keyCode == 38) {
			upPressed = true;
		}
		else if(e.keyCode == 40) {
			downPressed = true;
		}
		else if(e.keyCode == 87) {
			wPressed = true;
		}
		else if(e.keyCode == 83) {
			sPressed = true;
		}
	}
	
	function keyUpHandler(e) {
		if(e.keyCode == 38) {
			upPressed = false;
		}
		else if(e.keyCode == 40) {
			downPressed = false;
		}
		else if(e.keyCode == 87) {
			wPressed = false;
		}
		else if(e.keyCode == 83) {
			sPressed = false;
		}
	}


	function drawPaddleOne() {
		ctx.beginPath();
		ctx.rect(canvas.width-paddleWidth-paddleDistanceFromEdge, paddleOneY, paddleWidth, paddleHeight);
		ctx.fillStyle = "#0095DD";
		ctx.fill();
		ctx.closePath();
	}

	function drawPaddleTwo() {
		ctx.beginPath();
		ctx.rect(paddleDistanceFromEdge, paddleTwoY, paddleWidth, paddleHeight);
		ctx.fillStyle = "#0095DD";
		ctx.fill();
		ctx.closePath();
	}

	function drawBall() {
		ctx.beginPath();
		ctx.arc(x, y, ballRadius, 0, Math.PI*2);
		ctx.fillStyle = "#0095DD";
		ctx.fill();
		ctx.closePath();
	}

	function drawPlayerOneScore() {
		ctx.font = "100px Arial";
		ctx.fillStyle = "#0095DD";
		ctx.fillText(playerOneScore, canvas.width/2 + 150, canvas.height * .25);
	}
	
	function drawPlayerTwoScore() {
		ctx.font = "100px Arial";
		ctx.fillStyle = "#0095DD";
		ctx.fillText(playerTwoScore, canvas.width/2 - 150, canvas.height * .25);
	}

	function twoPlayer() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawBall();
		drawPaddleOne();
		drawPaddleTwo();
		drawPlayerOneScore();
		drawPlayerTwoScore();

		if(upPressed && paddleOneY > 0) {
			paddleOneY -= 5;
		}
		if(downPressed && paddleOneY < canvas.height-paddleHeight) {
			paddleOneY += 5;
		}
		if(wPressed && paddleTwoY > 0) {
			paddleTwoY -= 5;
		}
		if (sPressed && paddleTwoY < canvas.height-paddleHeight) {
			paddleTwoY += 5;
		}

		if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
			dy = -dy;
		}
		
		else if(x + dx > paddleOneLeftSide && x + dx < paddleOneRightSide) { 
			if(y + dy > paddleOneY && y + dy < paddleOneY + paddleHeight * 1/7) {
				dx = -dx;
				dy = -3;
			}

			else if(y + dy > paddleOneY + paddleHeight * 1/7 && y + dy < paddleOneY + paddleHeight * 2/7) {			
				dx = -dx;
				dy = -2;
			}

			else if(y + dy > paddleOneY + paddleHeight * 2/7 && y + dy < paddleOneY + paddleHeight * 3/7) {
				dx = -dx;
				dy = -1;
			}
			
			else if(y + dy > paddleOneY + paddleHeight * 3/7 && y + dy < paddleOneY + paddleHeight * 4/7) {
				dx = -dx;
				dy = 0;
			}
	
			else if(y + dy > paddleOneY + paddleHeight * 4/7 && y + dy < paddleOneY + paddleHeight * 5/7) {
				dx = -dx;
				dy = 1;
			}
		
			else if(y + dy > paddleOneY + paddleHeight * 5/7 && y + dy < paddleOneY + paddleHeight * 6/7) {
				dx = -dx;
				dy = 2;
			}

			else if(y + dy > paddleOneY + paddleHeight * 6/7 && y + dy < paddleOneY + paddleHeight) {
				dx = -dx;
				dy = 3;
			}
			
		}

		else if(x + dx > paddleTwoLeftSide && x + dx < paddleTwoRightSide) {
			if(y + dy > paddleTwoY && y + dy < paddleTwoY + paddleHeight * 1/7) {
				dx = -dx;
				dy = -3;
			}

			else if(y + dy > paddleTwoY + paddleHeight * 1/7 && y + dy < paddleTwoY + paddleHeight * 2/7) {
				dx = -dx;
				dy = -2;
			}

			else if(y + dy > paddleTwoY + paddleHeight * 2/7 && y + dy < paddleTwoY + paddleHeight * 3/7) {
				dx = -dx;
				dy = -1;
			}

			else if(y + dy > paddleTwoY + paddleHeight * 3/7 && y + dy < paddleTwoY + paddleHeight * 4/7) {
				dx = -dx;
				dy = 0;
			}

			else if(y + dy > paddleTwoY + paddleHeight * 4/7 && y + dy < paddleTwoY + paddleHeight * 5/7) {
				dx = -dx;
				dy = 1;
			}
	
			else if(y + dy > paddleTwoY + paddleHeight * 5/7 && y + dy < paddleTwoY + paddleHeight * 6/7) {
				dx = -dx;
				dy = 2;
			}

			else if(y + dy > paddleTwoY + paddleHeight * 6/7 && y + dy < paddleTwoY + paddleHeight) {
				dx = -dx;
				dy = 3;
			}
		}
		
		else if(x + dx > canvas.width - ballRadius) {
			playerTwoScore++;
			dx = -dx;
			dy = randomList[Math.floor(Math.random() * randomList.length)];;
			x = canvas.width/2;
			y = canvas.height/2;
		}

		else if(x + dx < ballRadius) {
			playerOneScore++;
			dx = -dx;
			dy = randomList[Math.floor(Math.random() * randomList.length)];;
			x = canvas.width/2;
			y = canvas.height/2;
		}

		if(playerOneScore == 10) {
			alert("Player One Wins!!!");
			document.location.reload();
		}
	
		else if(playerTwoScore == 10) {
			alert("Player Two Wins!!!");
			document.location.reload();
		}

		x += dx;
		y += dy;

	}

	setInterval(twoPlayer, 1);


</script>
