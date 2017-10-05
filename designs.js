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

To do: Target single cells and change background on click! HOW?! And DONE! as 8:25 pm

10/4/17:
Added functionality to reset button. And fixed makeGrid so that it deletes old grid. Ready to clean up code and submit :)
*/


//Universal Variables
let height = $('#input_height');
let width = $('#input_width');
let table = $('#pixel_canvas');
let table2 = $('');
let submit = $('.submit');
let grid;
let color = $('#colorPicker')
let table3 = table.children();
let table4 = table3.children();

console.log(height);
console.log(width);


sizePicker = $('#sizePicker');
//Different Functions

function makeGrid(height, width) {
    let table2 = 0;
    $('tr').remove();
    for (var row = 1; row <= newHeight; row++) {
        table2 += '<tr class="row">';
        for (col = 1; col <= newWidth; col++) {
            table2 += "<td></td>";
        }
    }

    table.append(table2);
    //table2.append(table2);
}
//Sibmit functionality
sizePicker.submit(function() {
    alert(`Here's your custom grid!`);
    newHeight = height.val(); // STORES THE VALUE OF WHAT WAS ENTERED!
    newWidth = width.val();
    event.preventDefault(); //prevents the .submit from submitting and resetting the DOM! 
    makeGrid();

});
//Draw function 
$(table).mouseenter(function() {
    let table3 = table.children();
    let table4 = table3.children();
    $(table4).click(function() { //This required to functions one to access the elements and the other to change! 
        $(this).css('background', color.val());
    })
});
//reset button added for fun
$('.btn').click(function() {
    $('tr').remove();
    height.val(1);
    width.val(1);
})