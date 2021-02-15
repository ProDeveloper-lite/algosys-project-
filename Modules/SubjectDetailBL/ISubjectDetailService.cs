
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.SubjectDetailBL
{
    public interface ISubjectDetailService
    {
        public Task<List<SubjectDetailDtos.SubjectDetailDto>> GetAll();
    }
}
