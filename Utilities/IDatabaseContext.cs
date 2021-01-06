using Cqrs.Repositories.Queries;
using System;
using OnlineQuizWebApp.SqlDbUtils;
using Microsoft.EntityFrameworkCore;
using SqlKata.Execution;

namespace OnlineQuizWebApp.Utilities
{
    public interface IDatabaseContext : IDisposable
    {
        AppDbContext CreateContext();
        DbContextOptions<AppDbContext> CreateOptions();
        SqlKata.Execution.QueryFactory CreateQueryFactory();
    }
}
