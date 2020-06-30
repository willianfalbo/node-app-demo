# TempApp (Backend API)
This is the TempApp Rest Api. 

# 1 - PRE-INSTALLATIONS
In order to use this project we need to install any package manager.
Yarn: Please access https://yarnpkg.com/ and find the installation steps.
Npm: Please access https://nodejs.org/ and find the installation steps.

# 2 - DOWNLOAD THE PACKAGES
Please run in the terminal `yarn` or `npm install`.

# 3 - RUNNING THIS PROJECT
Please run in the terminal `yarn dev` or `npm run dev`.

<!-- # 4 - DEBUGGING THIS PROJECT
Please stop any running process and then run in the terminal `yarn dev:debug` or `npm run dev:debug`. After that, press "Start Debugging". -->


# LIBRARIES AND FRAMEWORKS

## Sucrase (https://sucrase.io/)
In order to run the latest features of ES5+, we are using Sucrase instead of Babel (https://babeljs.io). 
It was needed to add `nodemon.json` file in the root folder.
NOTE: Sucrase will never produce code for old browsers like IE. Compiling code down to ES5 is much more complicated than any transformation that Sucrase needs to do.

\* THIS PROJECT WILL BE REMOVED
