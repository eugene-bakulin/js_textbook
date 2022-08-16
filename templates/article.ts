export type Article = {
    part: "js" | "browser";
    chapter: string;
    topic: string;
    header: string;
    article_importance: "important" | "very important";
    article_text: DocumentFragment;
}