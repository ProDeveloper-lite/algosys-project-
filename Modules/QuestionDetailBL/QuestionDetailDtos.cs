using Hangfire.Annotations;
using OnlineQuizWebApp.DataLayer.QuizDL;

namespace OnlineQuizWebApp.Modules.QuestionDetailBL
{
    public static class QuestionDetailDtos
    {
        [PublicAPI]
        public class QuestionDetailDto
        {
            public int Id { get; set; }
            public QuizEnums.QuestionType Type { get; set; }
            public string QuestionText { get; set; }
            public int QuizDetailId { get; set; }
        }
    }
}
