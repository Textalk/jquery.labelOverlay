jquery.overlayValue
===================

A simple plugin for jQuery to show labels as value over inputs.


## Usage

### Html:
`<label for="input_field">Default value</label>`

`<input type="text" name="input_field">`

### jQuery:
`$('label[for="input_field"]').overlayValue();`

## Relate a label to another label.
If you have a login form with a username and password field and user has browser autocomplete on.
You can relate a label to another to make sure it triggers the display depending if the browser fills
the input with a value.

### Html:
`<label for="username">Username</label>`

`<input type="text" name="username">`

`<label for="username">Password</label>`

`<input type="text" name="password">`

### jQuery:
`$('label[for="username"]').overlayValue({related_label: 'label[for="password"]'});`

`$('label[for="password"]').overlayValue();`
