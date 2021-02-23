using Hangfire.Annotations;
using OnlineQuizWebApp.DataLayer.QuizDL;
using System.Collections.Generic;

namespace OnlineQuizWebApp.Modules.QuizDetailBL
{
    public static class QuizDetailDtos
    {
        [PublicAPI]
        public class QuizDetailDto
        {
            public int Id { get; set; }
            public int SubjectId { get; set; }
            public QuizEnums.Complexcity Complexcity { get; set; }
            public List<string> Topic { get; set; }
            public QuizEnums.QuestionType Type { get; set; }
            public string QuestionText { get; set; }
            public bool IsActive { get; set; }
        }
    }
}
