# Search  

<!--  -->
- [Issue (#153)](https://github.com/7rs/pages/issues/153)
- [Requirements Definition](/docs/rd/search.md)
<!--  -->

## Features  

### `search(keyword, limit = 5)`  

  ```ts
  interface SearchResult {
    title: string;
    url: string;
    subText: string | undefined;
  }
  const DEFAULT_LIMIT = 5

  function search(keyword: string, limit?: number = DEFAULT_LIMIT): SearchResult[]
  ```  

  Searchs articles and pages based on keywords.  
  Currently, assuming use [pagefind](https://pagefind.app/).  
