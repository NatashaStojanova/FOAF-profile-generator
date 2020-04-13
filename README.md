## Web programming and Web Based Systems project, Faculty of Computer Science and Engineering - Skopje

### Create, explore and parse your FOAF profile

  The main idea behind this project is to give the client the ability to **create their own FOAF profile, explore the profile and translate it from one syntax to another**  *(example: RDF/XML to TURTLE)*.

  The first part of the project is FOAF profile generator. A user can create their profile by entering personal information as well as information about their friends, social networks and work.
After clicking the **FOAF ME** button, a profile written in RDF syntax will be generated.

-The second part of the project is the FOAF explorer. The FOAF Explorer tries to present the information in a human-readable format, currently by way of direct transformations of the raw RDF/XML to XHTML complete with referenced images and links to other data.

-The third part of the project is FOAF translator. With this, the user can parse his profile by selecting the correct input and output format.

## How to start the project?
### 1. Clone this repository
### 2. Enter the *frontend* folder - open a terminal - type: `npm install`  and then type: `npm start`
### 3. Open IntelliJ (or other IDE) - File - Open - open folder *wpbs*.
### 4. Connect to the database. *(for this project I used MySQL)*
### 5. Run






## **IMPORTANT**
> In /wpbs/src/main/java/mk/ukim/finki/natashastojanova/wpbs/web/controllers/PersonController,
> you have to change "localPath" variable to your local path, in order to save files and manipulate with them.
