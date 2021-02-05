import {QuizDetailDto} from './QuizDetailDtos.dto';
import { QuestionType } from './QuizEnums.dto';

export interface QuestionDetail{
    id:number;
    type : QuestionType;
    questionText:string;
    quizDetailId :number;
    quizDetail :QuizDetailDto;
}