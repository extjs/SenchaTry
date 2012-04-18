# VBox Layout with Forms #

The `align:'stretch'` config of the vbox layout manager ensures all child items are 100% of the container width.

The `flex` config of child items of a vbox layout specifies what share of the vertical space left when unflexed items are accounted for to allocate for that child item.

Compare this to [the anchoring example](../anchoring/index.html). That anchors the fields to a hardcoded offset from the edge of the Container. The box layout managers allow much more flexibility in use of available space.

This also illustrates the use of plugins to alter the default behavior of Components. The **Send To** field clones itself until the final one is left blank to allow multiple mail recipients. The layout manager keeps the vertical space allocated correctly.
