import { QuizDetailDto } from "./QuizDetailDtos.dto";

//TODO: ganesh and ankita : add new dto of quizOption
export interface QuizOptionsDto{
    id : number;
    option : string;
    isAnswer: boolean;
    quizDetailId : number;
}
export interface CreateQuizOptions{
    option:string;
    isAnswer: boolean;
    quizDetailId:number;
}