using FluentValidation;
using OnlineQuizWebApp.DataLayer.QuizDL;
using OnlineQuizWebApp.Extensions;

namespace OnlineQuizWebApp.Modules.QuizDetailBL
{
    public class QuicDetailDtoValidator : AbstractValidator<QuizDetailDtos.QuizDetailDto>
    {
        public QuicDetailDtoValidator()
        {
            RuleSet(FluentValidationExtensions.Create, () => RuleFor(x => x.Id).Empty());
            RuleSet(FluentValidationExtensions.Update, () => RuleFor(x => x.Id).NotEmpty());

            RuleFor(x => x.Subject)
                .Must(x => x != QuizEnums.Subject.Undefined)
                .WithMessage("Subject is mandatory");
        }
    }
}
