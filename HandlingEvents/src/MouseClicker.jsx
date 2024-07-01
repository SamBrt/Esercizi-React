
export function MouseClicker() {
	function handleButtonClick(event) {
		console.log(event.target.name);
	}

	function handleImageClick(event) {
		event.stopPropagation();
		console.log(event.target.src);
	}

	return (
		<div>
			<h2>Clicca questa foto per visualizzare il suo url in console</h2>
			<button name="one" onClick={handleButtonClick}>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktRxsPesXOhMHMUYxoE_mAy-vJ4s-VBfdzKOsBmO51apWSyQG0GuFDcBmVd_cpZ901Lk&usqp=CAU"
					alt="Click Me"
					onClick={handleImageClick}
				/>
			</button>
		</div>
	);
}
