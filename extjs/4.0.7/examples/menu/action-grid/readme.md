# Actions Example #

This example shows how to create multiple active UI event handling widgets from a single Action definition.

Both Buttons and MenuItems can be created from the same Action instance. Action's enable, disable, hide, show and setText methods affect every Component created from that Action.

In this example, the Action is disabled when there is no grid selection, and this disables both Buttons and MenuItems.
