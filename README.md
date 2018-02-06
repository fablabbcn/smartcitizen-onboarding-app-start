# Making Sense Onboarding



The Marking Sense onboarding. This project is a means to alleviate the issue of abandonment in [IOT devices](https://en.wikipedia.org/wiki/Internet_of_things) related to [citizen science and civil sensing](https://en.wikipedia.org/wiki/Citizen_science). This onboaridng is being used by [Making Sense](http://making-sense.eu/) as a means to test the effectiveness of building communities around these grassroots initiatives. Currently supporting the [SmartCitizen API](https://github.com/fablabbcn/smartcitizen) and the new [SmartCitizen Kit 1.5](https://github.com/fablabbcn/Smart-Citizen-Kit-1.5).

This is a web app that aims to solve key issues in the setup of open data sensors within grassroots smart-city communities through developing cognitive goals, such as fostering ownership, creating context, showing playful animations and simplifying language. This multi-lingual experience helps reduce the bottleneck of non-technical citizens installing IOT devices. This tool is currently being used in an EU Research Project.

Here is the current [link to live-deployment](https://onboarding.making-sense.eu/wizard/landing?lang=cat)

Updates are handled [through this fork](https://github.com/fablabbcn/onboarding-app) and then moved down to the master


### Prerequisites

You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test the Web App. You must have node.js and
its package manager (npm) installed. You can get them from [http://nodejs.org/](http://nodejs.org/).

Also gulp: `npm install -g gulp` (with `sudo` if you are using Mac).
### Clone the project

Clone the repository using:

```
git clone https://github.com/fablabbcn/smartcitizen-onboarding.git
cd smartcitizen-web
```

### Install dependencies
* Install tools to manage and test the application: `npm install.`
* No need of `bower install`, `npm install` will take care of it.

### Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
* `gulp deploy` to publish the project to Github pages (gh-pages branch).

Note: in case you see something like:
> Error: Command failed: fatal: unable to read c6a8d370f3e95d9110eca4a03b704bd8940ca40b

Run:
`rm -Rf $(node -e "console.log(require('path').join(require('os').tmpdir(), 'tmpRepo'))")`


*This is a Work in process... Final documentation coming soon!*

### Support and issues

* Forum [forum.smartcitizen.me](http://forum.smartcitizen.me)

### Credits

This work has received funding from the European Union's Horizon 2020 research and innovation program under the grant agreement No. 688620

[![DOI](https://zenodo.org/badge/74163605.svg)](https://zenodo.org/badge/latestdoi/74163605)
