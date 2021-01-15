
using OnlineQuizWebApp.DataLayer.QuizDL;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.QuizDetailBL
{
   public interface IQuizDetailService
    {
        public Task<List<QuizDetail>> GetAll();
        public Task<QuizDetail> GetById(int quizId);
    }
}
