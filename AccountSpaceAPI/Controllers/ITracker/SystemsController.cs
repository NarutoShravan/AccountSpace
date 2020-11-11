using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ITracker.Entitys.Models;
using Microsoft.AspNetCore.Authorization;

namespace AccountSpaceAPI.Controllers.ITracker
{
    [Authorize]
    [Route("api/itracker/[controller]")]
    [ApiController]
    public class SystemsController : ControllerBase
    {
        private readonly TrackerContext _context;

        public SystemsController(TrackerContext context)
        {
            _context = context;
        }

        // GET: api/Systems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrackerSystems>>> GetTrackerSystems()
        {
            return await _context.TrackerSystems.ToListAsync();
        }

        // GET: api/Systems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TrackerSystems>> GetTrackerSystems(int id)
        {
            var trackerSystems = await _context.TrackerSystems.FindAsync(id);

            if (trackerSystems == null)
            {
                return NotFound();
            }

            return trackerSystems;
        }

        // PUT: api/Systems/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrackerSystems(int id, TrackerSystems trackerSystems)
        {
            if (id != trackerSystems.SysId)
            {
                return BadRequest();
            }

            _context.Entry(trackerSystems).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrackerSystemsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Systems
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<TrackerSystems>> PostTrackerSystems(TrackerSystems trackerSystems)
        {
            if (ModelState.IsValid)
            {
                if (_context.TrackerSystems.Any(x => x.SysName == trackerSystems.SysName))
                {                   
                    return Conflict("System name already exsists");
                }
                else
                {
                    _context.TrackerSystems.Add(trackerSystems);
                    await _context.SaveChangesAsync();
                }
            }    
            return CreatedAtAction("GetTrackerSystems", new { id = trackerSystems.SysId }, trackerSystems);
        }

        // DELETE: api/Systems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TrackerSystems>> DeleteTrackerSystems(int id)
        {
            var trackerSystems = await _context.TrackerSystems.FindAsync(id);
            if (trackerSystems == null)
            {
                return NotFound();
            }

            _context.TrackerSystems.Remove(trackerSystems);
            await _context.SaveChangesAsync();

            return trackerSystems;
        }

        private bool TrackerSystemsExists(int id)
        {
            return _context.TrackerSystems.Any(e => e.SysId == id);
        }
    }
}
