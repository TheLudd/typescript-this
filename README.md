# typescript this

This project contains a file `lib/functions.js` with corresponding tests in `test/functions.js`. In the file you will find a few functions, all of them curried.

The goal of the project is to convert the files to TS while keeping the currying intact. When using the TS functions you should be informed of what types the parameters should be in.
If you apply a function partially, you will get another function back. This new function should also be understood by TS and TS should give you information about the parameters.

Examples:
```
map() // TS informs you that map expects a function and an array and will return an array

const inc = add(1)
inc() // TS informs you that inc expects a number and will return a number

const incAll = map(inc)
incAll() // TS informs you that it expects an array of numbers and will return an array of numbers
```

Expected results:

  * The above examples working and the tests still passing.
  * If it is not possible to have some or all of the functionality above, explan what the limitations are.

Also: the other files in the lib folder may be turned into TS if you want but it is not needed.

## tests

Run the tests with `yarn tests`. If you want a watcher, run `yarn test -w`
