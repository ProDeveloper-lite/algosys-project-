using Microsoft.AspNetCore.Mvc;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.QuestionDetailBL;
using OnlineQuizWebApp.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Controllers
{
    public class QuestionDetailApiController : ApiControllerBase
    {
        private readonly IQuestionDetailService _service;

        public QuestionDetailApiController(IQuestionDetailService service)

        {
            _service = service;
        }
        [HttpGet]
        public async Task<List<QuestionDetail>> GetAll()
        {
            return await _service.GetAll();
        }
        [HttpGet("{QuestionDetailId}")]
        public async Task<QuestionDetail> GetById(int QuestionDetailId)
        {
            return await _service.GetById(QuestionDetailId);
        }
    }
}
