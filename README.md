# Book-Review-Application-with-React-and-Spring-Boot---MongoDB - Frontend

This project is a review application developed using React and Spring Boot, integrated with a MongoDB database. The application allows users to see the book information like author, genre and various photos of the book and to add reviews about the books.

## Features

- **Home Page:** Users can view book information including name, author, genre, and book poster. By clicking the reviews button, they will be directed to the book's reviews page.
- **Reviews Page:** Make and displays reviews associated with each book.

## Requirements
- **Node.js** 16 or later
- **npm (Node Package Manager)**
- **MongoDB:** Database management system

## Installation Instructions

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ipekgungor/Book-Review-Application-with-React-and-Spring-Boot---MongoDB-Frontend.git
2. Navigate to the Project Directory:
   ```bash
   cd Book-Review-Application-with-React-and-Spring-Boot---MongoDB-Frontend
3. Install Dependencies:
   ```bash
   npm install axios
   npm install bootstrap
   npm install react-bootstrap
   npm install @fortawesome/react-fontawesome
   npm install react-router-dom
   npm install @mui/material @emotion/react @emotion/styled
   npm install react-material-ui-carousel
4. Run the Application:
   ```bash
   npm start
      
## Contact
- **Developer:** İpek Güngör
- **Email:** ipekgungor2001@gmail.com
- **GitHub Profile:** ipekgungor

## Notes
- **Be careful about the node and npm versions.** My node version: v20.15.1 / My npm version: 10.4.0
- **You can find books.json in src/main/resources/data**
- **I solved the CORS problem using ngrok. You can find the configuration in the axiosConfig.js file. Ngrok allows you to create an account and start using it by entering the command ngrok http 8080.** 
