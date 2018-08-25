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

        private void NormalizeModel(DrinkModel dModel)
        {
            if (dModel.count < 0)
                dModel.count = 0;
            if (dModel.price < 0)
                dModel.price = 0;
        }

        public DrinksController(VendingContext context)
        {
            db = context;
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
        public IActionResult Post([FromBody]DrinkModel dModel)
        {
            
            if (ModelState.IsValid)
            {
                NormalizeModel(dModel);
                db.DrinksList.Add(dModel);
                db.SaveChanges();
                return Ok(dModel);
            }
            return BadRequest(ModelState);
        }

        // PUT api/<controller>
        [HttpPut]
        public IActionResult Put([FromBody]DrinkModel dModel)
        {
            if (dModel != null)
            {
                if (this.db.DrinksList.Any(x => x.id == dModel.id))
                {
                    NormalizeModel(dModel);
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
            DrinkModel dModel = db.DrinksList.FirstOrDefault(x => x.id == id);
            if (dModel != null)
            {
                db.DrinksList.Remove(dModel);
                db.SaveChanges();
                return Ok(id);
            }   
            return NotFound(id);
        }
    }
}
