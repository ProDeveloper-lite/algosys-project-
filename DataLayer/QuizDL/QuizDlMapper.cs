using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.DataLayer.QuizDL
{
    public static class QuizDlMapper
    {
        public static void QuizEfMapper(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<QuizOptions>(b =>
            {
                b.HasIndex(x => x.QuizDetailId);
            });

            modelBuilder.Entity<QuestionDetail>(b =>
            {
                b.HasOne(x => x.QuizDetail)
                    .WithOne(x => x.Question)
                    .HasForeignKey<QuestionDetail>(x => x.QuizDetailId)
                    .OnDelete(DeleteBehavior.NoAction);
            });
        }
    }
}
