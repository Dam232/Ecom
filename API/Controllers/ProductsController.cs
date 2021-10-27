using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Infrastructure.Data;

// using API.Data;
// using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;
            // _mapper = mapper;
            // _productTypeRepo = productTypeRepo;
            // _productBrandRepo = productBrandRepo;
            // _productsRepo = productsRepo;

        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()

        {
            // var spec = new ProductsWithTypesAndBrandsSpecification(productParams);

            // var countSpec = new ProductWithFiltersForCountSpecificication(productParams);

            // var totalItems = await _productsRepo.CountAsync(countSpec);

            // var products = await _productsRepo.ListAsync(spec);

            // var data = _mapper
            //     .Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);

            var products = await _context.Products.ToListAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<List<Product>>>  GetProduct(int id)

        {
            // var spec = new ProductsWithTypesAndBrandsSpecification(productParams);

            // var countSpec = new ProductWithFiltersForCountSpecificication(productParams);

            // var totalItems = await _productsRepo.CountAsync(countSpec);

            // var products = await _productsRepo.ListAsync(spec);

            // var data = _mapper
            //     .Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);

            var prodctby1 =  await _context.Products.FindAsync(id);
            return Ok(prodctby1);
        }

    }
}