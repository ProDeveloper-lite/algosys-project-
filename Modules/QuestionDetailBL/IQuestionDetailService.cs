using OnlineQuizWebApp.DataLayer.QuizDL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.QuestionDetailBL
{
    public interface IQuestionDetailService
    {
        Task<List<QuestionDetail>> GetAll();
        Task<QuestionDetail> GetById(int questionDetailId);
    }
}
