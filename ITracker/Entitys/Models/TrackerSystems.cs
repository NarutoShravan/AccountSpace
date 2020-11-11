using System;
using System.Collections.Generic;

namespace ITracker.Entitys.Models
{
    public partial class TrackerSystems
    {
        public TrackerSystems()
        {
            TrackerSubSystems = new HashSet<TrackerSubSystems>();
        }

        public int SysId { get; set; }
        public string SysName { get; set; }
        public bool? IsActive { get; set; }
        public string SysDesc { get; set; }

        public virtual ICollection<TrackerSubSystems> TrackerSubSystems { get; set; }
    }
}
