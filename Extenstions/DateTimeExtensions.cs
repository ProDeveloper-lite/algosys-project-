using System;
using System.Globalization;

namespace OnlineQuizWebApp.Extenstions
{
    public static class DateTimeExtensions
    {
        public static string ToIsoDate(this DateTime date)
        {
            return date.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture);
        }

        public static string ToIsoDate(this DateTime? date)
        {
            return date.HasValue
                ? date.Value.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture)
                : string.Empty;
        }

        public static string ToIsoDateTime(this DateTime date)
        {
            return date.ToString("yyyy-MM-ddTHH:mm:ss", CultureInfo.InvariantCulture);
        }

        public static string ConvertToString(this DateTime date)
        {
            return date.TimeOfDay.Ticks == 0
                ? date.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture)
                : date.ToString("yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture);
        }

        public static string ToDisplayString(this DateTime date)
        {
            return date.TimeOfDay.Ticks == 0
                ? date.ToString("dd-MMM-yy", CultureInfo.InvariantCulture)
                : date.ToString("dd-MMM-yy HH:mm", CultureInfo.InvariantCulture);
        }

        public static DateTime Truncate(this DateTime date, long resolution)
        {
            return new DateTime(date.Ticks - (date.Ticks % resolution), date.Kind);
        }
    }
}
