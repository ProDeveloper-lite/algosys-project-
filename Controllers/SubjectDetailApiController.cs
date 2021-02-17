using Microsoft.AspNetCore.Mvc;
using OnlineQuizWebApp.Modules.ModuleHelper;
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
        public async Task<List<ListType.ListItem>> GetAll()
        {
            return await _service.GetAll();
        }

        [HttpPut]
        public async Task<ListType.ListItem> Create(SubjectDetailDtos.CreateSubjectDetailDto dto)
        {
            return await _service.Create(dto);
        }

        [HttpPost("{subjectId}")]
        public async Task Delete(int subjectId)
        {
            await _service.Delete(subjectId);
        }
    }
}
