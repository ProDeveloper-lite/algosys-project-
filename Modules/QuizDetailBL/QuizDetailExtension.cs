using OnlineQuizWebApp.DataLayer.QuizDL;
using System.Collections.Generic;

namespace OnlineQuizWebApp.Modules.QuizDetailBL
{
    public static class QuizDetailExtension
    {
        public static List<string> GetActions(this QuizDetail qd)
        {
            return new List<string> { "View" };
        }
    }
}
