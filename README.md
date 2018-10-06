# iScape Onboarding

The iScape onboarding. This project is a means to alleviate the issue of abandonment in [IOT devices](https://en.wikipedia.org/wiki/Internet_of_things) related to [citizen science and civil sensing](https://en.wikipedia.org/wiki/Citizen_science). This onboaridng is being used by [Making Sense](http://making-sense.eu/) as a means to test the effectiveness of building communities around these grassroots initiatives. Currently supporting the [SmartCitizen API](https://github.com/fablabbcn/smartcitizen) and the new [SmartCitizen Kit 1.5](https://github.com/fablabbcn/Smart-Citizen-Kit-1.5).

This is a web app that aims to solve key issues in the setup of open data sensors within grassroots smart-city communities through developing cognitive goals, such as fostering ownership, creating context, showing playful animations and simplifying language. This multi-lingual experience helps reduce the bottleneck of non-technical citizens installing IOT devices. This tool is currently being used in an EU Research Project.

Here is the current [link to live-deployment](https://onboarding.iscape.smartcitizen.me/wizard/landing?lang=cat)

Updates are handled [through this fork](https://github.com/fablabbcn/onboarding-app) and then moved down to the master


### Prerequisites

You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test the Web App. You must have node.js and
its package manager (npm) installed. You can get them from [http://nodejs.org/](http://nodejs.org/).
You need a version `>= 9.8.0` (You can use `nvm` to get the right version).

### Clone the project

Clone the repository using:

```
git clone https://github.com/fablabbcn/smartcitizen-onboarding.git
cd smartcitizen-web
```

### Install dependencies
* Install by running: `npm install`

### Use NPM tasks

* `npm start` to launch a browser sync server on your source files.
* `npm run dev` to build the application in development mode.
* `npm run build` to build the application in production mode.
* `npm run deploy` to deploy the application to Github Pages.
* `npm run extract` to extract the translations from the JSON and the app.


### Support and issues

* Forum [forum.smartcitizen.me](http://forum.smartcitizen.me)

### Credits

This work has received funding from the European Union's Horizon 2020 research and innovation program under the grant agreement No. 688620

[![DOI](https://zenodo.org/badge/74163605.svg)](https://zenodo.org/badge/latestdoi/74163605)
