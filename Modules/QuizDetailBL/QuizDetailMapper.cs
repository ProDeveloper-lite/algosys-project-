using AutoMapper;
using JetBrains.Annotations;
using OnlineQuizWebApp.DataLayer.QuizDL;

namespace OnlineQuizWebApp.Modules.QuizDetailBL
{
    [UsedImplicitly]
    public class QuizDetailMapper : Profile
    {
        public QuizDetailMapper()
        {
            CreateMap<QuizDetail, QuizDetailDtos.QuizDetailDto>(MemberList.Destination)
                    .ForMember(x => x.Actions, opt => opt.MapFrom(x => x.GetActions()));

            CreateMap<QuizDetailDtos.QuizDetailDto, QuizDetail>(MemberList.Source)
                .ForSourceMember(x => x.Actions, opt => opt.DoNotValidate());
        }
    }
}
