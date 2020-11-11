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
    public class ProjectsController : ControllerBase
    {
        private readonly TrackerContext _context;

        public ProjectsController(TrackerContext context)
        {
            _context = context;
        }

        // GET: api/Projects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrackerProjects>>> GetTrackerProjects()
        {
            return await _context.TrackerProjects.ToListAsync();
        }

        // GET: api/Projects/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TrackerProjects>> GetTrackerProjects(int id)
        {
            var trackerProjects = await _context.TrackerProjects.FindAsync(id);

            if (trackerProjects == null)
            {
                return NotFound();
            }

            return trackerProjects;
        }

        // PUT: api/Projects/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrackerProjects(int id, TrackerProjects trackerProjects)
        {
            if (id != trackerProjects.ProjectId)
            {
                return BadRequest();
            }

            _context.Entry(trackerProjects).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrackerProjectsExists(id))
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

        // POST: api/Projects
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<TrackerProjects>> PostTrackerProjects(TrackerProjects trackerProjects)
        {
            if (ModelState.IsValid)
            {
                if (_context.TrackerProjects.Any(x => x.SubSysId == trackerProjects.SubSysId && x.ProjectName == trackerProjects.ProjectName))
                {
                    return Conflict("Project name already exsists");
                }
                else
                {
                    _context.TrackerProjects.Add(trackerProjects);
                    await _context.SaveChangesAsync();
                }
            }
            return CreatedAtAction("GetTrackerProjects", new { id = trackerProjects.ProjectId }, trackerProjects);
        }

        // DELETE: api/Projects/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TrackerProjects>> DeleteTrackerProjects(int id)
        {
            var trackerProjects = await _context.TrackerProjects.FindAsync(id);
            if (trackerProjects == null)
            {
                return NotFound();
            }

            _context.TrackerProjects.Remove(trackerProjects);
            await _context.SaveChangesAsync();

            return trackerProjects;
        }

        private bool TrackerProjectsExists(int id)
        {
            return _context.TrackerProjects.Any(e => e.ProjectId == id);
        }
    }
}
