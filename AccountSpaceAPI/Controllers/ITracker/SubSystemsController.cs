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
    public class SubSystemsController : ControllerBase
    {
        private readonly TrackerContext _context;

        public SubSystemsController(TrackerContext context)
        {
            _context = context;
        }

        // GET: api/SubSystems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrackerSubSystems>>> GetTrackerSubSystems()
        {
            return await _context.TrackerSubSystems.ToListAsync();
        }

        // GET: api/SubSystems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TrackerSubSystems>> GetTrackerSubSystems(int id)
        {
            var trackerSubSystems = await _context.TrackerSubSystems.FindAsync(id);

            if (trackerSubSystems == null)
            {
                return NotFound();
            }

            return trackerSubSystems;
        }

        // PUT: api/SubSystems/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrackerSubSystems(int id, TrackerSubSystems trackerSubSystems)
        {
            if (id != trackerSubSystems.SubSysId)
            {
                return BadRequest();
            }

            _context.Entry(trackerSubSystems).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrackerSubSystemsExists(id))
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

        // POST: api/SubSystems
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<TrackerSubSystems>> PostTrackerSubSystems(TrackerSubSystems trackerSubSystems)
        {
            if (ModelState.IsValid)
            {
                if (_context.TrackerSubSystems.Any(x => x.SysId == trackerSubSystems.SysId && x.SubSysName == trackerSubSystems.SubSysName))
                {
                    return Conflict("Sub-System name already exsists");
                }
                else
                {
                    _context.TrackerSubSystems.Add(trackerSubSystems);
                    await _context.SaveChangesAsync();
                }
            }               
            return CreatedAtAction("GetTrackerSubSystems", new { id = trackerSubSystems.SubSysId }, trackerSubSystems);
        }

        // DELETE: api/SubSystems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TrackerSubSystems>> DeleteTrackerSubSystems(int id)
        {
            var trackerSubSystems = await _context.TrackerSubSystems.FindAsync(id);
            if (trackerSubSystems == null)
            {
                return NotFound();
            }

            _context.TrackerSubSystems.Remove(trackerSubSystems);
            await _context.SaveChangesAsync();

            return trackerSubSystems;
        }

        private bool TrackerSubSystemsExists(int id)
        {
            return _context.TrackerSubSystems.Any(e => e.SubSysId == id);
        }
    }
}
