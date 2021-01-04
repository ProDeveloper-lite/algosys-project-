using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineQuizWebApp.AppSettings
{
    [PublicAPI]
    public class AppJsonSetting
    {
        private string _clientAppUrl;
        public string ClientAppUrl
        {
            get => _clientAppUrl;
            set
            {
                if (string.IsNullOrEmpty(value)) { return; }
                if (!Uri.IsWellFormedUriString(value, UriKind.Absolute))
                {
                    throw new ValidationException($"Invalid url: {value}");
                }
                _clientAppUrl = value;
            }
        }

        [Required]
        public bool EnableSeedDataSync { get; set; }
    }
}
