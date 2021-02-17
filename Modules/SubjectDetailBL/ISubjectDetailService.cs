
using OnlineQuizWebApp.Modules.ModuleHelper;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.SubjectDetailBL
{
    public interface ISubjectDetailService
    {
        public Task<List<ListType.ListItem>> GetAll();
        public Task<ListType.ListItem> Create(SubjectDetailDtos.CreateSubjectDetailDto dto);
        public Task Delete(int subjectId);
    }
}
