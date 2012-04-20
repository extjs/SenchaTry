# Windows Example #

This illustrates the `headerPosition` config of Panels, and also relative z-index management.

The third Window owns two floating Windows who's z-indices are managed relative to *its* z-index. When that Window is occluded by another Window, and you click to bring it to the front, both its dependent Windows move to the front too.

This also illustrates constraining Windows.
