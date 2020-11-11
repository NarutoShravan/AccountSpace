using ITracker.Entitys.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text;

namespace ITracker
{
    public static class ITrackerDependency
    {
        public static IServiceCollection AddITrackerDependency(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<TrackerContext>(options =>
            options.UseSqlServer(configuration.GetConnectionString("IdentityConnection")));

            return services;
        }
    }
}
