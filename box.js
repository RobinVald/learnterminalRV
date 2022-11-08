import boxen from 'boxen';

console.log(boxen('Morbin Time', {backgroundColor:'red',title: 'movie review', titleAlignment:'center',padding: 1, borderColor: 'red' ,borderStyle: 'double'}));
console.log(boxen('Morbin Time Morbin Time Morbin Time Morbin Time Morbin Time Morbin Time Morbin Time Morbin Time Morbin Time Morbin Time Morbin Time Morbin Time Morbin Time Morbin Time Morbin Time', {height: 20, width: 40}, {textAlignment:'center',padding: 1, borderStyle: 'single'}));
console.log(boxen('Morbin Time', {padding: 1,borderColor: 'green' ,borderStyle: 'bold'}));
console.log(boxen('Morbin Time', {padding: 1,borderColor: 'yellow' ,borderStyle: 'round'}));
console.log(boxen('Morbin Time', {title: 'wooooooooooooow',padding: 1,borderColor: 'magenta', borderStyle: 'classic'}));
console.log(boxen('Morbin Time', {backgroundColor:'cyan',padding: 1, borderColor: 'blue', borderStyle: 'arrow'}));
