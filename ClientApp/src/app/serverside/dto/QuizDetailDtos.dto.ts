import {QuestionType} from './QuizEnums.dto';
export interface QuizDetailDto {
    id: number;
    subjectId: number;
    complexcity: string;
    topic: string[];
    isActive: boolean;
    correctAnswerId: number;
    type: QuestionType;
    questionText: string;
}