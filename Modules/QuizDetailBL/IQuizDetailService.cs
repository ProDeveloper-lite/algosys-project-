
using OnlineQuizWebApp.DataLayer.QuizDL;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.QuizDetailBL
{
    public interface IQuizDetailService
    {
        public Task<List<QuizDetailDtos.QuizDetailDto>> GetAll();
        public Task<List<QuizDetailDtos.QuizDetailDto>> GetBySubject(QuizEnums.Subject subject);
        public Task<QuizDetailDtos.QuizDetailDto> GetById(int quizId);
        public Task<QuizDetailDtos.QuizDetailDto> Create(QuizDetailDtos.QuizDetailDto quizDetailDto);
        public Task<QuizDetailDtos.QuizDetailDto> Update(QuizDetailDtos.QuizDetailDto quizDetailDto);
        public Task Delete(int quizDetailId);
    }
}
