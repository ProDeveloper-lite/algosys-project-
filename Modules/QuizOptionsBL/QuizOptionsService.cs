using AutoMapper;
using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.ModuleHelper;
using OnlineQuizWebApp.Modules.QuizOptionsBL;
using OnlineQuizWebApp.SqlDbUtils;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace OnlineQuizWebApp.Modules.QuizOptionBL
{
    public class QuizOptionsService : IQuizOptionsService
    {
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;
        public QuizOptionsService(AppDbContext dbContext,IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<List<ListType.ListItem>> GetAllForList()
        {
            //TODO :Ganesh and Ankita ...add mapper
            var quizs = await _dbContext.QuizOptions.ToListAsync();
            return _mapper.Map<List<ListType.ListItem>>(quizs);
        }

        public async Task<List<QuizOptionsDtos.QuizOptionsDto>> GetAll()
        {
            var quizs = await _dbContext.QuizOptions.ToListAsync();
            return _mapper.Map<List<QuizOptionsDtos.QuizOptionsDto>>(quizs);
        }
        public async Task<QuizOptionsDtos.QuizOptionsDto> GetById(int quizoptionId)
        {
            //TODO :Ganesh and Ankita ...add mapper
            var quizoption = await _dbContext.QuizOptions.FindAsync(quizoptionId);
            return _mapper.Map<QuizOptionsDtos.QuizOptionsDto>(quizoption);
        }

        public async Task AddOption(QuizOptionsDtos.QuizOptionsDto dto)
        {
            var quizDetail = await _dbContext.QuizDetail
                .Include(x => x.Options)
                .SingleAsync(x => x.Id == dto.QuizDetailId);
            var option = new QuizOptions { Option = dto.Option, IsAnswer = dto.IsAnswer, QuizDetailId = dto.QuizDetailId };
            option.QuizDetail = quizDetail;
            option.QuizDetailId = quizDetail.Id;
            quizDetail.Options.Add(option);
            await _dbContext.SaveChangesAsync();
        }

    }
}
