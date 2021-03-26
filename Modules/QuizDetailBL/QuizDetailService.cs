
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.ModuleHelper;
using OnlineQuizWebApp.SqlDbUtils;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.QuizDetailBL
{
    public class QuizDetailService : IQuizDetailService
    {
        private readonly IMapper _mapper;
        private readonly AppDbContext _dbContext;

        public QuizDetailService(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }
        public async Task<List<QuizDetailDtos.QuizDetailDto>> GetAll()
        {
            var quizs = await _dbContext.QuizDetail.ToListAsync();
            return _mapper.Map<List<QuizDetailDtos.QuizDetailDto>>(quizs);
        }

        public async Task<List<QuizDetailDtos.QuizDetailDto>> GetBySubject(int subjectId)
        {
            var quizs = await _dbContext.QuizDetail.GetBySubject(subjectId);
            return _mapper.Map<List<QuizDetailDtos.QuizDetailDto>>(quizs);
        }

        public async Task<QuizDetailDtos.QuizDetailDto> GetById(int quizId)
        {
            var quizDetail = await _dbContext.QuizDetail.FindAsync(quizId);
            return _mapper.Map<QuizDetailDtos.QuizDetailDto>(quizDetail);
        }

        public async Task Create(QuizDetailDtos.CreateQuizDetail dto)
        {
            var quizDetail = _mapper.Map<QuizDetail>(dto);
            quizDetail.IsActive = false;
            await _dbContext.QuizDetail.AddAsync(quizDetail);
            _dbContext.SaveChanges();

            var savedInstance = await _dbContext.QuizDetail.FindAsync(quizDetail.Id);
             _mapper.Map<ListType.ListItem>(savedInstance);
        }

        public async Task<QuizDetailDtos.QuizDetailDto> Update(QuizDetailDtos.QuizDetailDto quizDetailDto)
        {
            var detail = await _dbContext.QuizDetail.FindAsync(quizDetailDto.Id);
            _mapper.Map(quizDetailDto, detail);
            await _dbContext.SaveChangesAsync();
            return _mapper.Map<QuizDetailDtos.QuizDetailDto>(detail);
        }

        public async Task Delete(int quizDetailId)
        {
            var detail = await _dbContext.QuizDetail.GetByIdAsync(quizDetailId);
            _dbContext.QuizOptions.RemoveRange(detail.Options);
            _dbContext.QuizDetail.Remove(detail);
            await _dbContext.SaveChangesAsync();
        }
    }
}
