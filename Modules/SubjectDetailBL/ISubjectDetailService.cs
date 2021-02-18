
using OnlineQuizWebApp.Modules.ModuleHelper;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.SubjectDetailBL
{
    public interface ISubjectDetailService
    {
        public Task<List<SubjectDetailDtos.SubjectDetailDto>> GetAll();
        public Task<List<ListType.ListItem>> GetAllForList();
        public Task<ListType.ListItem> Create(SubjectDetailDtos.CreateSubjectDetailDto dto);
        public Task Delete(int subjectId);
    }
}
