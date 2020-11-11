using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ITracker.Entitys.Models
{
    public partial class TrackerContext : DbContext
    {
        public TrackerContext()
        {
        }

        public TrackerContext(DbContextOptions<TrackerContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TrackerProjects> TrackerProjects { get; set; }
        public virtual DbSet<TrackerSubSystems> TrackerSubSystems { get; set; }
        public virtual DbSet<TrackerSystems> TrackerSystems { get; set; }
        public virtual DbSet<TrackerUserRoles> TrackerUserRoles { get; set; }

      
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TrackerProjects>(entity =>
            {
                entity.HasKey(e => e.ProjectId)
                    .HasName("PK_Projects");

                entity.ToTable("Tracker_Projects");

                entity.Property(e => e.ProjectId).HasColumnName("Project_Id");

                entity.Property(e => e.ProjectDesc).HasColumnName("Project_Desc");

                entity.Property(e => e.ProjectName)
                    .IsRequired()
                    .HasColumnName("Project_Name");

                entity.Property(e => e.SubSysId).HasColumnName("Sub_Sys_Id");

                entity.HasOne(d => d.SubSys)
                    .WithMany(p => p.TrackerProjects)
                    .HasForeignKey(d => d.SubSysId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SubSystem_Project");
            });

            modelBuilder.Entity<TrackerSubSystems>(entity =>
            {
                entity.HasKey(e => e.SubSysId)
                    .HasName("PK_SubSystems");

                entity.ToTable("Tracker_SubSystems");

                entity.Property(e => e.SubSysId).HasColumnName("Sub_Sys_Id");

                entity.Property(e => e.SubSysDesc).HasColumnName("Sub_Sys_Desc");

                entity.Property(e => e.SubSysName)
                    .IsRequired()
                    .HasColumnName("Sub_Sys_Name");

                entity.Property(e => e.SysId).HasColumnName("Sys_Id");

                entity.HasOne(d => d.Sys)
                    .WithMany(p => p.TrackerSubSystems)
                    .HasForeignKey(d => d.SysId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_System_SubSystem");
            });

            modelBuilder.Entity<TrackerSystems>(entity =>
            {
                entity.HasKey(e => e.SysId)
                    .HasName("PK_Systems");

                entity.ToTable("Tracker_Systems");

                entity.Property(e => e.SysId).HasColumnName("Sys_Id");

                entity.Property(e => e.SysDesc).HasColumnName("Sys_Desc");

                entity.Property(e => e.SysName)
                    .IsRequired()
                    .HasColumnName("Sys_Name");
            });

            modelBuilder.Entity<TrackerUserRoles>(entity =>
            {
                entity.HasKey(e => e.UserRolesId)
                    .HasName("PK_UserRoles");

                entity.ToTable("Tracker_UserRoles");

                entity.Property(e => e.UserRolesId).HasColumnName("User_Roles_Id");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
