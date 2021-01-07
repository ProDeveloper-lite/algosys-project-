using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.SqlDbUtils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.Quiz.EnglishQuizBL
{
    public class EnglishQuizService : IEnglishQuizService
    {
        private readonly AppDbContext _dbContext;

        public EnglishQuizService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<List<EnglishQuiz>> GetAll()
        {
            var quizs = await _dbContext.EnglishQuiz.ToListAsync();
            return quizs;
        }
    }
}
