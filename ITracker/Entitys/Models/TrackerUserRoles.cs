using System;
using System.Collections.Generic;

namespace ITracker.Entitys.Models
{
    public partial class TrackerUserRoles
    {
        public int UserRolesId { get; set; }
        public int AppId { get; set; }
        public int RolesId { get; set; }
        public bool? IsActive { get; set; }
    }
}
