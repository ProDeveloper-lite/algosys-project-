using OnlineQuizWebApp.Utilities;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.QuetionDetailBL;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;

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
        public async Task<List<QuizOptions>> GetAll()
        {
            return await _service.GetAll();
        }

        [HttpGet("{quizoptionId}")]
        public async Task<QuizOptions> GetById(int quizoptionId)
        {
            return await _service.GetById(quizoptionId);
        }
    }
}
