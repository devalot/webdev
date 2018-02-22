## Positioned Layouts

### Positioned Boxes

  * Boxes can be pulled out of the normal flow of the HTML

  * You can position them in specific locations

  * Goal: achieve better compatibility with print designs

### Absolutely Positioned Boxes

  * Boxes are completely removed from flow of the page

  * They can be positioned using any corner of the box

  * Position is relative to nearest positioned ancestor

  * Good for placing elements relative to a parent

  * Good for images that flow/stack over other element

### Relatively Positioned Boxes

  * Boxes are moved from current location, leaving a "hole"

  * They can be positioned using any corner of the box

  * Position is relative to the boxes original location

  * Mostly used to set an anchor point for absolutely positioned children

### Fixed Position Boxes

  * Locked to a specific screen location

  * Scrolling the page doesn't change box location

  * Boxes are completely removed from the page flow

  * Position is relative to browser window

  * Good for fixed navigation bar or page banner

### Stacking Issues

  * Positioning leads to boxes stack on top of other boxes

  * You can control the stacking order with the `z-index` property

  * The larger the value the higher a box is in stack

  * Negative `z-index` values can be used to force a box to be
    underneath all other boxes
