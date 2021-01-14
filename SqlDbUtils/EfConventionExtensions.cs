using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;

namespace OnlineQuizWebApp.SqlDbUtils
{
    public static class EfConventionExtensions
    {
        public static IEnumerable<IMutableEntityType> EntityTypes(this ModelBuilder builder)
        {
            return builder.Model.GetEntityTypes();
        }

        public static IEnumerable<IMutableProperty> Properties(this ModelBuilder builder)
        {
            return builder.EntityTypes().SelectMany(entityType => entityType.GetProperties());
        }

        public static IEnumerable<IMutableProperty> Properties<T>(this ModelBuilder builder)
        {
            return builder.EntityTypes().SelectMany(entityType => entityType.GetProperties().Where(x => x.ClrType == typeof(T)));
        }

        public static IEnumerable<IMutableProperty> Properties<T>(this EntityTypeBuilder builder)
        {
            return builder.Metadata.GetProperties().Where(x => x.ClrType == typeof(T));
        }

        public static IEnumerable<PropertyBuilder> ConfigureUsingPropertyBuilders(this IEnumerable<IMutableProperty> propertyTypes, ModelBuilder modelBuilder)
        {
            foreach (var p in propertyTypes)
            {
                yield return modelBuilder.Entity(p.DeclaringEntityType.ClrType).Property(p.Name);
            }
        }

        public static void Configure(this IEnumerable<IMutableEntityType> entityTypes, Action<IMutableEntityType> convention)
        {
            foreach (var entityType in entityTypes)
            {
                convention(entityType);
            }
        }

        public static void Configure(this IEnumerable<IMutableProperty> propertyTypes, Action<IMutableProperty> convention)
        {
            foreach (var propertyType in propertyTypes)
            {
                convention(propertyType);
            }
        }

        public static void Configure(this IEnumerable<PropertyBuilder> propertyTypes, Action<PropertyBuilder> convention)
        {
            foreach (var propertyType in propertyTypes)
            {
                convention(propertyType);
            }
        }

        public static void Configure(this IEnumerable<IMutableForeignKey> propertyTypes, Action<IMutableForeignKey> convention)
        {
            foreach (var propertyType in propertyTypes)
            {
                convention(propertyType);
            }
        }
    }
}
