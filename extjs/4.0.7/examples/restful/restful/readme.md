# Rest Proxy Example #

This example shows how to implement a Store using a REST proxy.

Take note of the requests being generated in Firebug as you interact with the Grid.

The Proxy in this example points to a single url **app.php/users**.  You may have to edit your web-server's configuration to allow the php back-end to be executable.  app.php implements a simple RESTful backend controller and simulates a database by storing records in the `$_SESSION`.
