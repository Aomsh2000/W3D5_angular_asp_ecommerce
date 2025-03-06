// Controllers/ProductsController.cs
using ECommerceApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        // Sample data for products
        private static readonly List<Product> Products = new List<Product>
        {
            new Product { Id = 1, Name = "Laptop", Description = "High-performance laptop", Price = 999.99M, ImageUrl = "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08464742.png" },
            new Product { Id = 2, Name = "Smartphone", Description = "Latest model smartphone", Price = 799.99M, ImageUrl = "https://m.media-amazon.com/images/I/51-F55B8dhL._AC_UF1000,1000_QL80_.jpg" },
            new Product { Id = 3, Name = "Headphones", Description = "Noise-cancelling headphones", Price = 199.99M, ImageUrl = "https://d1b5h9psu9yexj.cloudfront.net/57440/Anker-s-Soundcore-Space-One_20230829-151132_full.jpeg" }
        };

        // GET: api/products
        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            return Ok(Products);
        }

        // GET: api/products/{id}
        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
    }
}
