document.addEventListener('DOMContentLoaded', function () {
  // Add code here
  //const board = document.getElementById('board');
  /*var div = document.createElement('div');
  div.setAttribute('class', 'row');
  document.body.appendChild(div);
  div.setAttribute('id', 'board');
  div.setAttribute('class', 'row');
  document.body.appendChild(div);
  */
  var divRow = document.createElement('div');
  var divCol = document.createElement('div');

  divRow.setAttribute('class', 'row');
  console.log(divRow);
  const board = document.getElementById('board');
  board.appendChild(divRow);
  console.log(board);
  document.getElementById('board');
  let row = document.getElementsByClassName('row');
  divCol.setAttribute('class', 'col');
  row[0].appendChild(divCol);

  for (let i = 0; i < board.length; i++) {

  }

  console.log("\n" + board);




});
