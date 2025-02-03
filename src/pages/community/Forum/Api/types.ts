export interface Question {
    question_id: number;      // bigint
    created_at: string;       // timestamp with time zone
    user_id: number;          // bigint
    title: string;            // text
    content: string;          // text
    updated_at: string;       // timestamp with time zone
  }

  export interface Like {
    comment_id: number; // 评论ID
    like_count: number; // 点赞数量
  }
  
  export interface Comment {
    comment_id: number;         // bigint
    created_at: string;         // timestamp with time zone
    question_id: number;        // bigint
    user_id: number;            // bigint
    content: string;            // text
    comment_father_id?: number; // bigint (optional)
  }
  
  export interface Community {
    id: number;
    created_at: string;
    about: string;
    title: string;
    name: string;
  }
  

  export interface Team {
    team_id: number;
    team_name: string;
    team_number: number;
    team_type: string;
    team_email: string;
    last_login: string;
    team_description: string;
  }

  
  

  