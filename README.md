# Template UI - Directives

## Intro

Make sure to always add directive modules
Make sure to add pipe modules to app.testing-module.ts
Do not modify anything else in tests folder (only app.testing-module.ts)

In get instant feedback simply run `nx test`

## UI Service Directives

UI services are the angular @Injectables that deal with UI in your App. Angular Material defines a few of these, you can also write your own.
The key point here is: UI services are different than Data Services or Application Services, they live in UI layer.

### SnackBarDirective

Create a directive with selector: `[showSnackbarOnClick]` that will depend on `MatSnackBar`.
It will take a message as @Input parameter and listen to the click event.
When click happens, it will simply show the snackbar with message passed to it.

### ConfirmDialogDirective

Create a directive with selector: `[confirmDialog]` that will open a `MatDialog` and wait for its closing.

Main input will take a string representing the confirm message that will be passed to Dialog reference and displayed there.

The ConfirmDialog will have:

- mat-dialog-title with text `Confirm your choice`
- mat-dialog-content with text passed as input to the directive
- mat-dialog-actions with 2 buttons: `Confirm` and `Cancel`

Directive will emit `(confirmed)` event which represent a boolean value weather it was confirmed or not (cancel clicked or closed the modal)

## Renderer Directives

These directives are used to alter behaviour of rendered HTML element.

### BlockPasteDirective

Create a directive with the selector `input[blockPaste],textarea[blockPaste]` that will not allow anyone to paste a content into input or a text area.

This directive is especially usefull when dealing with sensitive data like passwords

### BackgroundCarousel

Create a directive with the selector `[bgCarousel]` that will listen to left and right arrow keys on `document` and change the backgrounds
It will take an array of colours as @Input parameter that represent list of colours to change.
When I press right arrow, it will take next colour from the list.
When I press left arrow, it will take previous colour from the list.
When I get to first or last element, simply start from the other end, this way we will never run out of colours.

In order to change the colour, you have to use `keyUp` event on `document` as we want it to be global.
When registering `keyUp` event make sure to utilize `key` that can either be `ArrowLeft` or `ArrowRight`.

### MovableDirective

Create a directive with the selector `[movable]` that will listen move an element on the site.
In order to move element, you have to first detect `mousedown` event, then move element together with `mousemove` event and finally stop moving when the `mouseup` event is fired.

Use css property `transform: translate3d(x,y,0)` in order to move the element.
When registering `mousedown` make sure to utilize `offsetX` and `offsetY` to detect where in the element your mouse currently is. You do not want to have a jumping effect due to calculating this difference
When registering `mousemove` make sure it is on `document` not on the element, because we want to move element even if we go a little outside of the element. Use `clientX` and `clientY` to calculate where to move it.
When registering `mouseup` make sure it is on `document` as well.

## Smart Directives

These are directives that have connection with backend API (Smart).

### DeleteProductDirective

Create a directive with the selector `[deleteProduct]` that will call backend endpoint `https://fakestoreapi.com/products/:productId` when click event is emitted.

Its main input will represent id of the product to be deleted.

### FeatureFlagsDirective

Create a structural directive with the selector `[featureFlag]` that will show or hide element template.

In order to make a decision weather a specific piece of UI should be shown or not, first fetch the list of available flags from `GET https://636ce2d8ab4814f2b2712854.mockapi.io/feature-flags` endpoint.

First input is called `featureFlag` and represents the name of the flag to be checked.
Second input is called `featureFlagElse` and represents the alternate template to be shown.

If `featureFlag` is found in the list fetched from the backend, then show the default templateRef, else show the alternate template.

## Form Validator Directives

### UrlValidatorDirective

selector: `[input[type=url][formControlName],input[type=url][formControl],input[type=url][ngModel]]`
No inputs

The idea is to apply custom url vallidator to every input element of type url that is connected to either reactive or a template form.

Validation rules:

Empty value: valid
String not starting with `http://` or `https://` should give `mustStartWithHttpOrHttps` validation error
String not ending with `.[a-z]{2,}` should give `mustEndWithDotDomain` validation error

### TelValidatorDirective

selector: `[input[type=tel][formControlName],input[type=tel][formControl],input[type=tel][ngModel]]`

Input: pattern representing a pattern string or undefined (optional)

The ideas is to apply pattern validator to every input element of type tel that is connected to either reactice or template form.
Pattern attributes allows your clients to configure what is the pattern used to show the error.

Validation rules:
Empty value: valid

if pattern is not provided, then every value is valid

if pattern is provided, then any value should be tested against this pattern
