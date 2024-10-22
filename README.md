# cs465-fullstack
Full Stack Development with MEAN
This is an example project created using a MEAN (MongoDB, Express, Angular, and Node.js) stack to create a simple Single Page Application for Travlr Getaways, a travel site showcasing their different travel packages. 
This is a project from school, class: SNHU-CS-465.

<br>

**Please see the [Software Design Document](https://github.com/bgjschool2020/cs465-fullstack/blob/main/CS%20465%20Software%20Design%20Document.pdf) to see all the details on the project.** 


# Installing and Running the Project
## Needed Software - Prerequisites
- [MongoDB](https://mongodb.com/)
- [Express](https://expressjs.com/)
- [Angular](https://angular.io/)
- [Node.JS](https://nodejs.org/en/)
  
1. Open Powershell or another terminal

2. Install npm
   ```sh
   npm install npm@latest -g
   ```
   
3. Clone the repo
   ```sh
   gh repo clone bgjschool2020/cs465_fullstack
   ```
   
4. Change the directory
   ```sh
   cd ./travlr/app_admin
   ```
   
5. Install packages
   ```sh
   npm install
   ```
   
6. Change the directory and install packages there
   ```sh
   cd ..
   cd app_server
   npm install
   ```
   
7. Start the server
   ```sh
   npm start
   ```

8. Open another powershell or terminal instance and launch the Angular server
   ```sh
   cd ..
   cd app_admin
   ng serve
   ```
   
9. Open browser and launch the [main page](http://localhost:3002/)
10. Open a new tab and launch the [backend](http://localhost:4200/)


# What It All Looks Like
## The Angular Backend
Once logged in, this page will allow you you to add more trips to the database and display them on the frontend.
![image](https://github.com/user-attachments/assets/c9edfd0d-21e9-45fb-a1b0-4f4f8bf0702d)

<br>

*Login info will need to be added initially using [MongoDB Compass], creating a new user is not currently supported in app.*

![image](https://github.com/user-attachments/assets/3811ba02-52d4-4f31-ab08-83de1be710c7)

<br>

After logging in:

![image](https://github.com/user-attachments/assets/f3532307-6d62-476b-9dcd-4ff6e758d24e)

<br><br><br>

## The Express Page
### Home
![image](https://github.com/user-attachments/assets/31137bb7-3190-4ec4-b488-b4f588b761d0)

### Travel
![image](https://github.com/user-attachments/assets/10dc08f2-982e-460e-958b-d47f0cd95ad8)

 





   
   
