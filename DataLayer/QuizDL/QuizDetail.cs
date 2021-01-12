using System.Collections.Generic;

namespace OnlineQuizWebApp.DataLayer.QuizDL
{
    public class QuizDetail
    {
        public int Id { get; set; }
        public QuizEnums.Subject Subject { get; set; }
        public int Complexcity { get; set; }
        public string Topic { get; set; }
        public bool IsActive { get; set; }

        // foreign key - one side
        public int? QuestionId { get; set; }
        public QuestionDetail Question { get; set; }

        // foreign key - many side
        public ICollection<QuizOptions> Options { get; set; } = new List<QuizOptions>();
    }
}
