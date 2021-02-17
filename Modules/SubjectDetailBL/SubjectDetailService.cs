
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.ModuleHelper;
using OnlineQuizWebApp.SqlDbUtils;
using System.Collections.Generic;
using System.Linq;
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
        public async Task<List<ListType.ListItem>> GetAll()
        {
            var sub = await _dbContext.SubjectDetail.ToListAsync();
            return _mapper.Map<List<ListType.ListItem>>(sub);
        }

        public async Task<ListType.ListItem> Create(SubjectDetailDtos.CreateSubjectDetailDto dto)
        {
            var entity = _mapper.Map<SubjectDetail>(dto);
            _dbContext.SubjectDetail.Add(entity);
            await _dbContext.SaveChangesAsync();
            return _mapper.Map<ListType.ListItem>(entity);
        }

        public async Task Delete(int subjectId)
        {
            var subject = _dbContext.SubjectDetail.Single(m => m.Id == subjectId);
            _dbContext.SubjectDetail.Remove(subject);
            await _dbContext.SaveChangesAsync();
        }
    }
}
