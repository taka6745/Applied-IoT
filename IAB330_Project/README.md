# PWA for IOT Solution

This is the progressive web application for assessment 2 of IAB330 Applied IOT & Mobile Technologies.

## Setup

Clone the repository to your local directory.

```bash
git clone git@github.com:Stay-Classy/IAB330_Project.git
```
Run the following command in both the iot-client-side & iot-server-side directories to install the required packages.

```bash
npm install
```

## Usage

Run the following command for both of the previously mentioned directories in separate terminals.

The client side application will run on port 3000

The server side will run on 3001


```bash
npm start
```

## Development

For the client side application using react we will be using React Bootstrap for styled components.
Documentation can be found here [React Bootstrap](https://react-bootstrap.github.io/)

Documentation for [React](https://reactjs.org/)

Documentation for [Express](https://expressjs.com/)

## UML Sequence Diagram

Using Draw.io we will be able to collaborate on creating the diagram.

Use this link to access the shared document https://drive.google.com/file/d/1XztMa55TsT3siOldhUoqlINsgWvRrA8k/view?usp=sharing

## Node Red

Access my instance of Node Red using the following link [Node Red](http://ec2-54-165-250-180.compute-1.amazonaws.com:1880/#flow/3419e64a3f182611)

If there are any issues with the connection just let me know.

## Notes

nodemon has been installed on the sever side for development purposes so that the server will restart automatically when changes are saved.

Morgan logger has been setup to record http requests and is located in /log/access.log