using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace OnlineQuizWebApp.SqlDbUtils
{
    public static class EfConventions
    {
        public static void CustomConventions(ModelBuilder modelBuilder)
        {
            modelBuilder.TableNamingConvention();
            modelBuilder.CascadeBehaviorConvention();
            modelBuilder.EnumPropertyConvention();
            modelBuilder.StringPropertyConvention();
            modelBuilder.DecimalPropertyConvention();
            modelBuilder.DateTimePropertyConvention();
            modelBuilder.DateTimeOptionalPropertyConvention();
            modelBuilder.DescriptionPropertyConvention();
        }

        private static void TableNamingConvention(this ModelBuilder modelBuilder)
        {
            modelBuilder.EntityTypes().Configure(x => x.SetTableName(x.DisplayName()));
        }

        private static void CascadeBehaviorConvention(this ModelBuilder modelBuilder)
        {
            modelBuilder.EntityTypes()
                .SelectMany(x => x.GetForeignKeys())
                .Configure(x => x.DeleteBehavior = DeleteBehavior.Restrict);
        }

        private static void EnumPropertyConvention(this ModelBuilder modelBuilder)
        {
            modelBuilder.Properties()
                .Where(x => x.ClrType.IsEnum)
                .ConfigureUsingPropertyBuilders(modelBuilder)
                .Configure(x => x.IsRequired().HasConversion<string>().HasMaxLength(64));
        }

        private static void StringPropertyConvention(this ModelBuilder modelBuilder)
        {
            modelBuilder.Properties<string>()
                .ConfigureUsingPropertyBuilders(modelBuilder)
                .Configure(x => x.IsRequired().HasMaxLength(256));
        }

        private static void DecimalPropertyConvention(this ModelBuilder modelBuilder)
        {
            modelBuilder.Properties<decimal>()
                .ConfigureUsingPropertyBuilders(modelBuilder)
                .Configure(x => x.HasColumnType("decimal(20, 5)"));
        }

        private static void DateTimePropertyConvention(this ModelBuilder modelBuilder)
        {
            modelBuilder.Properties<DateTime>()
                .ConfigureUsingPropertyBuilders(modelBuilder)
                .Configure(x => x.HasColumnType("date"));

            modelBuilder.Properties<DateTime>()
                .Where(x => x.Name.EndsWith("DateTime") || x.Name.EndsWith("At") || x.Name.EndsWith("On"))
                .ConfigureUsingPropertyBuilders(modelBuilder)
                .Configure(x => x.HasColumnType("datetime2"));
        }

        private static void DateTimeOptionalPropertyConvention(this ModelBuilder modelBuilder)
        {
            modelBuilder.Properties<DateTime?>()
                .ConfigureUsingPropertyBuilders(modelBuilder)
                .Configure(x => x.HasColumnType("date"));

            modelBuilder.Properties<DateTime?>()
                .Where(x => x.Name.EndsWith("DateTime"))
                .ConfigureUsingPropertyBuilders(modelBuilder)
                .Configure(x => x.HasColumnType("datetime2"));
        }

        private static void DescriptionPropertyConvention(this ModelBuilder modelBuilder)
        {
            var properties = new List<string> { "Description", "Remarks" };
            modelBuilder.Properties()
                .Where(x => properties.Any(prop => prop == x.Name || x.Name.EndsWith(prop)))
                .ConfigureUsingPropertyBuilders(modelBuilder)
                .Configure(x => x.IsRequired(false).HasMaxLength(4096));
        }
    }
}
