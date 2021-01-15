
using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.SqlDbUtils;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Modules.QuizDetailBL
{
    public class QuizDetailService : IQuizDetailService
    {
        private readonly AppDbContext _dbContext;

        public QuizDetailService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<List<QuizDetail>> GetAll()
        {
            var quizs = await _dbContext.QuizDetail.ToListAsync();
            return quizs;
        }

        public async Task<QuizDetail> GetById(int quizId)
        {
            var quizDetail = await _dbContext.QuizDetail.FindAsync(quizId);
            return quizDetail;
        }
    }
}
