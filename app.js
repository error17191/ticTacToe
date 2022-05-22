let lastMark = 'O';

document.querySelectorAll('.cell')
    .forEach(function (cell) {
        cell.addEventListener('click', function () {
            placeMark(cell);
        });
    });


function placeMark(cell) {
    if (lastMark == 'X') {
        cell.querySelector('.mark').innerText = 'O';
        lastMark = 'O';
    } else {
        cell.querySelector('.mark').innerText = 'X';
        lastMark = 'X';
    }

}



// let elements = [1,2,3,4,5];
//
// elements.forEach(function (hamada){
//     alert(hamada * 5);
// });