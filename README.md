# Multiscreen TV app template using ReactJS
A template repo to get started with Multiscreen TV apps using ReactJS.

## Getting Started
The project utilizes ReactJS for components and BabelJS for ES6/React code compilation support.

## Source Code Structure
- **src** (all uncompiled code and assets)
	- **tv**
		- **index.html** (staticaly copied upon build)
		- **index.js** (used as the entry point for mapping script dependencies)
		- **fonts** (staticaly copied upon build)
		- **images** (staticaly copied upon build)
		- **js** (compiled by babel using the index.js for dependency graphing upon build ... js and jsx files)
		- **styles** (compiled by lessc upon build using styles.less for the entry point)


## Building and Development
To build the app, clone the repo and run the following command:

```bash
$ npm install
```

The postinstall script will create an initial build. Gulp is used for all task including compiling scripts, styles, and assets.

### Gulp tasks
**Build the application**
```bash
$ gulp build
```

**Run the local test server**
```bash
$ gulp server (available at http://localhost:3000/(mobile|tv)
```

**Develop with livereload support**
Watches for src file changes and recompiles the needed files. This includes livereload support. You can install the livereload extension [here](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).
```bash
$ gulp watch (available at http://localhost:3000/
```
