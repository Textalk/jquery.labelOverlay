jquery.labelOverlay
===================

A simple plugin for jQuery to show labels as value over inputs.
It will hide itself when clicked on, if label is selected or if
a change been done to it otherwise.

## Usage

### Html:
`<label for="input_field">Default value</label>`

`<input type="text" name="input_field">`

### jQuery:
`$('label[for="input_field"]').labelOverlay();`