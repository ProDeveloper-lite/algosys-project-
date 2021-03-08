using OnlineQuizWebApp.Utilities;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using OnlineQuizWebApp.Modules.QuizOptionBL;
using OnlineQuizWebApp.Modules.QuizOptionsBL;

namespace OnlineQuizWebApp.Controllers
{
    public class QuizOptionApiController : ApiControllerBase

    {
        private readonly IQuizOptionsService _service;
        public QuizOptionApiController(IQuizOptionsService service)
        {
            _service = service;
        }
        [HttpGet]
        public async Task<List<QuizOptionsDtos.QuizOptionsDto>> GetAll()
        {
            return await _service.GetAll();
        }


        [HttpGet("{quizoptionId}")]
        public async Task<QuizOptionsDtos.QuizOptionsDto> GetById(int quizoptionId)
        {
            return await _service.GetById(quizoptionId);
        }

        [HttpPost]
        public async Task AddOption(QuizOptionsDtos.CreateQuizOptions dto)
        {
            await _service.AddOption(dto);
        }
        [HttpPost("{optionId}")]
        public async Task DeleteOption(int optionId)
        {
            await _service.DeleteOption(optionId);
        }
    }
}
