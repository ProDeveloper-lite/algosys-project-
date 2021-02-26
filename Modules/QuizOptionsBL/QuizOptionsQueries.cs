using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.QuizOptionsBL
{
    public static class QuizOptionsQueries
    {
        public static async Task<List<QuizOptions>> GetByQuizDetailIdAsync(this DbSet<QuizOptions> dbSet, int quizDetailId)
        {
            return await dbSet
                .Where(x => x.QuizDetailId == quizDetailId)
                .ToListAsync();
        }
    }
}
