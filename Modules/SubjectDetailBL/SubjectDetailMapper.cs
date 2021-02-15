using AutoMapper;
using Hangfire.Annotations;
using OnlineQuizWebApp.DataLayer.QuizDL;

namespace OnlineQuizWebApp.Modules.SubjectDetailBL
{
    [UsedImplicitly]
    public class SubjectDetailMapper : Profile
    {
        public SubjectDetailMapper()
        {
            CreateMap<SubjectDetail, SubjectDetailDtos.SubjectDetailDto>(MemberList.Destination);

            CreateMap<SubjectDetailDtos.SubjectDetailDto, SubjectDetail>(MemberList.Source);
        }
    }
}
