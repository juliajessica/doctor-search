<p align="center"><img width=27% src="https://github.com/juliajessica/template-webpack-karma/blob/master/media/epicodus_logo.png"></p>

# _<p align="center">Doctor Lookup: Using The BetterDoctor API</p>_

#### _<p align="center">Assignment for Epicodus</p>_

#### _**<p align="center">By: Julia Sheremet</p>**_

<p align="center">  
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
<a href="https://github.com/RichardLitt/standard-readme"><img src="https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square"></a>
</p>

## <span style="color:#74875d;">Description</span>

_This webpage application is designed where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in your city (Portland or Seattle depending on where you are) who can treat their medical issue. Cool!_

_This project uses Asynchrony and APIs, and Promises learned from week two at Epicodus. All dependencies required are included in this project._

## <span style="color:#74875d;">Setup/Installation Requirements</span> :computer:

* Clone repository on your local computer.
* If you already have Node, Homebrew, and Karma installed, then skip to **Install Dependencies**.

  #### Node: Windows / Linux Installation Instructions
  To install `Node` on other systems, go to the <a href="https://nodejs.org/en/">Node website</a>, download and install the appropriate installer for your operating system.

  #### Node: OSX Installation Instructions
  On OS X systems, install `Node.js` through Homebrew with the following command in your home directory:
    ```sh
    $ brew install node
    ```
  Confirm that Node version is 4.0.x or higher and npm should be 3.6.x or higher:
  ```sh
    $ node -v
    $ npm -v
  ```
  #### Homebrew Installation
  If you do not have `Homebrew` installed yet, you may install it by copying and pasting this command:
  ```sh
    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```
  Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:
  ```sh
    $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
  ```
  #### Karma Installation
  If you do not have `Karma` installed globally, then run the following:
  ```sh   
    $ npm install -g karma-cli
   ```
  #### Install dependencies
  Enter the following code in the command line to install all dependencies:
  ```sh
    $ npm install
  ```

  #### Working with the project in Node:
  To build and bundle the project in webpack run the following:
  ```sh
    $ npm run build
  ```
  To run the local test server:
  ```sh
    $ npm run start
  ```
  To run test in `Karma`:
  ```sh
    $ npm test
  ```
    #### Install Copy Webpack Plugin
    ```sh
    npm i -D copy-webpack-plugin
    ```

## <span style="color:#74875d;">Known Bugs</span>

_Feel free to email me at [juliajessicasher@gmail.com](mailto:juliajessicasher@gmail.com) if you run into any issues or have questions, ideas or concerns. Please enjoy and feel free to share your opinion, constructive criticism, or comments of my work. :+1:_

## <span style="color:#74875d;">Technologies Used</span>

| Development dependencies | Front end dependencies |
| :------------ | :------------- |
| Webpack | CSS (Bootstrap) |
| Eslint | JavaScript (JQuery) |
| Karma & Jasmine | Popper
| Babel-loader |  |
| CSS-loader & Style-loader | | |


### <span style="color:#74875d;">Specs</span>
| Behavior | Input | Output |
| :-------------     | :------------- | :------------- |
| The program will take in a medical symptom and return a doctor | Input: "Sore Throat" | Output: "Primary Dr, John Doe" |
| The program will take in a medical symptom and return a variety of doctors | Input: "Sore Throat" | Output: "Primary Dr, Portland Oregon", "Primary Dr, Clackamas Oregon" |
| The program will take in a specific specialist inquiry and return a variety of doctors | Input: "Primary Doctor" | Output: "Primary Dr, John Smith", "Primary Dr, Mark Johnson", "Primary Dr, Loretta Jones" |
| For each specialist the program will return a first name, last name, address, phone number, website, and whether on not the doctor is accepting new patients | Input: "Primary Doctor" | Output: "Primary Dr, John Smith", 342 NE 32nd Ave, Portland Oregon, 97232. Phone Number: 971-342-7532, https://www.johnsmtihsaveslives.com, John Smith is now accepting new patients. |
| The program will result in an error from a insufficient API call | Input: "Primary Doctor, Judy Marquette" | Output: "Sorry, there is an Error loading your request!" |
| If no doctors meet the search criteria the program will application will return a notification that states that no doctors meet the criteria. | Input: "Sore Throat: Primary Doctor, Mark Smith in Beaverton, OR" | Output: "Sorry, but there are no doctors that meet this criteria" |

### <span style="color:#74875d;">License</span>

Copyright (c) 2018 ****_Julia Sheremet_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
