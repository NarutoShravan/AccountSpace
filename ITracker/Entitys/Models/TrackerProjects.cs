using System;
using System.Collections.Generic;

namespace ITracker.Entitys.Models
{
    public partial class TrackerProjects
    {
        public int ProjectId { get; set; }
        public int SubSysId { get; set; }
        public string ProjectName { get; set; }
        public string ProjectDesc { get; set; }
        public bool? IsActive { get; set; }

        public virtual TrackerSubSystems SubSys { get; set; }
    }
}
