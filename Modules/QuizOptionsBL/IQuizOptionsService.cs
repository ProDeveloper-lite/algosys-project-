using System.Collections.Generic;
using System.Threading.Tasks;
using OnlineQuizWebApp.DataLayer.QuizDL;

namespace OnlineQuizWebApp.Modules.QuizOptionBL
{
    public interface IQuizOptionsService
    {
        // TODO: ganesh and ankita : change return-type
        Task<List<QuizOptions>> GetAll();       
        Task<QuizOptions> GetById(int quizoptionId);
    }
}
