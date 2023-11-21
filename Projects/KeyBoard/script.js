const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div>
    <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td> 
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
  </table>
    </div>
  `;
});
// e.key === ' ' ? 'Space' : e.key - to write Space whenever we press Space key other it will show blank' '
// e.code - A string representing the physical key pressed, regardless of keyboard layout or modifier keys.
// e.keyCode - A numeric value representing the physical key pressed according to the keyboard layout.
// e.key - A string representing the character or action associated with the key, taking into account modifier keys.

