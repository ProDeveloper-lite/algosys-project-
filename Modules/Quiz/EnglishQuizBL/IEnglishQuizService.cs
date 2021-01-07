using OnlineQuizWebApp.DataLayer.QuizDL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.Quiz.EnglishQuizBL
{
    public interface IEnglishQuizService
    {
        public Task<List<EnglishQuiz>> GetAll();
    }
}
