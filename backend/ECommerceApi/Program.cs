var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


// Enable CORS to allow requests from Angular (running on localhost:4200)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp", policy =>
        policy.WithOrigins("http://localhost:4200")  // Allow Angular app from localhost:4200
              .AllowAnyMethod()                     // Allow all HTTP methods (GET, POST, etc.)
              .AllowAnyHeader());                   // Allow any headers
});

builder.Services.AddControllers();

var app = builder.Build();


app.UseHttpsRedirection();  // Redirect HTTP to HTTPS
app.UseCors("AllowAngularApp");  // Apply the CORS policy to all requests

app.MapControllers();  // Map all controllers

app.Run();


// Program.cs
/* using ECommerceApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

builder.Services.AddControllers();

var app = builder.Build();

// Use CORS policy
app.UseCors("AllowAll");

app.MapControllers();

app.Run(); */
