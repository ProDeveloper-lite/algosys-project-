using Microsoft.AspNetCore.Mvc;
using OnlineQuizWebApp.Modules.SubjectDetailBL;
using OnlineQuizWebApp.Utilities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Controllers
{
    public class SubjectDetailApiController : ApiControllerBase
    {
        private readonly ISubjectDetailService _service;

        public SubjectDetailApiController(ISubjectDetailService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<List<SubjectDetailDtos.SubjectDetailDto>> GetAll()
        {
            return await _service.GetAll();
        }
    }
}
