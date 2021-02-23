import { QuizDetailDto } from "./QuizDetailDtos.dto";

export interface QuizOptions{
    id : number;
    option : string;
    IsAnswer: boolean;
    quizDetailId : number;
    quizDetail : QuizDetailDto;
}