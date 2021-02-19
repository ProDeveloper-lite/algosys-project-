using AutoMapper;
using OnlineQuizWebApp.DataLayer.QuizDL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
