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
            public QuizEnums.Subject Subject { get; set; }
            public int Complexcity { get; set; }
            public string Topic { get; set; }
            public bool IsActive { get; set; }
            public int? QuestionId { get; set; }
            public List<string> Actions { get; set; }
        }
    }
}
