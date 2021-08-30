## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/RoryFielding/ZilchChallenge <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm i` in order to install dependencies and clean the git repo.<br />
5.  Run `npm i -g json-server` to install the server to be able to run the mock backend <br />
6.  Run `json-server --watch db.json --port 3001` - This will start the mock backend at `http://localhost:3001` <br />
7.  At this point you can run `npm start` to see the app at `http://localhost:3000`._
8.  To test the application, run `npm run test`;
9.  Run `npm run clean` to delete the app.