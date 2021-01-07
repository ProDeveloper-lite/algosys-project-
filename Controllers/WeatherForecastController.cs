using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.Quiz.EnglishQuizBL;

namespace OnlineQuizWebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly IEnglishQuizService _service;

        public WeatherForecastController(IEnglishQuizService service)
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
