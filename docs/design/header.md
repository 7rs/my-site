# Header  

<!--  -->
- [Requirements Definition](/docs/rd/header.md)
<!--  -->

## Props  

  ```ts
  type headerText = string | undefined;
  ```  

  Displays website name, etc.  
  If `headerIcon` is set in mobile layout, doesn't display.  

  ```ts
  type headerIcon = string | undefined;
  ```  

  Displays website icon, etc.
  Only the height is set, so can set logos, etc.  

  ```ts
  type headings = Array<{
    label: string;
    id: string;
    depth: number;
  }>;
  ```  

  Table of contents items.  
  `label` is a text to be displayed.  
  `id` is a value set for the heading element.  
  `depth` is a size of the heading element (h1 - h6)  

## Objects  

### Header text  

  Displays a website name, website icon, website logo, etc.  
  Displayed items is changed in mobile layout.  

### Theme button  

  Button to change the theme (color scheme).  

### Table of contents (misc)  

  Displays headings as items in the table of contents.

### Search bar (misc)  

  Places an input box to search within the website.  

## Features  

### Misc  

  Folds some objects when screen width is small.  

### Automatically hiding (header)  

  Header automatically hides when scrolling down, and reappears when scrolling up.  

### Manually hiding  

  Allows a header to be hidden and redisplayed, and return to the open state when reloading.  

### Scrollspy  

  Displays and indicates an active heading.  

### Search  

  [See the design of the search.](/docs/design/search.md)  

### Color scheme  

  [See the design of the color scheme.](/docs/design/color-scheme.md)  

## Prototypes  

![layouts](/docs/design/assets/headers-light.jpg)  
![layouts](/docs/design/assets/headers-dark.jpg)  
