# Footer  

<!--  -->
- [Issue (#158)](https://github.com/7rs/pages/issues/158)
- [Requirements Definition](/docs/rd/footer.md)
<!--  -->

## Props  

  ```ts
  interface FooterProps {
    socials: Social[] | undefined;
    navigatoins: Navigation[] | undefined;
    copyrightInformation: CopyrightInformation | undefined;
    buildInfomations: BuildInformations | undefined;
  }
  ```  

### `socials`  

  ```ts
  interface Social {
    icon: string | ImageMetadata;
    url: string;
    label: string | undefined;
  }
  type socials = Social[] | undefined;
  ```  

  Displays social icons that set link.  
  `label` is used as alternative text or hover labels.  

### `navigations`  

  ```ts
  interface Navigation {
    label: string;
    url: string;
  }
  type navigations = Navigation[] | undefined;
  ```  

  Displays navigations.  

### `copyrightInformation`  

  ```ts
  interface CopyrightInformation {
    description: string;
    icon: string | undefined;
    url: string | undefined;
  }
  type copyrightInformation = CopyrightInformation | undefined;
  ```  

  Displays copyright informations.  
  If `copyrightInformation` isn't specified,
  license information is get from `LICENSE` file or `package.json` from the repository directory and used.  
  When couldn't get license information, displays “all rights reserved”.  
  `url` is the URL of the license or the URL of the repository, etc.  

### `buildInformations`  

  ```ts
  interface BuildInformations {
    astroVersion: string | undefined;
    hosting: string | undefined;
  }
  type buildInfomations = BuildInformations | undefined;
  ```  

  Displays informations about the build.  
  Even if `buildInformations`  isn't specified, doesn't automatically get and use.  
  Because if it's not OSS, mustn't publish it.  

## Objects  

### Top button  

  Places a button to scroll to the top automatically.  

### Social icons  

  Displays social icon that set link.  

### Navigations  

  Displays the page links of the website.
  Indicates an current page.  

### Copyright information  

  Displays of the license and rights to contents.  

### Build informations  

  Displays the version and build informations.  

## Features  

### Jump to top  

  Scrolls to the top automatically.  

### Pagespy  

  Displays and indicates an current page.  

### Getting copyright informations automatically  

  The license information is get from `LICENSE` file or `package.json` from the repository directory and used.  

## Prototypes  

  ![light layouts](/docs/design/assets/footers-light.jpg)  
  ![dark layouts](/docs/design/assets/footers-dark.jpg)  
