# Sidebar  

<!--  -->
- [Issue (#159)](https://github.com/7rs/pages/issues/159)
- [Requirements Definition](/docs/rd/sidebar.md)
<!--  -->

## Props  

  ```ts
  interface HeaderProps {
    headings: Heading[] | undefined;
    navigatoins: Navigation[] | undefined;
  }
  ```  

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

### Table of contents  

  Displays headings as items in the table of contents.

### Navigations  

  Displays the page links of the website.
  Indicates an current page.  

## Features  

### Scrollspy  

  Displays and indicates an active heading.  

### Pagespy  

  Displays and indicates an current page.  

## Prototypes  

  ![layouts](/docs/design/assets/sidebar.jpg)  
