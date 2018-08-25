using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DrinksServiceApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DrinksServiceApi.Controllers
{
    [Route("api/[controller]")]
    public class VendingController : Controller
    {
        VendingContext db;

        public VendingController(VendingContext context)
        {
            db = context;
            if (!db.VendingModels.Any())
            {
                db.VendingModels.Add(new VendingModel { cash = 500, blocked1 = false, blocked2 = false, blocked5 = false, blocked10 = false });
                db.SaveChanges();
            }
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<VendingModel> Get()
        {
            return db.VendingModels.ToList();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public VendingModel Get(int id)
        {
            return db.VendingModels.ToArray()[id];
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>
        [HttpPut]
        public IActionResult Put([FromBody]VendingModel vModel)
        {
            if (vModel != null)
            {
                if (this.db.VendingModels.Any(x => x.id == vModel.id))
                {
                    if (vModel.cash < 0)
                        vModel.cash = 0;
                    db.VendingModels.Update(vModel);
                    db.SaveChanges();
                    return Ok(vModel);
                } else
                {
                    return NotFound();
                }
            } else
            {
                return BadRequest();
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
