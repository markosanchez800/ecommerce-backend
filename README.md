# Ecommerce Backend

## Description
This project was created to navigate the backend of a online shop. Using sequelize and mySQL the database can be dynamically added onto to display new items, deleted from to get rid of products, edited to update product information, and viewed to see all data by utilizing the different API endpoints and routes.

## Installation
DOWNLOAD NODE.JS FROM [HERE](https://nodejs.dev/download) IF NOT ALREADY INSTALLED
```
npm install sequelize
```
```
npm install mysql2
```
```
npm install dotenv
```
```
npm install express
```
TO START APPLICATION, FIRST
INITIALIZE DATABASE IN MYSQL, THEN 
```
npm run seeds THEN npm run start
```

## Technologies Used
- JavaScript - Used to write all the code, make use of the installed npm packages and give app its general functionality
- MySQL - Used to hold/create databases that contain all of the information being utilized
- Sequelize - Used to build all the models, and generally control, edit and navigate the mySQL database
- Node.js - Used to run application from the command line so that all processes can run through javascript
- Github - Used to track all working changes and push meaningful commits
- Express - Middleware used to control requests made by application, navigate created routes, and send responses
- dotenv - Used to hide private user information in an environment file while still being accessible


## Walkthrough Video
[Video](https://www.youtube.com/watch?v=6BkSH-hcks8&ab_channel=markosanchez)

## Code Snippet 
Route used to get a specific category based on its ID (primary key) that appears in the url request
```
router.get('/:id', async (req, res) => {
  try{
    const catData = await Category.findByPk(req.params.id,{
      include:[
        Product
      ],
    });
    if(!catData){
      res.status(404).json({message:"No category matching your selection, try again"});
    }
    console.log(catData);
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});
```

## Author Links
- [LinkedIn](https://www.linkedin.com/in/marko-sanchez-800)
- [GitHub](https://github.com/markosanchez800)
