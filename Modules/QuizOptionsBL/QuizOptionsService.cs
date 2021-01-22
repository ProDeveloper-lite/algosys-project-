using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.SqlDbUtils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace OnlineQuizWebApp.Modules.QuizOptionsBL
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
            var Quizs = await _dbContext.QuizOptions.ToListAsync();
            return Quizs;
        }
        public async Task<QuizOptions> GetById(int quizoptionid)
        {
            var quizoption = await _dbContext.QuizOptions.FindAsync(quizoptionid);
            return quizoption;
        }


    }
}
