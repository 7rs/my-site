# Header  

<!--  -->
- [Issue (#157)](https://github.com/7rs/pages/issues/157)
- [Requirements Definition](/docs/rd/header.md)
<!--  -->

## Props  

  ```ts
  interface HeaderProps {
    headerText: string | undefined;
    headerIcon: string | undefined;
    headings: Heading[] | undefined;
    navigatoins: Navigation[] | undefined;
  }
  ```  

### `headerText`  

  ```ts
  type headerText = string | undefined;
  ```  

### `headerIcon`  

  Displays website name, etc.  
  If `headerIcon` is set in mobile layout, doesn't display.  

  ```ts
  type headerIcon = string | undefined;
  ```  

  Displays website icon, etc.
  Only the height is set, so can set logos, etc.  

### `headings`  

  ```ts
  interface Heading {
    label: string;
    id: string;
    depth: number;
  }
  type headings = Heading[] | undefined;
  ```  

  Table of contents items.  
  `label` is a text to be displayed.  
  `id` is a value set for the heading element.  
  `depth` is a size of the heading element (h1 - h6)  

### `navigations`  

  ```ts
  interface Navigation {
    label: string;
    url: string;
  }
  type navigations = Navigation[] | undefined;
  ```  

  Displays navigations.  

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

### Navigations (misc)  

  Displays the page links of the website.
  Indicates an current page.  

## Features  

### Misc  

  Folds some objects when screen width is small.  

### Automatically hiding (header)  

  Header automatically hides when scrolling down, and reappears when scrolling up.  

### Manually hiding  

  Allows a header to be hidden and redisplayed, and return to the open state when reloading.  

### Scrollspy  

  Displays and indicates an active heading.  

### Pagespy  

  Displays and indicates an current page.  

### Search  

  [See the design of the search.](/docs/design/search.md)  

### Color scheme  

  [See the design of the color scheme.](/docs/design/color-scheme.md)  

## Prototypes  

  ![light layouts](/docs/design/assets/headers-light.jpg)  
  ![dark layouts](/docs/design/assets/headers-dark.jpg)  
