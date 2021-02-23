import { QuizDetailDto } from "./QuizDetailDtos.dto";

//TODO: ganesh and ankita : add new dto of quizOption
export interface QuizOptions{
    id : number;
    option : string;
    answer : string;
    quizDetailId : number;
    quizDetail : QuizDetailDto;
}