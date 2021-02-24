
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.ModuleHelper;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.QuizDetailBL
{
    public interface IQuizDetailService
    {
        public Task<List<QuizDetailDtos.QuizDetailDto>> GetAll();
        public Task<List<QuizDetailDtos.QuizDetailDto>> GetBySubject(int subjectId);
        public Task<QuizDetailDtos.QuizDetailDto> GetById(int quizId);
        public Task<QuizDetailDtos.QuizDetailDto> Create(QuizDetailDtos.CreateQuizDetail quizDetailDto);
        public Task<QuizDetailDtos.QuizDetailDto> Update(QuizDetailDtos.QuizDetailDto quizDetailDto);
        public Task Delete(int quizDetailId);
      
    }
}
