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
            CreateMap<QuizOptionsDtos.createQuizOptions, QuizOptions>(MemberList.Source);
            CreateMap<QuizOptions, ListType.ListItem>(MemberList.Destination)
            .ForMember(x => x.Text, opt => opt.MapFrom(y => y.Option))
            .ForMember(x => x.Value, opt => opt.MapFrom(y => y.Id.ToString(CultureInfo.InvariantCulture)));
        }

    }
}
