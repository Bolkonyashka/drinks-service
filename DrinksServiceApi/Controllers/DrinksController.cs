using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DrinksServiceApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DrinksServiceApi.Controllers
{
    [Route("api/[controller]")]
    public class DrinksController : Controller
    {
        VendingContext db;

        public DrinksController(VendingContext context)
        {
            this.db = context;
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<DrinkModel> Get()
        {
            return db.DrinksList.ToList();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>
        [HttpPut]
        public IActionResult Put([FromBody]DrinkModel dModel)
        {
            if (dModel != null)
            {
                if (this.db.DrinksList.Any(x => x.id == dModel.id))
                {
                    if (dModel.count < 0)
                        dModel.count = 0;
                    if (dModel.price < 0)
                        dModel.price = 0;
                    db.DrinksList.Update(dModel);
                    db.SaveChanges();
                    return Ok(dModel);
                }
                else
                {
                    return NotFound();
                }
            }
            else
            {
                return BadRequest();
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            DrinkModel dModel = new DrinkModel();
            dModel.id = id;
            db.DrinksList.Remove(dModel);
            return Ok(id);
        }
    }
}
