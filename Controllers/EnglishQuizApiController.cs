using Microsoft.AspNetCore.Mvc;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.QuizDetailBL;
using OnlineQuizWebApp.Utilities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Controllers
{
    public class EnglishQuizApiController: ApiControllerBase
    {
        private readonly IQuizDetailService _service;

        public EnglishQuizApiController(IQuizDetailService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<List<QuizDetail>> Get()
        {
            return await _service.GetAll();
        }
    }
}
