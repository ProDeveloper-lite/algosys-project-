using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.DataLayer.QuizDL
{
    public static class QuizEnums
    {
        public enum Subject
        {
            Undefined,
            English,
            Maths,
            History,
            EVS,
            Computer
        }
        public enum QuestionType
        {
            Undefined,
            SingleCorrect,
            MultiCorrect
        }
    }
}
