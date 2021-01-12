import { QuizDetail } from "./QuizDetailDtos.dto";

export interface QuizOptions{
    id : number;
    option : string;
    answer : string;
    quizDetailId : number;
    quizDetail : QuizDetail;
}