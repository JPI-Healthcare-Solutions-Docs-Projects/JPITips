# JPI Tips Electron Application

### Table of Contents
**[Latest Updates](#patch-notes)**<br>
**[Installation Instructions](#installation-instructions)**<br>
**[Usage Instructions](#usage-instructions)**<br>
**[Building the Application](#building-the-application)**<br>
- **[Phase 0: Describing the Problem and solution statement](#phase-0-describing-the-problem-and-solution-statement)**<br>
- **[Phase 1: Application Mock Up and Workflow](#phase-1-application-mock-up-and-workflow)**<br>
- **[Phase 2: Initializing the Project](#phase-2-initializing-the-project)**<br>
- **[Phase 3: Building Features](#phase-3-building-features)**<br>
- **[Phase 4: Refactoring](#phase-4-refactoring)**<br>

## Patch Notes

#### Update 5/13/2024:

I am about 50% complete with the project before Production Deployment. All that are left are smaller tasks that will take no more than 2-3 days to complete.

- [x] Designing the application solution
- [x] Designing Styling
- [x] Creating Core Function
- [x] Implementing Styling
- [ ] Implementing Settings Page
- [ ] Style the Settings Page
- [ ] Review with Marketing Team and Get List of Tips from Tech Team
- [ ] Refactoring and Optimization
- [ ] Auto Update Module

Estimated Timeline to Deployment:
- Completed Production App: 5/14/2024
- Beta Test Phase Start: 5/15/2024

Demo Video (5/9/2024):
https://drive.google.com/file/d/1SHbzely6DuURx0wq9AohfuXIlmkuUmQu/view?usp=sharing







## Building the Application:

### Phase 0: Describing the Problem and solution statement

### Identifying the problem

The Acquisition software did not have clear and intuitive prompts for error messages, and lack of an FAQ for troubleshooting. Some context is that the Acquisition software is built by the JPI Branch in Korea.

Other issues we face with this:
- The Market in Asia differs from the market in North and South America.
- JPI Korea support infrastructure is through dealers, where we are the first line of support for our dealers.

### The solution

To compensate for the lack of control we have with our acquisiton software, we moved in a direction of implementing our own software that will run concurrently with the acquisition.

#

### Phase 1: Application Mock Up and Workflow

#### Project Structure

Following the Atom Design:
https://bradfrost.com/blog/post/atomic-web-design/

Atoms: Hold basic building blocks such as buttons, input fields, titles, subtitles, etc...

Molecules: Contain Groups of atoms functioning together as one unit

Organisms: Contains Groups of Molecules builing a larger group component

Pages: Consumes the Organisms to complete the full page functionality

Benefits for using the Atom Design Structure:
- Clear and concise Modularity
- Scalable Structure

#### Desinging a mock up of the tips window:

![image](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/f0ca3994-bfe3-47a1-af32-bafb9b3586b9)

![image](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/216601eb-1dde-4fcd-b443-387c4622eb41)

We designed the Mock-Up in the shoes of the typical doctor that will use our acquisition software. We wanted to make it as concise yet user-friendly as possible. Adding a close button instead of the X button in the window bar, adding progression in the dots below the tips, and creating a background to play with the contrast, brightness and focus of the content.

#### Gathering Assets used in the mockup:

![image](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/90fb9876-ce09-4c44-89a7-571853725d21)

By Organizing the assets and constructing an intuitive structure makes it easier to utilize assets and change them as we need in the future

#

### Phase 2: Initializing the Project

### Enforcing Coding Standard Rules (for myself)

#### Project Guidelines

#### Dependency Restrictions:

Rule 1: Any dependency that needs to be installed must provide following:
Show that dependency function is not available in native
Provide justification of why we need this dependency
Provide alternative dependencies and justify reasoning of not choosing alternative
Provide Pro and Con of dependency efficiency in application

Rule 2: All PR with dependencies that deviate from Production will be closed

Rule 3: Dependency must be: active within a reputable community, well documented, and ongoing updates

#### Pull Request Restrictions:

Rule 1: PR must correlate to a ticket on JIRA
PR with changes unrelated to Ticket will not be merged. This includes CSS Styling! Do not add styling unless Ticket request styling changes. Only implement functionality if the ticket is regarding a feature

Rule 2: Unrelated PR will be closed and can potentially be re-addressed as a github issue or proposal for a creation of new task on JIRA
Collaborator must provide justification on why the change must be made, or the issue that they encountered

Rule 3: PR must pass all checks in order to remain open.
If PR does not pass check due to a bug, Collaborator must create a new github issue instead of a PR.

Rule 4: All PR must include tests that cover the changes you've made in your work.

Rule 5: Write readable code – keep functions small and modular and name variables descriptively.

Rule 6: Document your code thoroughly.

Rule 7: Make sure all the existing tests pass by running package.json test command

#### Branch Restrictions:

Rule 1: Branch name MUST have following naming convention: 
{TypeOfTicket}/{JIRA Ticket Number}

Example:
Branch name: feature/ticket-9
(the branch MUST start with a lowercase - git ruling) 

#### Code Review Restrictions:

Rule 1: Code Review must be thorough:
Review if any additional dependencies were added

End Game
Review the time complexity of implementation
If non optimal solution is created, requested change must include the optimized strategy for implementation

#### JIRA Task Restrictions:

Rule 1: Jira in progress Tasks must be free from dependency injections
No two in progress JIRA Task should depend on each other to be completed

Rule 2: Jira tasks that are high level or large tickets, must be modularized into smaller tickets if possible
Github Branches will be named after the child tickets

### Creating and Adding JIRA Tasks to the JIRA Board

Creating the timeline for the project:

![image](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/d83583f0-378e-470b-b35a-0a14bd71bfd4)

![image](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/11099f0d-f347-44b9-979a-e066346ca9a6)

When adding Tasks, I require to specify where in the timeline the task is designated to.

I make sure to specify what type of task it is:
- Fundemantal
- Feature
- Refactor
- Testing

#### Example: Fundamental: Setting Up webpack
Lets say the task code is: JTWP-14
<br>
Then the github branch name is: fundamental/JTWP-14

### Phase 3: Building Features

#### Core principles

- Build the application before pushing to github
- Make sure the branch name and code worked on is focusing ONLY on the JIRA Task
- Building small and modular pull requests related to a JIRA Task
- Review code before making the pull request
- Test the code (Still trying to master tdd)

### Phase 4: Refactoring

Theres always room to improve!
- code readability
- documentation
- code modularity
- clean code
