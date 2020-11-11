using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AccountSpaceAPI.AppModels
{
    public class ApplicationUser : IdentityUser
    {
        //[Column(TypeName = "nvarchar(150)")]
        //public string FullName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string UserId { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string FirstName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string LastName { get; set; }

        
        [Column(TypeName = "int")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AppId { get; set; }

        [Column(TypeName = "bit")]
        public bool IsActive  { get; set; }


    }
}
