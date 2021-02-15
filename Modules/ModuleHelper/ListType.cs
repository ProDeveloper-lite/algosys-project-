using Hangfire.Annotations;

namespace OnlineQuizWebApp.Modules.ModuleHelper
{
    public static class ListType
    {
        [PublicAPI]
        public class ListItem
        {
            public string Text { get; set; }
            public int Value { get; set; }
        }
    }
}
