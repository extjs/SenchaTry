# Loading/Saving a Dynamic Form using XML #

This is a very simple example of using XML for load and submit of data with an Ext dynamic form.

Click "Load" to load the [dummy XML data](xml-form-data.xml) from the server using an XmlReader.

After loading the form, you will be able to hit submit. The submit action will make a post to the server, and the [dummy XML file](xml-form-errors.xml) on the server with test server-side validation failure messages will be sent back. Those messages will be applied to the appropriate fields in the form.
