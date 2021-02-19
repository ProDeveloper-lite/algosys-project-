using Hangfire.Annotations;

namespace OnlineQuizWebApp.Modules.SubjectDetailBL
{
    public class SubjectDetailDtos
    {
        [PublicAPI]
        public class SubjectDetailDto
        {
            public int Id { get; set; }
            public string Name { get; set; }
        }

        [PublicAPI]
        public class CreateSubjectDetailDto
        {
            public string Name { get; set; }
        }
    }
}
