# W3D5_angular_asp_ecommerce

# Ecommerce

This project is a simple E-commerce application built with Angular for the frontend and ASP.NET Core for the backend. The application allows users to browse products, view detailed product information, add items to their shopping cart, and view the cart.

# Table of Contents
* Project Setup
* Frontend Setup (Angular)
* Backend Setup (ASP.NET Core)
* Running the Application
* Development Server
* Building
* Running Tests
* Additional Resources

## Project Setup
Prerequisites
Before setting up the project, make sure you have the following installed:

* Node.js and npm (for Angular)
* .NET SDK (for ASP.NET Core)
* Angular CLI (for Angular development)
* Visual Studio Code or your preferred editor
* To start a local development server, run:

# Frontend Setup (Angular)
1. Clone the Repository: First, clone the project repository:
```bash
git clone https://github.com/your-repo/ecommerce-app.git
cd ecommerce-app
```
2. Install Angular Dependencies: Install the required npm dependencies for Angular:
```bash
npm install
```
3. Run the Angular Application: To start the Angular development server, use:
```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Backend Setup (ASP.NET Core)
1. Clone the Repository: If you have not already cloned the backend repository, run:

```bash
git clone https://github.com/your-repo/ecommerce-backend.git
cd ecommerce-backend
```
2. Restore Dependencies: In the backend project folder, restore the dependencies:

```bash
dotnet restore
```
3. Run the ASP.NET Core Application: After restoring the dependencies, run the application:

```bash
dotnet run
```
This will start the backend server, and it will be available at https://localhost:5001/ (or a similar URL depending on your configuration).



## CORS Configuration

Ensure that CORS is enabled in your backend for Angular to make API calls. This is usually done in Program.cs in your ASP.NET Core application:
```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp", policy =>
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyMethod()
              .AllowAnyHeader());
});
```
This allows the frontend (running on http://localhost:4200) to make requests to the backend.

## Running 
Important: Run Both Backend and Frontend in Parallel
To run the application, you need to run both the backend (ASP.NET Core API) and frontend (Angular) projects at the same time.

1. Start the Backend (API):

Open a new terminal or command prompt window, navigate to your backend folder, and run:

```bash
dotnet run
```
This will start the ASP.NET Core backend, and it will be available at https://localhost:5001/ (or a similar URL).

2. Start the Frontend (Angular):

Open a new terminal or command prompt window, navigate to your frontend folder, and run:

```bash
ng serve
```
This will start the Angular frontend, and it will be available at http://localhost:4200/.

Once both servers are running, you can access the E-commerce application by navigating to http://localhost:4200/ in your browser.


# Development Server
To start the Angular development server:

```bash
ng serve
```
The frontend will be available at http://localhost:4200/.

# Building the Application
To build the Angular project for production, run:

```bash
ng build
```
This will generate the production-ready files in the dist/ directory.


# Running Tests
# Unit Tests
To run the unit tests for the Angular project, use the following command:

```bash
ng test
```
This will execute the unit tests using the Karma test runner.

# End-to-End Tests
For end-to-end tests, run:

```bash
ng e2e
```
This requires you to have an end-to-end testing framework set up.


## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
For more information on Angular, refer to the Angular Documentation.
For more information on ASP.NET Core, refer to the ASP.NET Core Documentation.
For more information on Angular CLI commands, refer to the Angular CLI Command Reference.

