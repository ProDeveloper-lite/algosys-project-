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
            CreateMap<QuizDetail, QuizDetailDtos.QuizDetailDto>(MemberList.Destination);

            CreateMap<QuizDetailDtos.QuizDetailDto, QuizDetail>(MemberList.Source);
        }
    }
}
