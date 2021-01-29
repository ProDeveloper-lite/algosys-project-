import { Subject } from "./QuizEnums.dto";

export interface QuizDetailDto {
    id: number;
    subject: Subject;
    complexcity: number;
    topic: string;
    isActive: boolean;
    questionId: number;
    actions: string[];
}
