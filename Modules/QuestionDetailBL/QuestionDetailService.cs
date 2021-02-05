
using Microsoft.EntityFrameworkCore;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.SqlDbUtils;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

namespace OnlineQuizWebApp.Modules.QuestionDetailBL
{
    public class QuestionDetailService : IQuestionDetailService
    {
        private readonly AppDbContext _dbContext;
        public QuestionDetailService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<List<QuestionDetail>> GetAll()
        {
            var QueDetail = await _dbContext.QuestionDetail.ToListAsync();
            return QueDetail;
        }
        public async Task<QuestionDetail> GetById(int QuestionDetailid)
        {
            var QueDetalId = await _dbContext.QuestionDetail.FindAsync(QuestionDetailid);
            return QueDetalId;
        }

    }
}
