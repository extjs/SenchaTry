# Dynamic Form interacting with an embedded Grid #

This Form demonstrates the fact that by virtue of inheriting from the Ext `Container` class, an Ext.form.Panel can contain any Ext `Component`. This includes all the subclasses of Ext.Panel, including the GridPanel.

The Grid demonstrates the use of creation of derived fields in a Record created using a custom `convert` function, and the use of column renderers.

The Form demonstrates the use of radio buttons grouped by name being set by the value of the derived 'rating' field.
