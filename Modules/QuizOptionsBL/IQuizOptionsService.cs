using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using OnlineQuizWebApp.Modules.QuizOptionsBL;

namespace OnlineQuizWebApp.Modules.QuizOptionBL
{
    public interface IQuizOptionsService
    {
        public Task<List<QuizOptionsDtos.QuizOptionsDto>> GetAll();
        public Task<QuizOptionsDtos.QuizOptionsDto> GetById(int quizoptionId);
        public Task<List<QuizOptionsDtos.QuizOptionsDto>> GetByQuizDetailId(int quizDetailId);
        public Task AddOption(QuizOptionsDtos.CreateQuizOptions dto);
        public Task DeleteOption(int optionId);
    }
}
