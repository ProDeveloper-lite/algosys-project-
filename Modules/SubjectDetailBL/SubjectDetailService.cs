
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.SqlDbUtils;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.SubjectDetailBL
{
    public class SubjectDetailService : ISubjectDetailService
    {
        private readonly IMapper _mapper;
        private readonly AppDbContext _dbContext;

        public SubjectDetailService(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }
        public async Task<List<SubjectDetailDtos.SubjectDetailDto>> GetAll()
        {
            var sub = await _dbContext.SubjectDetail.ToListAsync();
            return _mapper.Map<List<SubjectDetailDtos.SubjectDetailDto>>(sub);
        }
    }
}
