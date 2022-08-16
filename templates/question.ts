export type Question = {
    chapter: string;
    topic: string;
    question_importance: "important" | "very important";
    question_complexity: "high" | "low";
    question_text: string;
    question_answer_1: QuestionAnswer;
    question_answer_2: QuestionAnswer;
    question_answer_3: QuestionAnswer;
    question_answer_4?: QuestionAnswer;
}
export type QuestionAnswer = {
    answer_text: string;
    correct: boolean;
}