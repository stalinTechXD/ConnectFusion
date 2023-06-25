# Express Contact App

This is an Express.js application that serves as a contact app, allowing users to add and delete contact entries consisting of names and phone numbers. The application utilizes MongoDB as its persistent database.

## Features

- **Add Contact:** Users can add a contact entry by providing a name and phone number through a user-friendly interface.
- **Delete Contact:** Users can remove a contact entry by selecting the corresponding entry from the contact list.
- **MongoDB Integration:** The application leverages MongoDB, a NoSQL database, for storing and retrieving contact information persistently.

## Prerequisites

Before running the application, ensure that the following prerequisites are met:

- Node.js and npm are installed on your system.
- MongoDB is installed and running.

## Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install the dependencies:

## Configuration

Ensure that you have set up the MongoDB connection details in the application's configuration file. Modify the `config.js` file and update the MongoDB connection URL according to your setup.

```javascript
// config.js

module.exports = {
mongoURI: 'mongodb://localhost:27017/contact-app',
};
 

## Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request.



