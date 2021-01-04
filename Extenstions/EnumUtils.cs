using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.Extenstions
{
    public static class EnumUtils<T> where T : struct, IConvertible
    {
        public static List<T> ToList()
        {
            if (!typeof(T).IsEnum)
            {
                throw new ArgumentException("T must be an enum type");
            }

            return Enum.GetValues(typeof(T)).OfType<T>().ToList();
        }

        public static T Parse(string value)
        {
            if (!typeof(T).IsEnum)
            {
                throw new ArgumentException("T must be an enum type");
            }

            return (T)Enum.Parse(typeof(T), value, true);
        }

        public static bool TryParse(string value)
        {
            if (!typeof(T).IsEnum)
            {
                throw new ArgumentException("T must be an enum type");
            }

            return Enum.TryParse(typeof(T), value, true, out _);
        }

        public static List<string> Names()
        {
            if (!typeof(T).IsEnum)
            {
                throw new ArgumentException("T must be an enum type");
            }

            return Enum.GetNames(typeof(T)).ToList();
        }
    }
}
