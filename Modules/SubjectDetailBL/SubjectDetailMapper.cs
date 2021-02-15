using AutoMapper;
using Hangfire.Annotations;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Modules.ModuleHelper;
using System.Globalization;

namespace OnlineQuizWebApp.Modules.SubjectDetailBL
{
    [UsedImplicitly]
    public class SubjectDetailMapper : Profile
    {
        public SubjectDetailMapper()
        {
            CreateMap<SubjectDetail, SubjectDetailDtos.SubjectDetailDto>(MemberList.Destination);

            CreateMap<SubjectDetailDtos.SubjectDetailDto, SubjectDetail>(MemberList.Source);

            CreateMap<SubjectDetailDtos.CreateSubjectDetailDto, SubjectDetail>(MemberList.Source);

            CreateMap<SubjectDetail, ListType.ListItem>(MemberList.Destination)
                .ForMember(x => x.Text, opt => opt.MapFrom(y => y.Name))
                .ForMember(x => x.Value, opt => opt.MapFrom(y => y.Id.ToString(CultureInfo.InvariantCulture)));
        }
    }
}
