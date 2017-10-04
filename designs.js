// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

/*Notes 10/1/17:
Collecting values for height and width = .val() but how do I overwrite read up more on the .val() method. 
Make Grid could be redesigned to better match what we are doing, look for examples on making clickable grids
Find out more about input type=submit how do I collect the .val in a new variable. 
How do I plug the variables into the makeGrid.

ACCOMPLISHED Use .submit as event figured out! WOOT WOOT!

10/2/17: 
Added tests to insert tables into the dom! 
But how do we make them stick?! Do not use .submit as it for somereason resets the page.
Able to collect values in input_height and input_width

10/3/17: 
Make grid works with submit! Now need to be able to reset if clicked again rather than add on to it. 

To do: Target single cells and change background on click! HOW?!
*/



let height = $('#input_height');
let width = $('#input_width');
let table = $('#pixel_canvas');
let table2 = $('');
let submit = $('.submit');
let grid;
let color = $('#colorPicker')


console.log(height);
console.log(width);


sizePicker = $('#sizePicker');

/*function makeGrid(height, width) {
    for (var row = 1; row <= height; row++) {
        table += "<tr>";
        for (col = 1; col <= width; col++) {
            table += "<td></td>";
        }
    }
} alternate code*/



function makeGrid(height, width) {
    for (var row = 1; row <= newHeight; row++) {
        table2 += '<tr>';
        for (col = 1; col <= newWidth; col++) {
            table2 += "<td></td>";
        }
    }
    table.append(table2);
    //table2.append(table2);
}

sizePicker.submit(function() {
    alert(`Here's your custom grid!`);
    newHeight = height.val(); // STORES THE VALUE OF WHAT WAS ENTERED!
    newWidth = width.val();
    event.preventDefault(); //prevents the .submit from submitting and resetting the DOM! 
    makeGrid();
    console.log(newHeight);
    console.log(newWidth);


});
$(table).click(function() {
    color = color.val();
    let table3 = table.children();
    let table4 = table3.children();
    $(table4).attr('class', 'test')
    $(table4).css('background', color);
});