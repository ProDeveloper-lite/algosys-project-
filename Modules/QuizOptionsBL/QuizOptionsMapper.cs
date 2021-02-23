using AutoMapper;
using OnlineQuizWebApp.DataLayer.QuizDL;

namespace OnlineQuizWebApp.Modules.QuizOptionsBL
{
    public class QuizOptionsMapper: Profile
    {
        public QuizOptionsMapper()
        {
            CreateMap<QuizOptions, QuizOptionsDtos.QuizOptionsDto>(MemberList.Destination);

            CreateMap<QuizOptionsDtos.QuizOptionsDto, QuizOptions>(MemberList.Source);

        }

    }
}
