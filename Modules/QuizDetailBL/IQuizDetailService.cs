
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.QuizDetailBL
{
   public interface IQuizDetailService
    {
        public Task<List<QuizDetailDtos.QuizDetailDto>> GetAll();
        public Task<QuizDetailDtos.QuizDetailDto> GetById(int quizId);
    }
}
