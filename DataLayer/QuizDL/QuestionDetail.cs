
namespace OnlineQuizWebApp.DataLayer.QuizDL
{
    public class QuestionDetail
    {
        public int Id { get; set; }
        public QuizEnums.QuestionType Type { get; set; }
        public string QuestionText { get; set; }

        // foreign keys
        public int QuizDetailId { get; set; }
        public QuizDetail QuizDetail { get; set; }
    }
}
