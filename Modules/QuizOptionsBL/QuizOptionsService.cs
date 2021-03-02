using AutoMapper;
using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.QuizOptionsBL;
using OnlineQuizWebApp.SqlDbUtils;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace OnlineQuizWebApp.Modules.QuizOptionBL
{
    public class QuizOptionsService : IQuizOptionsService
    {
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;
        public QuizOptionsService(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<List<QuizOptionsDtos.QuizOptionsDto>> GetByQuizDetailId(int quizDetailId)
        {
            var options = await _dbContext.QuizOptions.GetByQuizDetailIdAsync(quizDetailId);
            return _mapper.Map<List<QuizOptionsDtos.QuizOptionsDto>>(options);
        }

        public async Task<List<QuizOptionsDtos.QuizOptionsDto>> GetAll()
        {
            var quizs = await _dbContext.QuizOptions.ToListAsync();
            return _mapper.Map<List<QuizOptionsDtos.QuizOptionsDto>>(quizs);
        }
        public async Task<QuizOptionsDtos.QuizOptionsDto> GetById(int quizoptionId)
        {
            var quizoption = await _dbContext.QuizOptions.FindAsync(quizoptionId);
            return _mapper.Map<QuizOptionsDtos.QuizOptionsDto>(quizoption);
        }

        public async Task AddOption(QuizOptionsDtos.CreateQuizOptions dto)
        {
            var quizDetail = await _dbContext.QuizDetail
                .Include(x => x.Options)
                .SingleAsync(x => x.Id == dto.QuizDetailId);
            var option = _mapper.Map<QuizOptions>(dto);
            option.QuizDetail = quizDetail;
            option.QuizDetailId = quizDetail.Id;
            quizDetail.Options.Add(option);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteOption(int optionId)
        {
            var option = _dbContext.QuizOptions.Single(x => x.Id == optionId);
            var allOptions = await _dbContext.QuizOptions
                .Where(x => x.QuizDetailId == option.QuizDetailId)
                .ToListAsync();
            _dbContext.QuizOptions.Remove(allOptions.Single(y => y.Id == optionId));
            allOptions.Remove(allOptions.Single(y => y.Id == optionId));
            await _dbContext.SaveChangesAsync();
        }

    }
}
