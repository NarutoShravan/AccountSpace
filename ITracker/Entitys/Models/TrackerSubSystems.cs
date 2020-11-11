using System;
using System.Collections.Generic;

namespace ITracker.Entitys.Models
{
    public partial class TrackerSubSystems
    {
        public TrackerSubSystems()
        {
            TrackerProjects = new HashSet<TrackerProjects>();
        }

        public int SubSysId { get; set; }
        public int SysId { get; set; }
        public string SubSysName { get; set; }
        public string SubSysDesc { get; set; }
        public bool? IsActive { get; set; }

        public virtual TrackerSystems Sys { get; set; }
        public virtual ICollection<TrackerProjects> TrackerProjects { get; set; }
    }
}
