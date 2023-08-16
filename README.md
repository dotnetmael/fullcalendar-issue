
# FullCalendar Angular 15 SSR Issue

## Installation

```bash
git clone https://github.com/dotnetmael/fullcalendar-issue.git
cd fullcalendar-issue
npm i

```
## Run with server side rendering

```bash
# Command dev
npm run dev:ssr

# Command classic
npm run build:ssr && npm run serve:ssr
```

This error is show up : 
```
TypeError: Cannot read properties of undefined (reading 'cssRules')
    at appendStylesTo (/Users/dotnetmael/Documents/testSSr/fullcalendar-examples/angular15/dist/example/server/main.js:1:3407950)
    at /Users/dotnetmael/Documents/testSSr/fullcalendar-examples/angular15/dist/example/server/main.js:1:3407037
    at Map.forEach (<anonymous>)
    at injectStyles (/Users/dotnetmael/Documents/testSSr/fullcalendar-examples/angular15/dist/example/server/main.js:1:3407019)
    at Module.62762 (/Users/dotnetmael/Documents/testSSr/fullcalendar-examples/angular15/dist/example/server/main.js:1:3409615)
    at __webpack_require__ (/Users/dotnetmael/Documents/testSSr/fullcalendar-examples/angular15/dist/example/server/main.js:1:4346390)
    at Object.63370 (/Users/dotnetmael/Documents/testSSr/fullcalendar-examples/angular15/dist/example/server/main.js:1:6952)
    at __webpack_require__ (/Users/dotnetmael/Documents/testSSr/fullcalendar-examples/angular15/dist/example/server/main.js:1:4346390)
    at Object.84362 (/Users/dotnetmael/Documents/testSSr/fullcalendar-examples/angular15/dist/example/server/main.js:1:7961)
    at __webpack_require__ (/Users/dotnetmael/Documents/testSSr/fullcalendar-examples/angular15/dist/example/server/main.js:1:4346390)
```
