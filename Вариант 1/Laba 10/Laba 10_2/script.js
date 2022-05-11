let cells = Array.from(document.querySelectorAll('#field td'));
let i = 0, x=0, o=0, n=0;
document.getElementById("n").innerHTML = n;
document.getElementById("x").innerHTML = x;
document.getElementById("o").innerHTML = o;
let step = document.getElementById('step');
let X = document.getElementById('X');
let O = document.getElementById('O');
let N = document.getElementById('N');
for (let cell of cells) {
    cell.addEventListener('click', function() { 
        if(i%2==0 && !cell.innerHTML) this.innerHTML = 'X';
        else if(i%2==1 && !cell.innerHTML) this.innerHTML = 'O';
        if (isVictory(cells)) {
            alert('Победил '+ this.innerHTML); 
            if (this.innerHTML == 'X') {
                x++;
                document.getElementById("x").innerHTML = x;
            }
            else{
                o++;
                document.getElementById("o").innerHTML = o;
            }
        }
        else if (i == 8) {
            alert('ничья');
            n++;
            document.getElementById("n").innerHTML = n;
        }
        if (i%2==0) step.innerHTML ='Ходит: O';
        else step.innerHTML ='Ходит: X';
        i++;
    }); 
}
function isVictory(cells) {
	let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let comb of combs) {
		if (
			cells[comb[0]].innerHTML 
				== cells[comb[1]].innerHTML && 
			cells[comb[1]].innerHTML 
				== cells[comb[2]].innerHTML && 
			cells[comb[0]].innerHTML 
				!= '' 
		) {
			return true;
		}
	}
	return false;
}
function restart(){
    for (let k=0; k<cells.length; k++){
        cells[k].innerHTML = '';
    }
    i=0;
    step.innerHTML ='Ходит: X';
}

