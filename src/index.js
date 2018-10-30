import './index.scss';
import $ from 'jquery';
import 'bootstrap';

console.log('hi');

$('#clickButton').on('click', () => {
  $('#important-text').append('<p>Hello World!</p>');
});
