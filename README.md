# Green-Lifestyle-s2i-FinalProject

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/kilar95/Green-Lifestyle-s2i-FinalProject.git">
    <img src="https://user-images.githubusercontent.com/104167965/214048722-6852a762-0ab5-47d9-9497-980075d4f4c9.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">How Green Is Your Lifestyle?</h3>

  <p align="center">
    <br />
    <a href="https://github.com/kilar95/Green-Lifestyle-s2i-FinalProject"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/kilar95/Green-Lifestyle-s2i-FinalProject/issues">Report Bug</a>
    ·
    <a href="https://github.com/kilar95/Green-Lifestyle-s2i-FinalProject/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <a href="#libraries">Libraries</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is the final project of the start2impact Full Stack Development course. <br>
The app provides you with some information about what you could to in order to make your lifestyle sustainable and green.
Taking the quiz you will be able to know the "green lifestyle" score associated with your current way of living based on your habits.
The score ranges from 0 to 40, the higher the score, the more your lifestyle is green and suntainable.
After taking the quiz you can learn new ways to live even a greener life.

This project was created using the following technologies.

#### Client

- React JS
- Redux (for managing and centralizing application state)
- React-router-dom (To handle routing)
- Axios (for api calls)

#### Server

- Express
- Mongoose
- JWT (for user authentication)
- bcryptjs (for data encryption)

#### Database

- MongoDB (MongoDB Atlas)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Libraries

- Express
- dotenv
- Mongoose
- React Router
- [react.js]

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

In order to proceed you should have Node.js installed.
If you don't, you can download it here: <a href="https://nodejs.org/it/download/">Node.js</a>
After installing Node you are ready to go!

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kilar95/Green-Lifestyle-s2i-FinalProject.git
   ```
2. Install NPM packages for both the client/app and server folders
   ```sh
   npm install
   ```
3. Start the React app by typing this in the associated terminal
   ```sh
   npm start
   ```
4. Connect you MongoDB database
   If you don't see an .env file in the server folder, create one and the insert an enviroment variable called ATLAS_URI, which should be assigned to your MongoDB connection string.
   Example: ATLAS_URI="mongodb+srv://...
5. Start the server by typing 'npm start' in the associated terminal
   ```sh
   npm start
   ```
6. Use the app!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Ilaria Bertoldi - [Linkedin](https://www.linkedin.com/in/ilaria-bertoldi-837a20176/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Best README Template](https://github.com/othneildrew/Best-README-Template#readme)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/kilar95/Green-Lifestyle-s2i-FinalProject.svg?style=for-the-badge
[contributors-url]: https://github.com/kilar95/Green-Lifestyle-s2i-FinalProject/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kilar95/Green-Lifestyle-s2i-FinalProject.svg?style=for-the-badge
[forks-url]: https://github.com/kilar95/Green-Lifestyle-s2i-FinalProject/network/members
[stars-shield]: https://img.shields.io/github/stars/kilar95/Green-Lifestyle-s2i-FinalProject.svg?style=for-the-badge
[stars-url]: https://github.com/kilar95/Green-Lifestyle-s2i-FinalProject/stargazers
[issues-shield]: https://img.shields.io/github/issues/kilar95/Green-Lifestyle-s2i-FinalProject.svg?style=for-the-badge
[issues-url]: https://github.com/kilar95/Green-Lifestyle-s2i-FinalProject/issues
[license-shield]: https://img.shields.io/github/license/kilar95/Green-Lifestyle-s2i-FinalProject.svg?style=for-the-badge
[license-url]: https://github.com/kilar95/Green-Lifestyle-s2i-FinalProject/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ilaria-bertoldi-837a20176/
[product-screenshot]: ./src/assets/og-image.PNG
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
