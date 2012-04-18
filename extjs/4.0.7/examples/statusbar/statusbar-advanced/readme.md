# Advanced StatusBar Example #

This is an advanced example of customizing the `Ext.ux.StatusBar` component via a plugin.

## Customizing the StatusBar ##

The `ValidationStatus` plugin hooks into the StatusBar and automatically monitors the validation status of any fields in the associated FormPanel.  Items of interest:
- The StatusBar syncs in real-time with the valid state of the form as you type
- When the form is invalid, the error status message can be clicked to hide/show a custom error list
- The error list items can be clicked to focus the associated fields
- After submitting successfully, note that the confirmation status message will fade out after 5 seconds and return to the default status (this is a config option)
