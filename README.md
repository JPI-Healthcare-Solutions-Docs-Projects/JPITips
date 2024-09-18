# JPI Tips Electron Application

![Demo GIF](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/0e0202f0-6be5-4090-b2d1-46e68d3bb46e)

## Table of Contents

- [Latest Updates](#latest-updates)
- [Future Features](#future-features)
- [Installation Instructions](#installation-instructions)
- [Building the Application](#building-the-application)
  - [Phase 0: Describing the Problem and Solution Statement](#phase-0-describing-the-problem-and-solution-statement)
  - [Phase 1: Application Mock-Up and Workflow](#phase-1-application-mock-up-and-workflow)
  - [Phase 2: Initializing the Project](#phase-2-initializing-the-project)
  - [Phase 3: Building Features](#phase-3-building-features)
  - [Phase 4: Refactoring](#phase-4-refactoring)
- [Download Demo](#download-demo)

---

## Latest Updates

#### Understanding the Project's Version Control:

- **1.1** = Feature Update
- **1.0.1** = Bug Update
- **1.0.1A** = Bug Child Update

The project is currently **50% complete** before the production deployment.

**Progress:**

- [x] Designing the application solution
- [x] Designing styling
- [x] Creating core function
- [x] Implementing styling
- [x] Implementing settings page
- [ ] Style the settings page
- [ ] Review with the marketing team and get a list of tips from the tech team
- [ ] Refactoring and optimization
- [ ] Auto-update module

[Demo Video](https://drive.google.com/file/d/1SHbzely6DuURx0wq9AohfuXIlmkuUmQu/view?usp=sharing)

---

## Future Features

### In-Production Features (Patch 1.1)

- Store product and practice state in persistent storage
- Implement a loading bar while assets are rendering
- Style the settings bar

### Future Patches TODO

- Refactor types
- Refactor all components and pages
- Set up GitHub publishing
- Set up IPC listeners for panel connection

---

## Installation Instructions

**Prerequisites:**

- Node (LTS)
- Visual Studio Code (LTS)

**Steps:**

1. Clone this repository.
2. Follow the instructions: [Visual Studio Git Introduction](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git)
3. Open a new terminal and type:
   ```bash
   npm install
   ```
4. Run the application by typing the following in the terminal:
   ```bash
   npm run start
   ```
---

## Building the Application

### Phase 0: Describing the Problem and Solution Statement

#### Identifying the Problem

The acquisition software lacked clear, intuitive prompts for error messages and did not include an FAQ for troubleshooting. The software was built by the JPI branch in Korea, where we act as the first line of support for dealers.

Challenges:

- The market in Asia differs from North and South America.
- JPI Korea’s support infrastructure works through dealers, where we provide the first line of support.

#### The Solution

We are developing our own software that will run concurrently with the acquisition software to address the limitations.

---

### Phase 1: Application Mock-Up and Workflow

#### Project Structure

We follow the **Atomic Design** methodology:

- **Atoms**: Basic building blocks (buttons, input fields, titles, etc.)
- **Molecules**: Groups of atoms functioning together
- **Organisms**: Groups of molecules forming a larger unit
- **Pages**: Full-page functionality consuming organisms

**Benefits:**

- Clear and concise modularity
- Scalable structure

#### Designing the Mock-Up:

![Mock-Up](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/f0ca3994-bfe3-47a1-af32-bafb9b3586b9)

We designed the mock-up with doctors in mind, focusing on a concise yet user-friendly experience. Features include a close button instead of the window's "X" button, progression dots below the tips, and a background to highlight the content.

#### Gathering Assets:

![Assets](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/90fb9876-ce09-4c44-89a7-571853725d21)

Organizing assets intuitively ensures easy future modifications.

---

### Phase 2: Initializing the Project

#### Creating and Adding JIRA Tasks

We created a project timeline using JIRA:

![JIRA Timeline](https://github.com/chitangchin/JPI-Tips-Window-App/assets/96362668/d83583f0-378e-470b-b35a-0a14bd71bfd4)

For each task, we specify its place in the timeline and categorize it as:

- Fundamental
- Feature
- Refactor
- Testing

**Example:**

- Task code: JTWP-14
- Branch name: `fundamental/JTWP-14`

---

### Phase 3: Building Features

#### Core Principles

- Build the application before pushing to GitHub.
- Ensure the branch name and code align with the JIRA task.
- Create small, modular pull requests.
- Review the code before making a pull request.
- Test the code (still mastering TDD).

---

### Phase 4: Refactoring

There’s always room to improve in:

- Code readability
- Documentation
- Modularity
- Clean code principles

---

## Download Demo

[Version 1.0.0.0](https://drive.google.com/drive/folders/1pCKURAY2Aaj84w_QtZfpuUYxyrZ_P2Wc?usp=sharing)
