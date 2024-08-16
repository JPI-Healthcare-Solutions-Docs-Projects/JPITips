# JPI Tips Electron Application

![2024-05-1315-23-24-ezgif com-video-to-gif-converter](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/0e0202f0-6be5-4090-b2d1-46e68d3bb46e)

## Table of Contents
**[Latest Updates](#patch-notes)**<br>
**[Future Features](#future-features)**<br>
**[Manual Installation Instructions](#manual-installation-instructions)**<br>
**[Building the Application](#building-the-application)**<br>
- **[Phase 0: Describing the Problem and solution statement](#phase-0-describing-the-problem-and-solution-statement)**<br>
- **[Phase 1: Application Mock Up and Workflow](#phase-1-application-mock-up-and-workflow)**<br>
- **[Phase 2: Initializing the Project](#phase-2-initializing-the-project)**<br>
- **[Phase 3: Building Features](#phase-3-building-features)**<br>
- **[Phase 4: Refactoring](#phase-4-refactoring)**<br>

**[Download Demo](#download-link)**<br>

##

### Patch Notes

#### Understanding the Project's Version Control:

1.1 = Feature Update

1.0.1 = Bug Update

1.0.1A = Bug child Update

#### Update 5/13/2024:

I am about 50% complete with the project before Production Deployment. All that are left are smaller tasks that will take no more than 2-3 days to complete.

- [x] Designing the application solution
- [x] Designing Styling
- [x] Creating Core Function
- [x] Implementing Styling
- [x] Implementing Settings Page
- [ ] Style the Settings Page
- [ ] Review with Marketing Team and Get List of Tips from Tech Team
- [ ] Refactoring and Optimization
- [ ] Auto Update Module

Estimated Timeline to Deployment:
- Completed MVP: 5/14/2024
- Beta Test Phase Start: 5/31/2024

[Demo Video (5/9/2024)](https://drive.google.com/file/d/1SHbzely6DuURx0wq9AohfuXIlmkuUmQu/view?usp=sharing)

##

### Future Features

#### In-Production Features Patch 1.1
- Store Product and Practice State in Persistent Storage
- Have a Loading Bar while Assets are rendering
- Styling the Settings Bar

#### Future Patches TODO:
- Refactoring Types
- Refactoring all components and pages
- Setting up Github Publish
- Set up IPC Listeners for Panel Connection

##

### Manual Installation Instructions

Prerequisites: <br>
- Node (LTS) <br>
- Visual Studio Code (LTS) <br>

1. Clone this repo
2. Follow the instructions [Visual Studo Git Introduction](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git)
3. Open a new terminal and type:
   <pre>
   npm install
   </pre>
4. Run the application by typing the following in the terminal:
   <pre>
   npm run start
   </pre>

##

### Building the Application:

#### Phase 0: Describing the Problem and solution statement

##### Identifying the problem

The Acquisition software did not have clear and intuitive prompts for error messages, and lack of an FAQ for troubleshooting. Some context is that the Acquisition software is built by the JPI Branch in Korea.

Other issues we face with this:
- The Market in Asia differs from the market in North and South America.
- JPI Korea support infrastructure is through dealers, where we are the first line of support for our dealers.

##### The solution

To compensate for the lack of control we have with our acquisiton software, we moved in a direction of implementing our own software that will run concurrently with the acquisition.

##

#### Phase 1: Application Mock Up and Workflow

##### Project Structure

Following the Atom Design:
https://bradfrost.com/blog/post/atomic-web-design/

Atoms: Hold basic building blocks such as buttons, input fields, titles, subtitles, etc...

Molecules: Contain Groups of atoms functioning together as one unit

Organisms: Contains Groups of Molecules builing a larger group component

Pages: Consumes the Organisms to complete the full page functionality

Benefits for using the Atom Design Structure:
- Clear and concise Modularity
- Scalable Structure

##### Desinging a mock up of the tips window:

![image](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/f0ca3994-bfe3-47a1-af32-bafb9b3586b9)

![image](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/216601eb-1dde-4fcd-b443-387c4622eb41)

We designed the Mock-Up in the shoes of the typical doctor that will use our acquisition software. We wanted to make it as concise yet user-friendly as possible. Adding a close button instead of the X button in the window bar, adding progression in the dots below the tips, and creating a background to play with the contrast, brightness and focus of the content.

##### Gathering Assets used in the mockup:

![image](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/90fb9876-ce09-4c44-89a7-571853725d21)

By Organizing the assets and constructing an intuitive structure makes it easier to utilize assets and change them as we need in the future

#

#### Phase 2: Initializing the Project

###### Creating and Adding JIRA Tasks to the JIRA Board

Creating the timeline for the project:

![image](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/d83583f0-378e-470b-b35a-0a14bd71bfd4)

![image](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/11099f0d-f347-44b9-979a-e066346ca9a6)

When adding Tasks, I require to specify where in the timeline the task is designated to.

I make sure to specify what type of task it is:
- Fundemantal
- Feature
- Refactor
- Testing

Example: Fundamental: Setting Up webpack

Lets say the task code is: JTWP-14
<br>
Then the github branch name is: fundamental/JTWP-14

#### Phase 3: Building Features

##### Core principles

- Build the application before pushing to github
- Make sure the branch name and code worked on is focusing ONLY on the JIRA Task
- Building small and modular pull requests related to a JIRA Task
- Review code before making the pull request
- Test the code (Still trying to master tdd)

#### Phase 4: Refactoring

Theres always room to improve!
- code readability
- documentation
- code modularity
- clean code

##

### Download Link

[Version 1.0.0.0](https://drive.google.com/drive/folders/1pCKURAY2Aaj84w_QtZfpuUYxyrZ_P2Wc?usp=sharing)

