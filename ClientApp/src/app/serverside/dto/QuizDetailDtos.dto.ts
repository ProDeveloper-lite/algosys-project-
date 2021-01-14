import { QuestionDetail } from "./QuestionDetailDtos.dto";
import { Subject } from "./QuizEnums.dto";
import { QuizOptions } from "./QuizOptionsDtos.dto";

export interface QuizDetail{
    id : number;
    subject : Subject;
    complexcity : number;
    topic : string;
    isActive : boolean;
    questionId : number;
    question : QuestionDetail;
    options : QuizOptions[];
}