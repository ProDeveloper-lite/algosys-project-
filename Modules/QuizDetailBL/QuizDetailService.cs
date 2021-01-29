
using AutoMapper;
using Microsoft.EntityFrameworkCore;
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

        public async Task<QuizDetailDtos.QuizDetailDto> GetById(int quizId)
        {
            var quizDetail = await _dbContext.QuizDetail.FindAsync(quizId);
            return _mapper.Map<QuizDetailDtos.QuizDetailDto>(quizDetail);
        }
    }
}
