# Ext.data.writer.Writer Example #

This example shows how to implement a Writer for your Store.  A Writer-enabled Store frees you from having to manually compose Ajax requests to perform CRUD actions on a Store.

The AjaxProxy plugged into the store in this example uses the *api* configuration instead of an *url*.

A simple MVC-like php backend has been created for this example which simulates a database by storing records in $_SESSION.  See the file /remote/app/controllers/users.php.  You may have to configure your web-server to allow scripts to be executed in the /examples directory.

Take note of the requests being generated in Firebug as you interact with the Grid and Form.

An **Error has been simulated** on the server-side:  Attempting to update a record having **ODD**-numbered id will generate this error.

Responses from the update action will have successProperty === false along with a message.  This error can be handled by listening to the **"exception"** event upon your proxy.
