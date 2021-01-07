using Microsoft.AspNetCore.Mvc;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.Quiz.EnglishQuizBL;
using OnlineQuizWebApp.Utilities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Controllers
{
    public class EnglishQuizApiController: ApiControllerBase
    {
        private readonly IEnglishQuizService _service;

        public EnglishQuizApiController(IEnglishQuizService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<List<EnglishQuiz>> Get()
        {
            return await _service.GetAll();
        }
    }
}
