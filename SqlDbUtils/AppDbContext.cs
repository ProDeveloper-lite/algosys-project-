using System.Data.Common;
using System.IO;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;

namespace OnlineQuizWebApp.SqlDbUtils
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public class AppDbContext : IdentityDbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
          : base(options)
        {
        }

        public DbSet<QuizDetail> QuizDetail { get; set; }
        public DbSet<QuestionDetail> QuestionDetail { get; set; }
        public DbSet<QuizOptions> QuizOptions { get; set; }


        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();
            //ChangeTracker.SetPropertiesForCreate(_userId);
            //ChangeTracker.SetPropertiesForUpdate(_userId);
            return base.SaveChanges();
        }

        #region dbType
        public bool IsSqlServerDatabase => Database.IsSqlServer();
        public DbParameter GetDbParameterInstance()
        {
            if (IsSqlServerDatabase) { return new SqlParameter(); }
            throw new InvalidDataException("Not supported database : " + Database.ProviderName);
        }
        #endregion
    }
}
