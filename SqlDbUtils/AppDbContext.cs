using System.Data.Common;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
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
        public DbSet<SubjectDetail> SubjectDetail { get; set; }
        public DbSet<QuizOptions> QuizOptions { get; set; }


        #region model-builder

        protected override void OnModelCreating(ModelBuilder builder)
        {
            EfConventions.CustomConventions(builder);
            base.OnModelCreating(builder);
            builder.QuizEfMapper();
            //  builder.ExamEfMapper();  going to be add
        }

        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            ChangeTracker.DetectChanges();
            return base.SaveChangesAsync(cancellationToken);
        }

        #endregion

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
