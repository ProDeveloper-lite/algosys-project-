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
            public string Option { get; set; }
            public int QuizDetailId { get; set; }
            public bool IsAnswer { get;  set; }
        }
        [PublicAPI]
        public class CreateQuizOptions
        {
            public string Option { get; set; }
            public int QuizDetailId { get; set; }
            public bool IsAnswer { get; set; }

        }
    }
}
