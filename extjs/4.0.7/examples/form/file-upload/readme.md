# File Upload Field #

This example demonstrates use of Ext.form.field.File, a file upload field with custom rendering.

## Basic File Field ## 

A typical file upload field with Ext style. Direct editing of the text field cannot be done in a consistent, cross-browser way, so it is always read-only. The file path reported by the `getValue` method will


## Button Only ##

You can also render the file input as a button without the text field, with access to the field's value via the standard `Ext.form.field.Field` interface or by handling the `fileselected` event (as in this example).

## Form Example ##

The File field can also be used in form layouts just like any other field, with support for labeling, validation (the field is required in this example), empty text, etc.  This example also demonstrates using the `buttonConfig` option to provide a customized icon upload button.
