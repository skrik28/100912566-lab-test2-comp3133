# 100912566-lab-test2-comp3133 (SpaceX Launch Tracker)

This project is an Angular application developed for the COMP3133 Lab Test 2. It displays information about SpaceX launches fetched from the public SpaceX REST API (v3).

## Features

*   **Mission List:** Displays a list of all SpaceX launches, including flight number, name, year, details, rocket information, and patch image.
*   **Filter by Year:** Allows users to filter the launch list by the specific year of launch using the API.
*   **Mission Details:** Shows detailed information for a selected mission, including a larger patch image, full details, rocket info, and links to external resources (article, Wikipedia, video).
*   **Responsive Design:** Uses Angular Material components for a clean and adaptive user interface.
*   **Data Service:** Centralized service (`SpacexService`) for handling API requests.
*   **Data Interface:** Defines the structure of the mission data using a TypeScript interface (`Mission`).

## Technologies Used

*   [Angular](https://angular.io/) (v16+ recommended)
*   [Angular CLI](https://angular.io/cli)
*   [Angular Material](https://material.angular.io/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [RxJS](https://rxjs.dev/)
*   [SpaceX REST API (v3)](https://docs.spacexdata.com/?version=v3)
*   HTML5 / CSS3

## Prerequisites

Before you begin, ensure you have met the following requirements:

*   [Node.js](https://nodejs.org/) (LTS version recommended) - includes npm
*   [Angular CLI](https://angular.io/cli) installed globally (`npm install -g @angular/cli`)
*   [Git](https://git-scm.com/)

## Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/skrik28/100912566-lab-test2-comp3133.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd 1009125667-lab-test2-comp3133
    ```
3.  **Install NPM packages:**
    ```bash
    npm install
    ```

## Running the Application (Development)

Run the following command to start the Angular development server:

```bash
ng serve -o

This will build the application, start a development server, watch for file changes, and automatically open the application in your default browser at http://localhost:4200/.


Building for Production
To create an optimized production build, run:
bash

ng build --configuration production
# Or simply 'ng build' if 'production' is the default build configuration

The build artifacts will be stored in the dist/1234567-lab-test2-comp3133/ directory. These files are ready to be deployed to a static file server or hosting platform.


Deployment

This application has been deployed and is accessible online.

    Live URL: https://100912566-lab-test2-comp3133.vercel.app/
    Hosting Platform: Vercel

API Reference

This project utilizes the public SpaceX REST API (v3) for fetching launch data.

    Base URL: https://api.spacexdata.com/v3
    Endpoints Used:
        /launches (Get all launches)
        /launches?launch_year={year} (Filter launches by year)
        /launches?flight_number={flight_number} (Get specific launch by flight number)
    API Documentation: SpaceX API Documentation (v3)

Course Information

    Student ID: 100912566
    Course: COMP3133 - Full Stack Development II
    Assignment: Lab Test 2
