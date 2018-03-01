## Introduction to Markup Languages

### Word Processors and WYSIWYG

  - Many content creation tools are What You See is What You Get
    (WYSIWYG)

  - Want some *emphasized* text?  Select the text and click a button

  - The tool will store your text with styling information

### Markup Languages

  - A markup language requires you to explicitly provide information
    along with the content:

    ~~~ {.html}
    <p>
      This is a paragraph with <em>emphasized</em> text.
    </p>
    ~~~

## Introduction to HTML

### What is HTML?

  - Hyper Text Markup Language

  - Uses "`<`", "`>`", and "`&`" as *control* characters

  - To use those characters in your text they need to be encoded:

    ~~~ {.html}
    <p>
      2 &gt; 1
    </p>
    ~~~

  - Failure to encode these characters will result in errors (best
    case) or very **serious security issues** (XSS)

### Features of HTML

  - HTML is very error tolerant (browsers are very forgiving)

  - That said, you should strive to write good HTML

  - All about content and structure

  - Parsed as a tree of nodes (A.K.A. elements or tags)

### HTML is Semantic

Example semantic tags:

  - `<p>`: Paragraph
  - `<table>`: Table
  - `<ul>`: Unordered list

These tags tell you something about their content.  This is *very*
important for accessibility.

### Tags That Are Not Semantic

Compare the semantic tags to these:

  - `<div>`: Generic block division
  - `<span>`: Generic inline content

These tags tell us nothing about their content.

### Current Version: HTML5

  - Introduced a lot of new semantic tags

  - Focus on content and not style

  - Simplified the developer experience

### Anatomy of an HTML Element

Also known as: nodes, elements, and tags:

~~~ {.html}
<element key="value" key2="value2">
  Content or children of element.
</element>
~~~

### Example HTML Document

~~~ {.html insert="../../src/examples/html/simple.html"}
~~~

### Exercise: Writing Some HTML

  #. Open the following file:

        src/www/html/body.html

  #. Let's write some HTML!

## Most Commonly Used Tags

### Ordered Lists

List items are displayed as sequentially numbered items.

~~~ {.html insert="../../src/examples/html/ordered-list.html" token="list"}
~~~

See: `src/examples/html/ordered-list.html`

### Unordered Lists

List items are displayed as bullet points.

~~~ {.html insert="../../src/examples/html/unordered-list.html" token="list"}
~~~

See: `src/examples/html/unordered-list.html`

### Tables

~~~ {.html insert="../../src/examples/html/table.html" token="table"}
~~~

See: `src/examples/html/table.html`

<<(forms.md)

### Audio

There is no standard audio format.  You should provide various formats
based on the browsers you support.  See the [MDN compatibility chart
for more details][formats].

~~~ {.html insert="../../src/examples/html/audio.html" token="audio"}
~~~

See: `src/examples/html/audio.html`

### Video

There is no standard video format.  You should provide various formats
based on the browsers you support.  See the [MDN compatibility chart
for more details][formats].

~~~ {.html insert="../../src/examples/html/video.html" token="video"}
~~~

See: `src/examples/html/video.html`

## Semantic Tags to Structure Documents

HTML5 introduced many new semantic tags to help structure our
documents.  In this section we'll explore some of the most useful
tags.

### Sections

Separating the content in your HTML:

  - `<article>`: Content that can stand alone

  - `<main>`: Indicates the main content

  - `<aside>`: Tangential content

  - `<section>`: Generic section (useful in an `article`)

### Headings

In addition to the existing `<h1>` through `<h6>` tags, HTML5 adds:

  - `<header>`: Introduce a section header

  - `<hgroup>`: Group headings or introduce subheadings/subtitles

  - `<footer>`: Information about the containing section.

  - `<address>`: Contact information for the containing article.

### Navigation

~~~ {.html insert="../../src/examples/html/nav.html" token="nav"}
~~~

See: `src/examples/html/nav.html`

## Developer Tools

### Viewing the Source Code of a Page

  * Browsers allow you to see the source of a page using the *View
    Source* menu item

  * This is the content the browser pulled from the server

  * Does not reflect any changes made by JavaScript

### Inspecting Elements

  * Most modern browsers allow you to see a live view of the HTML
    using the *Inspect Element* menu item

  * This provides a wealth of information, and even allows you to edit
    the HTML (internal to the browser only)

[formats]: https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats#Browser_compatibility
