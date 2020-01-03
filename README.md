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

### Contributing

In order to merge a PR, the branch will need to pass linting and typechecking.  The style guide is extended from AirBnB's.  To set up local checks, run the following:
- `npm i -g eslint`
- `npm i -g typescript`
Typescript must be version >= 3.7.3.  If you are upgrading Typescript in VS Code, make sure to select which TS you're using by going to a .ts or .tsx file and clicking the version number to the right of the "Typescript React" notation in the bottom right of the screen (the blue bar).

Then, before you submit the PR, you can run
- `npm run lint`
- `npm run typechecking`
from root.  These will give detailed descriptions of any breaking issues. If you want a more verbose output including warnings, run
- `eslint --ext .tsx,.ts,.js .`

Warnings will not prevent a merge.

### Dev notes

If using VS Code, we recommend the following extensions:
- ESLint
- TSLint
- GitLens
- Code Spell Checker

If you are ever having trouble running the app after pulling an update, try
- `npm run reset`
from root.  This will delete `/node_modules` and `package-lock.json`, and run `npm install` again.  Also try uninstalling the Expo app from your device, and running
- `expo start --clear`
to clear the Expo cache.

We are using the [Elegant Icon Font](https://www.elegantthemes.com/blog/resources/elegant-icon-font) set of icons in this project.  Use this through the `elements/Icon` component.  To add a new icon, go to the link above, and find its HTML code - something i.e. `&#x6a;`.  Open `elements/Icon/fontMap.ts`.  This is a hash in the format `'icon name': <unicode values>`.  Give your icon a name for a key.  Next convert the HTML character to Unicode - from `&#x6a;` to `\u006a`.  To get the unicode value for your character:

1. Start with `&#x6a;`
2. Trim `&#x` from the head of the value, and the semicolon from the tail.  You now have `6a`
3. Add zeros on the left side until your string is 4 characters long.  This gives you `006a`
4. Now add the unicode marker `\u` to the head.  You now have `\u006a`!

Let's take an example with formatting that looks slightly different.  The same process is followed, this is just included for the sake of clarity.

1. Start with `&#xe000;`
2. Trim `&#x` from the head of the value, and the semicolon from the tail.  You now have `e000`
3. You already have 4 characters, so no change needed in this step.
4. Add `\u` to the head.  You finish with `\ue000`.

This is the value in your hash entry, which now looks like this:

`lock: '\ue000',`

Now when you want to use this icon, you can do so by importing the Icon component and inserting it thusly:

`<Icon name="lock">`

which defaults to a fontSize of 50, but can also be passed a custom `style` prop from your component.
