# Ext.Direct Form Integration #

The following example illustrates how to load a FormPanel or BasicForm through Ext.Direct.

Notice that Direct requests will batch together if they occur within the enableBuffer delay period (in milliseconds).

The Ext.Direct Form api also supports submit in addition to load. The server-side must mark the submit handler as a 'formHandler' and will not be batched.
