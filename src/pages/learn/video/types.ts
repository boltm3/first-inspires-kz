// src/types.ts
export interface VideoInfo {
    title: string;
    description: string;
  }
  
  export interface CommentSnippet {
    authorDisplayName: string;
    textOriginal: string;
    likeCount: number;
  }
  
  export interface Comment {
    id: string;
    snippet: {
      topLevelComment: {
        snippet: CommentSnippet;
      };
    };
  }
  