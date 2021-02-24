import {QuestionType} from './QuizEnums.dto';
export interface QuizDetailDto {
    id: number;
    subjectId: number;
    complexcity: string;
    topic: string[];
    isActive: boolean;
    type: QuestionType;
    questionText: string;
}
export interface CreateQuizDetailDto {
    subjectId: number;
    complexcity: string;
    topic: string[];
    isActive: boolean;
    type: QuestionType;
    questionText: string;   
}