export interface QuizDetailDto {
    id: number;
    subjectId: number;
    complexcity: number;
    topic: string;
    isActive: boolean;
    questionId: number;
    actions: string[];
}
