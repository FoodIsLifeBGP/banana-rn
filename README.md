# THE BANANA APP: Donor App (React Native/Typescript)

## Installation (Mac/OSX)

Step 0 is to [install the backend](https://github.com/FoodIsLifeBGP/banana-rails).  Follow those instructions to make sure you have everything needed to install this repo (like the Xcode command line tools).

First we install NVM, Node, and the Expo CLI.

Go to your project's root folder in Terminal (`cd ~/Desktop/the-banana-app`) and run:

- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash`
- `nvm --version` (if this doesn't give an error, the previous command worked)
- `nvm install node`
- `npm i -g expo-cli`

Once those are complete, run:

- `git clone https://github.com/FoodIsLifeBGP/banana-rn && cd banana-rn`

From inside `banana-rn`, run:

- `npm i` (package installer)
- `expo start`

A tab in your web browser will open showing the Expo dashboard.  To open the app in the iOS Simulator, hit the link button marked `open in iOS Simulator`, on the left-hand side of the dashboard.  You can also follow the [Expo docs](https://docs.expo.io/versions/v33.0.0/workflow/up-and-running/#open-the-app-on-your-phone-or) to open the app on your phone, or the Android simulator.

When the app opens, you will see the login screen.  Assuming you are still running the [Rails server](https://github.com/FoodIsLifeBGP/banana-rails) in the background, you can log in as the sample donor (`donor@donor.com`, password: `donor`), or create a new account.

### The rest of The Banana App family:

#### [Backend](https://github.com/FoodIsLifeBGP/banana-rails)
#### [Client](https://github.com/FoodIsLifeBGP/banana-rn-client)
#### Admin (TBD)
