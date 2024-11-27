type selector
ID selector
class selector
attribute selector


  ```css
/* CSS Selector Cheatsheet */

/* 1. Type Selector (Element) 
   Targets all instances of an HTML element */
p {
    color: blue;
}
div {
    margin: 10px;
}

/* 2. ID Selector (#)
   Targets single unique element
   Should only appear once per page */
#header {
    background: black;
}
#nav-menu {
    width: 100%;
}

/* 3. Class Selector (.)
   Targets multiple elements
   Can be reused across page */
.button {
    padding: 10px;
}
.highlight {
    background: yellow;
}

/* 4. Attribute Selector ([attr])
   Targets elements with specific attributes */
[type="text"] {
    border: 1px solid gray;
}
[href^="https"] {  /* Starts with */
    color: green;
}
[class*="btn"] {   /* Contains */
    cursor: pointer;
}
[lang|="en"] {     /* Starts with 'en' */
    font-family: Arial;
}

/* Common Combinations */
/* Class AND type */
p.highlight {
    /* Only <p> with class="highlight" */
}

/* Multiple classes */
.btn.large {
    /* Elements with both classes */
}

/* Child elements */
.container > p {
    /* Direct child paragraphs */
}

/* Descendant elements */
.container p {
    /* Any nested paragraphs */
}

/* Specificity Order (lowest to highest):
1. Type selectors (h1, div, p)
2. Class selectors (.button, .header)
3. ID selectors (#main, #nav)
4. Inline styles
5. !important (avoid if possible)
*/
```

Quick Reference:
```css
/* Basic Syntax */
selector {
    property: value;
}

/* Multiple Selectors */
h1, h2, h3 {
    color: blue;
}

/* Nested Elements */
nav ul li {
    margin: 0;
}

/* Direct Children */
div > p {
    padding: 10px;
}

/* Adjacent Sibling */
h1 + p {
    font-size: 1.2em;
}

/* Attribute Variations */
[attr]        /* Has attribute */
[attr=val]    /* Exact match */
[attr^=val]   /* Starts with */
[attr$=val]   /* Ends with */
[attr*=val]   /* Contains */
```
