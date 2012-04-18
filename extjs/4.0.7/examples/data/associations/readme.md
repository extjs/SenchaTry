# Lazy Loading Data Associations #

This example demonstrates the ability to lazy load associative data. For loading nested data in a single request, see the (nested loading example)[nested-loading.html].

We look at a fictional company that sells furniture to their retail customers.

Note that each time you navigate down to a new level a separate request is sent to retrieve the appropriate data.

Once you reach the last level, we also demonstrate the ability to load back up the hierarchy. Note that this creates a new Model instance so no previous association data is present when we begin.
