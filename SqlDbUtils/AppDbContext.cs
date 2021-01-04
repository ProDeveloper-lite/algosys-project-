using System.Data.Common;
using System.IO;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;

namespace OnlineQuizWebApp.SqlDbUtils
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public class AppDbContext: IdentityDbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
          : base(options)
        {
        }
        public DbSet<EnglishQuiz> EnglishQuizs { get; set; }

    }
}
