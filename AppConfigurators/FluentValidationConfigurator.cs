using FluentValidation;
using FluentValidation.AspNetCore;
using OnlineQuizWebApp.Extensions;

namespace OnlineQuizWebApp.AppConfigurators
{
    public static class FluentValidationConfigurator
    {
        public static void Configure(FluentValidationMvcConfiguration config)
        {
            ValidatorOptions.CascadeMode = CascadeMode.StopOnFirstFailure;
            config.RegisterValidatorsFromAssemblies(AutoMapperConfigurator.AutomapperAssemblies);
            config.RunDefaultMvcValidationAfterFluentValidationExecutes = false;
            config.ImplicitlyValidateChildProperties = false;
        }
    }

    public class ValidateCreateAttribute : CustomizeValidatorAttribute
    {
        public ValidateCreateAttribute()
        {
            base.RuleSet = $"default,{FluentValidationExtensions.Create}";
        }
    }

    public class ValidateUpdateAttribute : CustomizeValidatorAttribute
    {
        public ValidateUpdateAttribute()
        {
            base.RuleSet = $"default,{FluentValidationExtensions.Update}";
        }
    }
}
