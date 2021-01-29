using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using OnlineQuizWebApp.Extenstions;
using System;
using System.Globalization;

namespace OnlineQuizWebApp.JsonConvertor
{
    public class DateFormatConverter: IsoDateTimeConverter
    {
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            if (value == null)
            {
                writer.WriteNull();
                return;
            }

            if (!(value is DateTime))
            {
                base.WriteJson(writer, value, serializer);
                return;
            }

            var date = Nullable.GetUnderlyingType(value.GetType()) == null
                ? (DateTime)value
                : ((DateTime?)value).Value;

            if (date.TimeOfDay == TimeSpan.Zero)
            {
                writer.WriteRawValue("\"" + date.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture) + "\"");
                return;
            }

            var date2 = date.Truncate(TimeSpan.TicksPerSecond);
            base.WriteJson(writer, date2, serializer);
        }
    }
}
