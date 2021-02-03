using Microsoft.AspNetCore.Mvc;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.QuizDetailBL;
using OnlineQuizWebApp.Utilities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Controllers
{
    public class QuizDetailApiController: ApiControllerBase
    {
        private readonly IQuizDetailService _service;

        public QuizDetailApiController(IQuizDetailService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<List<QuizDetailDtos.QuizDetailDto>> GetAll()
        {
            return await _service.GetAll();
        }

        [HttpGet("{quizId}")]
        public async Task<QuizDetailDtos.QuizDetailDto> GetById(int quizId)
        {
            return await _service.GetById(quizId);
        }

        [HttpGet("{subject}")]
        public async Task<List<QuizDetailDtos.QuizDetailDto>> GetBySubject(QuizEnums.Subject subject)
        {
            return await _service.GetBySubject(subject);
        }
    }
}
