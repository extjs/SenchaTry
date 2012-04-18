# Registration Form #

This example shows a common site registration form. The form appears simple but it shows a few special things:

- The display of field errors has been customized. Fields have `msgTarget:'none'` so the errors are not displayed with the individual fields; instead event listeners are attached to the FormPanel to group up all error messages into a custom global error indicator, with a persistent tooltip showing the error details.
- The "Terms of Use" link has an event handler attached so it opens the page in a modal Ext window.
- The password fields have custom validation attached to verify the user enters the same value in both.
- The submit button has `formBind:true` so it is only enabled when the form becomes valid.
