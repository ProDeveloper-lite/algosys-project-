
namespace OnlineQuizWebApp.DataLayer.QuizDL
{
    public class QuizOptions
    {
        public int Id { get; set; }
        public string Option { get; set; }
        public bool IsAnswer { get; set; }


        // foreign keys
        public int QuizDetailId { get; set; }
        public QuizDetail QuizDetail { get; set; }
    }
}
