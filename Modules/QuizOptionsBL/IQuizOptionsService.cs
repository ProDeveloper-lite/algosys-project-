using System.Collections.Generic;
using System.Threading.Tasks;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.ModuleHelper;
using OnlineQuizWebApp.Modules.QuizOptionsBL;

namespace OnlineQuizWebApp.Modules.QuizOptionBL
{
    public interface IQuizOptionsService
    {
        // TODO: ganesh and ankita : change return-type
        public Task<List<QuizOptionsDtos.QuizOptionsDto>> GetAll();
        public Task<List<ListType.ListItem>> GetAllForList();
        public Task<QuizOptionsDtos.QuizOptionsDto> GetById(int quizoptionId);
    }
}
