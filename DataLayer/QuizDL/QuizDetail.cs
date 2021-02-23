using System.Collections.Generic;

namespace OnlineQuizWebApp.DataLayer.QuizDL
{
    public class QuizDetail
    {
        public int Id { get; set; }
        public QuizEnums.Complexcity Complexcity { get; set; }
        public List<string> Topic { get; set; } //tags
        public QuizEnums.QuestionType Type { get; set; }
        public string QuestionText { get; set; }
        public bool IsActive { get; set; }

        // foreign key - one side
        public int SubjectId { get; set; }
        public SubjectDetail Subject { get; set; }

        // foreign key - many side
        public ICollection<QuizOptions> Options { get; set; } = new List<QuizOptions>();
    }
}
