using AutoMapper;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.ModuleHelper;
using System.Globalization;

namespace OnlineQuizWebApp.Modules.QuizOptionsBL
{
    public class QuizOptionsMapper: Profile
    {
        public QuizOptionsMapper()
        {
            CreateMap<QuizOptions, QuizOptionsDtos.QuizOptionsDto>(MemberList.Destination);
            CreateMap<QuizOptionsDtos.QuizOptionsDto, QuizOptions>(MemberList.Source);

            CreateMap<QuizOptionsDtos.CreateQuizOptions, QuizOptions>(MemberList.Source);
        }

    }
}
