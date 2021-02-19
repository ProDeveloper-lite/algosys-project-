using Hangfire.Annotations;
using OnlineQuizWebApp.DataLayer.QuizDL;
using System.Collections.Generic;


namespace OnlineQuizWebApp.Modules.QuizOptionsBL
{
    public class QuizOptionsDtos
    {
        [PublicAPI]
        public class QuizOptionsDto
        {
            public int Id { get; set; }
            public QuizEnums.Complexcity Complexcity { get; set; }
            public List<string> Topic { get; set; }
            public QuizEnums.QuestionType Type { get; set; }
            public string QuestionText { get; set; }
            public bool IsActive { get; set; }
            public int SubjectId { get; set; }
            public int CorrectAnswerId { get; set; }
        }
    }
}
