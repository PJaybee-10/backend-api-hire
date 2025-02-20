<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/PJaybee-10/backend-api-hire">
    <img src="https://lh3.googleusercontent.com/d/1WVrwo9yY-SQ7rh7SpYUOvykp1hWVyTNo" alt="Logo" width="400px">
  </a>

  <h3 align="center">Peworld Hire : Backend Hire Job</h3>

  <p align="center">
    Create a Node.js app for building hire job RESTful APIs using Express.
    <br />
    <a href="#table-of-contents"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://peworld-hire.herokuapp.com/">View Web Service</a>
    
  </p>
</div>

<!-- TABLE OF CONTENTS -->
## Table of Contents
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setup-env-example">Setup .env example</a></li>
      </ul>
    </li>
    <li><a href="#rest-api">REST API</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#related-project">Related Project</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
Create a Node.js app for building hire job RESTful APIs using Express.

### Built With
This app was built with some technologies below:
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [JSON Web Tokens](https://jwt.io/)
- [Nodemailer](https://nodemailer.com/about/)
- [PostgreSQL](https://www.postgresql.org/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Google APIs](https://github.com/googleapis/google-api-nodejs-client)
- [Socket.io](https://socket.io/)
- and other

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* [Node.js](https://nodejs.org/en/download/)

### Requirements
* [Node.js](https://nodejs.org/en/)
* [Postman](https://www.getpostman.com/) for testing
* [Database](./blanja.sql)

### Installation

- Clone the Repo
```
git clone https://github.com/PJaybee-10/backend-api-hire
```
- Go To Folder Repo
```
cd hire-job-api
```
- Install Module
```
npm install
```
- Make a new database and import [peworld.sql](./blanja.sql)
- <a href="#setup-env-example">Setup .env</a>
- Type ` npm run dev` To Start Development
- Type ` npm run start` To Start Production

<p align="right">(<a href="#top">back to top</a>)</p>

### Setup .env example

Create .env file in your root project folder. 
Note: I put this env for you to navigate on the details on my API

```env
# app
APP_NAME=
NODE_ENV=
PORT=
API_URL=
APP_CLIENT=

# database
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=

# jwt
JWT_SECRET=
JWT_EXPIRED=

# google
EMAIL_FROM=
EMAIL_USER=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
REDIRECT_URI=
GMAIL_REFRESH_TOKEN=
DRIVE_REFRESH_TOKEN=
```

<p align="right">(<a href="#top">back to top</a>)</p>

## REST API

You can view my Postman collection [here](https://www.postman.com/warped-shadow-374852/workspace/hire-job/overview)
</br>
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/19659051-464b712c-0bd0-4453-a821-c407960b798b?action=collection%2Ffork&collection-url=entityId%3D19659051-464b712c-0bd0-4453-a821-c407960b798b%26entityType%3Dcollection%26workspaceId%3D7351a91a-7ccc-45ce-9e08-da0d427bb1ba)

<p align="right">(<a href="#top">back to top</a>)</p>


1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## Related Project
:rocket: [`Backend Peworld Hire`](https://github.com/PJaybee-10/backend-api-hire)

:rocket: [`Frontend Peworld Hire`](https://github.com/PJaybee-10/recruitment-developer)

:rocket: [`Web Service`](https://peworld-hire.herokuapp.com/)

:rocket: [`Demo Peworld Hire`](https://bit.ly/peworld-hire)

<p align="right">(<a href="#top">back to top</a>)</p>

## License
Distributed under the [MIT](/LICENSE) License.

<p align="right">(<a href="#top">back to top</a>)</p>

