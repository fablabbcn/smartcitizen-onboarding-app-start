# Smart Citizen Onboarding

The Smart Citizen onboarding. This project is a means to alleviate the issue of abandonment in [IoT devices](https://en.wikipedia.org/wiki/Internet_of_things) related to [citizen science and civil sensing](https://en.wikipedia.org/wiki/Citizen_science). This onboarding was originally developed for the [Making Sense](http://making-sense.eu/) project as a means to test the effectiveness of building communities around these grassroots initiatives. Currently supporting the [Smart Citizen API](https://github.com/fablabbcn/smartcitizen-api) and the [Smart Citizen Kit 2.X](https://github.com/fablabbcn/smart-citizen-kit-21).

This is a web app that aims to solve key issues in the setup of environmental sensors within grassroots communities by fostering ownership, creating context, showing playful animations and simplifying language. This experience helps reduce the bottleneck of non-technical citizens installing IoT devices. Here is the current [link to live-deployment](https://start.smartcitizen.me/)

## Development

We use an (old_ish_) number of `node.js` tools to initialize and test the web app. You must have `node.js` and its package manager (`npm`) installed. 
You can get them from [http://nodejs.org/](http://nodejs.org/). You need a version `>= 9.8.0` (You can use `nvm` to get the right version).

### Clone the project

Clone the repository using:

```
git clone git@github.com:fablabbcn/smartcitizen-onboarding-app-start.git
cd smartcitizen-onboarding-app-start
```

### Install dependencies

Install by running: `npm install`

### Use NPM tasks

* `npm start` to launch a browser sync server on your source files.
* `npm run dev` to build the application in development mode.
* `npm run build` to build the application in production mode.
* `npm run deploy` to deploy the application to Github Pages.
* `npm run extract` to extract the translations from the JSON and the app.

**Warning:**

If you can't get some packages to install due to a `https` error in github:

```
git config --global url."https://".insteadOf git://
```

### Support and issues

* Forum [forum.smartcitizen.me](http://forum.smartcitizen.me)

### Credits

This work has received funding from the European Union's Horizon 2020 research and innovation program under the grant agreement No. 688620

[![DOI](https://zenodo.org/badge/74163605.svg)](https://zenodo.org/badge/latestdoi/74163605)
