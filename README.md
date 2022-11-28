# jest-learn
This repo is for learning Jest framework for testing JavaScript applications.


* create package.json file using `npm init --y`
* install jest library as dev dependency `npm i -D jest`.
* In react, jest will be automatically installed. No need of separate installation.
* Create a sample js file and write a simple function which returns addition of two numbers.

```
function additionn(a,b) {
    return a + b;
}
```
* After writing a function. Create a test file. Test file can be under folder names **__test__** folder or can be written inside the same container.
* file name should end with **test.js**. So that jest can able to identify files end with test.js are test files and able to run those.
* Test can be written in two ways.
    * List of tests (it or test)
    * Block of tests (describe)
* it or test means that it will execute a single test statement.
* describle means it will execute a bunch of tests added under describe.

it or test or describe all three api's accept two parameters.
* test name
* callback