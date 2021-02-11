using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.QuizDetailBL
{
    public static class QuizDetailQuesries
    {
        public static async Task<QuizDetail> GetByIdAsync(this DbSet<QuizDetail> fdSet, int quizId)
        {
            return await fdSet
                .Include(x => x.Options)
                .SingleAsync(x => x.Id == quizId);
        }

        public static async Task<List<QuizDetail>> GetBySubject(this DbSet<QuizDetail> fdSet, int subjectId)
        {
            return await fdSet
                .Where(x => x.SubjectId == subjectId)
                .ToListAsync();
        }
    }
}
