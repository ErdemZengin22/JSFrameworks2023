## Conditional Rendering

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Getting Started

Using your command line, you will need to navigate to the this folder, install all dependencies, and start the app.

```bash
cd exercises/04-conditional-rendering/
code . # if you would like to open this in a separate VSCode window
npm install
npm start
```

To stop the application, press `ctrl+c`.

To run the tests:

```shell
npm run test
```

If you do not see any test results, press `a` to run all tests. The tests will rerun whenever you make a change.

To stop the tests, press `ctrl+c`.

## Instructions

For this assignment, you will build an accordion. An [accordion](https://semantic-ui.com/modules/accordion.html) is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content. Each section of content can be "expanded" or "collapsed" to reveal the content associated with that item.

![An example of an accordion](demo.png)

Create a component called _AccordionSection_. It should render one of the sample HTML snippets below to the screen. It should receive _isOpen_ - a boolean - as a prop. If _isOpen_ is true, use the snippet of code when the accordion section is expanded. When this value is false, you the snippet of code for when the accordion section is collapsed. (Your _AccordionSection_ component can receive other props.)

Import your _AccordionSection_ component in your _App.jsx_ file. Using _AccordionSection_, create an accordion with three sections, where only the middle section is expanded.

As a bonus, you may build your accordion by looping through the contents of the file _src/content/accordion.js_.

## Acceptance Criteria

- You have an accordion with three sections. The middle (second) section should be expanded, while the rest of the sections should be collapsed.
- You should use conditional rendering to solve this problem.

## Sample HTML

This is sample HTML if a section is expanded. (You will need to convert this to JSX.)

```html
<div class="title active">
  <i class="dropdown icon"></i>
  Why would anyone use React?
</div>
<div class="content active">
  <p class="transition visible">
    One of the main benefits of using React JS is its potential to reuse
    components. It saves time for developers as they don't have to write various
    codes for the same features. Furthermore, if any changes are made in any
    particular part, it will not affect other parts of the application.
  </p>
</div>
```

Here is sample HTML for a section that is collapsed. (You will need to convert this to JSX.)

```html
<div class="title">
  <i class="dropdown icon"></i>
  What is React in simple terms?
</div>
<div class="content">
  <p class="transition hidden">
    The Best Guide to Know What Is React [Updated] React is a JavaScript-based
    UI development library. Facebook and an open-source developer community run
    it. Although React is a library rather than a language, it is widely used in
    web development. The library first appeared in May 2013 and is now one of
    the most commonly used frontend libraries for web development.
  </p>
</div>
```
