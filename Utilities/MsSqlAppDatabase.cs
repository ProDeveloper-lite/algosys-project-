using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.ModelHelper;
using OnlineQuizWebApp.SqlDbUtils;
using SqlKata.Compilers;
using System.Data.SqlClient;
using SqlKata.Execution;

namespace OnlineQuizWebApp.Utilities
{
    public class MsSqlAppDatabase : Disposable, IDatabaseContext
    {
        private readonly string _connString;
        public MsSqlAppDatabase(string connString)
        {
            _connString = connString;
        }

        public DbContextOptions<AppDbContext> CreateOptions()
        {
            return new DbContextOptionsBuilder<AppDbContext>()
                .UseSqlServer(_connString)
                .EnableSensitiveDataLogging()
                .EnableDetailedErrors()
                .Options;
        }

        public QueryFactory CreateQueryFactory()
        {
            return new SqlKata.Execution.QueryFactory(new SqlConnection(_connString), new SqlServerCompiler());
        }

        public AppDbContext CreateContext()
        {
            return new AppDbContext(CreateOptions());
        }

        protected override void Dispose(bool disposing)
        {
        }
    }
}
