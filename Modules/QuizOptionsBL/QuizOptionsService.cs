using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.QuizOptionBL;
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
            var quizs = await _dbContext.QuizOptions.ToListAsync();
            return quizs;
        }
        public async Task<QuizOptions> GetById(int quizoptionId)
        {
            var quizoption = await _dbContext.QuizOptions.FindAsync(quizoptionId);
            return quizoption;
        }


    }
}
