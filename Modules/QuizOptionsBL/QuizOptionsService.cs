using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.QuizOptionBL;
using OnlineQuizWebApp.Modules.QuizOptionsBL;
using OnlineQuizWebApp.SqlDbUtils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace OnlineQuizWebApp.Modules.QuizOptionBL
{
    public class QuizOptionsService : IQuizOptionsService
    {
        private readonly AppDbContext _dbContext;
        public QuizOptionsService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<QuizOptions>> GetAll()
        {
            //TODO :Ganesh and Ankita ...add mapper
            var quizs = await _dbContext.QuizOptions.ToListAsync();
            return quizs;
        }
        public async Task<QuizOptions> GetById(int quizoptionId)
        {
            //TODO :Ganesh and Ankita ...add mapper
            var quizoption = await _dbContext.QuizOptions.FindAsync(quizoptionId);
            return quizoption;
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
