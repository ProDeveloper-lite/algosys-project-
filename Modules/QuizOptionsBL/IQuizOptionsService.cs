using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineQuizWebApp.DataLayer.QuizDL;

namespace OnlineQuizWebApp.Modules.QuizOptionBL
{
    public interface IQuizOptionsService
    {
        Task<List<QuizOptions>> GetAll();       
        Task<QuizOptions> GetById(int quizoptionId);
    }
}
