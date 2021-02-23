using Microsoft.EntityFrameworkCore;
using Innofactor.EfCoreJsonValueConverter;

namespace OnlineQuizWebApp.DataLayer.QuizDL
{
    public static class QuizDlMapper
    {
        public static void QuizEfMapper(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<QuizDetail>(b =>
            {
                b.Property(x => x.Topic).IsRequired().HasJsonValueConversion();
            });

            modelBuilder.Entity<QuizOptions>(b =>
            {
                b.HasIndex(x => x.QuizDetailId);
            });

            modelBuilder.Entity<SubjectDetail>(b =>
            {
                b.HasIndex(x => x.Name).IsUnique();
            });
        }
    }
}
