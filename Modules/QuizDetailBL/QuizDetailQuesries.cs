using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.QuizDetailBL
{
    public static class QuizDetailQuesries
    {
        public static async Task<QuizDetail> GetByIdAsync(this DbSet<QuizDetail> fdSet, int quizId)
        {
            return await fdSet
                .Include(x => x.Question)
                .Include(x => x.Options)
                .SingleAsync(x => x.Id == quizId);
        }
    }
}
