import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const en = {
  "nav": {
    "home": "Home",
    "lessons": "Lessons",
    "progress": "Progress",
    "coach": "AI Coach",
    "logout": "Logout",
    "login": "Login",
    "signup": "Sign Up"
  },
  "welcome": {
    "title": "Welcome to TVEnglish",
    "subtitle": "Master English with Interactive Lessons",
    "description": "Learn English through structured lessons, interactive exercises, and real-world practice. Start your journey from beginner to advanced.",
    "getStarted": "Get Started Free",
    "learnMore": "Learn More",
    "features": {
      "title": "Why Choose TVEnglish?",
      "structured": {
        "title": "100+ Interactive Lessons",
        "description": "Learn English with engaging, structured content organized by CEFR levels (A1-B2)"
      },
      "interactive": {
        "title": "Practice Exercises",
        "description": "Master English with quizzes and interactive exercises after each lesson"
      },
      "progress": {
        "title": "Track Your Progress",
        "description": "Monitor your learning journey with detailed progress tracking and achievement badges"
      }
    }
  },
  "dashboard": {
    "title": "Dashboard",
    "welcome": "Welcome back",
    "stats": {
      "completed": "Completed Lessons",
      "inProgress": "In Progress",
      "streak": "Day Streak",
      "totalLessons": "Total Lessons"
    },
    "courses": "Your Courses",
    "lessons": "lessons",
    "continue": "Continue Learning",
    "start": "Start Course"
  },
  "sidebar": {
    "courses": "Courses",
    "topics": "Topics",
    "lessons": "Lessons",
    "topic": "topic",
    "topics_plural": "topics"
  },
  "lesson": {
    "difficulty": "Difficulty",
    "keyPoints": "Key Points",
    "examples": "Examples",
    "practice": "Practice Exercise",
    "checkAnswer": "Check Answer",
    "nextLesson": "Next Lesson",
    "completed": "Lesson Completed!",
    "correct": "Correct!",
    "incorrect": "Incorrect. Try again!",
    "media": "Media"
  },
  "quiz": {
    "title": "Quiz",
    "question": "Question",
    "submit": "Submit Answer",
    "next": "Next Question",
    "finish": "Finish Quiz",
    "score": "Your Score",
    "correct": "Correct",
    "incorrect": "Incorrect",
    "explanation": "Explanation"
  },
  "progress": {
    "title": "Your Progress",
    "overall": "Overall Progress",
    "byTopic": "Progress by Topic",
    "completed": "Completed",
    "total": "Total",
    "percentage": "Completion"
  },
  "comments": {
    "title": "Comments",
    "placeholder": "Share your thoughts or ask a question...",
    "submit": "Post Comment",
    "noComments": "No comments yet. Be the first to comment!",
    "reply": "Reply",
    "delete": "Delete",
    "edit": "Edit"
  },
  "auth": {
    "login": {
      "title": "Login to TVEnglish",
      "subtitle": "Welcome back! Please login to continue",
      "email": "Email",
      "password": "Password",
      "button": "Login",
      "noAccount": "Don't have an account?",
      "signupLink": "Sign up here"
    },
    "signup": {
      "title": "Create Account",
      "subtitle": "Join TVEnglish and start learning today",
      "name": "Full Name",
      "email": "Email",
      "password": "Password",
      "confirmPassword": "Confirm Password",
      "button": "Sign Up",
      "hasAccount": "Already have an account?",
      "loginLink": "Login here"
    }
  },
  "common": {
    "loading": "Loading...",
    "error": "Error",
    "success": "Success",
    "cancel": "Cancel",
    "save": "Save",
    "delete": "Delete",
    "edit": "Edit",
    "close": "Close",
    "back": "Back",
    "next": "Next",
    "previous": "Previous",
    "search": "Search",
    "filter": "Filter",
    "all": "All",
    "none": "None"
  },
  "coach": {
    "title": "AI English Coach",
    "subtitle": "Get personalized help with your English learning journey",
    "badge": "24/7 Available",
    "welcome": "Hello! I'm your AI English Coach. I'm here to help you improve your English skills. You can ask me about grammar, vocabulary, pronunciation, or any other English learning topics. How can I help you today?",
    "quickStart": "Quick Start Suggestions:",
    "inputPlaceholder": "Type your question here... (Press Enter to send)",
    "disclaimer": "Note: This is a simulated AI coach. For the best learning experience, practice regularly and review lessons.",
    "prompts": {
      "grammar": "Help me with English grammar",
      "conversation": "Practice conversation with me",
      "tips": "Give me study tips"
    },
    "responses": {
      "grammar": "Great question about grammar! English grammar can be tricky, but with practice, it gets easier. Here are some tips:\n\n1. Focus on tenses - Present, Past, and Future forms\n2. Practice with sentence structures - Subject + Verb + Object\n3. Learn common irregular verbs\n4. Pay attention to articles (a, an, the)\n\nWhich specific grammar topic would you like to work on? I can provide more detailed explanations and examples!",
      "vocabulary": "Building vocabulary is essential! Here are some effective strategies:\n\n1. Learn words in context, not in isolation\n2. Use flashcards or spaced repetition apps\n3. Read English content regularly\n4. Practice using new words in sentences\n5. Group words by themes or topics\n\nWould you like me to suggest some vocabulary exercises based on your current level?",
      "practice": "Practice is the key to mastering English! Here are some ways to practice:\n\n1. Complete the exercises after each lesson\n2. Try speaking English daily, even to yourself\n3. Write short paragraphs about your day\n4. Watch English videos with subtitles\n5. Join language exchange communities\n\nWhich skill would you like to focus on: speaking, writing, listening, or reading?",
      "pronunciation": "Pronunciation can be challenging, but here are some tips:\n\n1. Listen to native speakers and imitate them\n2. Record yourself and compare\n3. Practice difficult sounds repeatedly\n4. Learn the phonetic alphabet\n5. Focus on word stress and intonation\n\nWould you like to practice some specific sounds or words?",
      "study": "Here are some effective study tips for learning English:\n\n1. Study consistently - 30 minutes daily is better than 3 hours once a week\n2. Set specific, achievable goals\n3. Use multiple resources (videos, books, apps)\n4. Practice all four skills: reading, writing, listening, speaking\n5. Review regularly to reinforce learning\n6. Don't be afraid to make mistakes!\n\nWhat's your current learning goal? I can help you create a study plan!",
      "default": "That's an interesting question! I'm here to help you with:\n\n• Grammar rules and explanations\n• Vocabulary building\n• Pronunciation tips\n• Study strategies\n• Practice exercises\n• Conversation practice\n\nCould you tell me more specifically what you'd like to learn or practice? The more details you provide, the better I can assist you!"
    }
  }
};

const vi = {
  "nav": {
    "home": "Trang chủ",
    "lessons": "Bài học",
    "progress": "Tiến độ",
    "coach": "Huấn luyện viên AI",
    "logout": "Đăng xuất",
    "login": "Đăng nhập",
    "signup": "Đăng ký"
  },
  "welcome": {
    "title": "Chào mừng đến với TVEnglish",
    "subtitle": "Làm chủ tiếng Anh với các bài học tương tác",
    "description": "Học tiếng Anh thông qua các bài học có cấu trúc, bài tập tương tác và thực hành trong tình huống thực tế. Bắt đầu hành trình của bạn từ cơ bản đến nâng cao.",
    "getStarted": "Bắt đầu miễn phí",
    "learnMore": "Tìm hiểu thêm",
    "features": {
      "title": "Tại sao chọn TVEnglish?",
      "structured": {
        "title": "100+ Bài học tương tác",
        "description": "Học tiếng Anh với nội dung hấp dẫn, có cấu trúc được tổ chức theo cấp độ CEFR (A1-B2)"
      },
      "interactive": {
        "title": "Bài tập thực hành",
        "description": "Thành thạo tiếng Anh với các câu đố và bài tập tương tác sau mỗi bài học"
      },
      "progress": {
        "title": "Theo dõi tiến độ",
        "description": "Giám sát hành trình học tập của bạn với theo dõi tiến độ chi tiết và huy hiệu thành tích"
      }
    }
  },
  "dashboard": {
    "title": "Bảng điều khiển",
    "welcome": "Chào mừng trở lại",
    "stats": {
      "completed": "Bài học đã hoàn thành",
      "inProgress": "Đang học",
      "streak": "Chuỗi ngày",
      "totalLessons": "Tổng số bài học"
    },
    "courses": "Khóa học của bạn",
    "lessons": "bài học",
    "continue": "Tiếp tục học",
    "start": "Bắt đầu khóa học"
  },
  "sidebar": {
    "courses": "Khóa học",
    "topics": "Chủ đề",
    "lessons": "Bài học",
    "topic": "chủ đề",
    "topics_plural": "chủ đề"
  },
  "lesson": {
    "difficulty": "Độ khó",
    "keyPoints": "Điểm chính",
    "examples": "Ví dụ",
    "practice": "Bài tập thực hành",
    "checkAnswer": "Kiểm tra đáp án",
    "nextLesson": "Bài học tiếp theo",
    "completed": "Hoàn thành bài học!",
    "correct": "Chính xác!",
    "incorrect": "Không chính xác. Thử lại!",
    "media": "Phương tiện"
  },
  "quiz": {
    "title": "Bài kiểm tra",
    "question": "Câu hỏi",
    "submit": "Nộp câu trả lời",
    "next": "Câu hỏi tiếp theo",
    "finish": "Hoàn thành bài kiểm tra",
    "score": "Điểm của bạn",
    "correct": "Đúng",
    "incorrect": "Sai",
    "explanation": "Giải thích"
  },
  "progress": {
    "title": "Tiến độ của bạn",
    "overall": "Tiến độ tổng thể",
    "byTopic": "Tiến độ theo chủ đề",
    "completed": "Đã hoàn thành",
    "total": "Tổng số",
    "percentage": "Hoàn thành"
  },
  "comments": {
    "title": "Bình luận",
    "placeholder": "Chia sẻ suy nghĩ của bạn hoặc đặt câu hỏi...",
    "submit": "Đăng bình luận",
    "noComments": "Chưa có bình luận nào. Hãy là người đầu tiên bình luận!",
    "reply": "Trả lời",
    "delete": "Xóa",
    "edit": "Chỉnh sửa"
  },
  "auth": {
    "login": {
      "title": "Đăng nhập vào TVEnglish",
      "subtitle": "Chào mừng trở lại! Vui lòng đăng nhập để tiếp tục",
      "email": "Email",
      "password": "Mật khẩu",
      "button": "Đăng nhập",
      "noAccount": "Chưa có tài khoản?",
      "signupLink": "Đăng ký tại đây"
    },
    "signup": {
      "title": "Tạo tài khoản",
      "subtitle": "Tham gia TVEnglish và bắt đầu học hôm nay",
      "name": "Họ và tên",
      "email": "Email",
      "password": "Mật khẩu",
      "confirmPassword": "Xác nhận mật khẩu",
      "button": "Đăng ký",
      "hasAccount": "Đã có tài khoản?",
      "loginLink": "Đăng nhập tại đây"
    }
  },
  "common": {
    "loading": "Đang tải...",
    "error": "Lỗi",
    "success": "Thành công",
    "cancel": "Hủy",
    "save": "Lưu",
    "delete": "Xóa",
    "edit": "Chỉnh sửa",
    "close": "Đóng",
    "back": "Quay lại",
    "next": "Tiếp theo",
    "previous": "Trước",
    "search": "Tìm kiếm",
    "filter": "Lọc",
    "all": "Tất cả",
    "none": "Không có"
  },
  "coach": {
    "title": "Huấn luyện viên AI tiếng Anh",
    "subtitle": "Nhận trợ giúp cá nhân hóa cho hành trình học tiếng Anh của bạn",
    "badge": "Có sẵn 24/7",
    "welcome": "Xin chào! Tôi là Huấn luyện viên AI tiếng Anh của bạn. Tôi ở đây để giúp bạn cải thiện kỹ năng tiếng Anh. Bạn có thể hỏi tôi về ngữ pháp, từ vựng, phát âm hoặc bất kỳ chủ đề học tiếng Anh nào khác. Tôi có thể giúp gì cho bạn hôm nay?",
    "quickStart": "Gợi ý bắt đầu nhanh:",
    "inputPlaceholder": "Nhập câu hỏi của bạn ở đây... (Nhấn Enter để gửi)",
    "disclaimer": "Lưu ý: Đây là một huấn luyện viên AI mô phỏng. Để có trải nghiệm học tập tốt nhất, hãy thực hành thường xuyên và xem lại các bài học.",
    "prompts": {
      "grammar": "Giúp tôi với ngữ pháp tiếng Anh",
      "conversation": "Thực hành hội thoại với tôi",
      "tips": "Cho tôi lời khuyên học tập"
    },
    "responses": {
      "grammar": "Câu hỏi hay về ngữ pháp! Ngữ pháp tiếng Anh có thể khó, nhưng với thực hành, nó sẽ dễ dàng hơn. Đây là một số mẹo:\n\n1. Tập trung vào các thì - Hiện tại, Quá khứ và Tương lai\n2. Thực hành với cấu trúc câu - Chủ ngữ + Động từ + Tân ngữ\n3. Học các động từ bất quy tắc phổ biến\n4. Chú ý đến mạo từ (a, an, the)\n\nBạn muốn làm việc với chủ đề ngữ pháp cụ thể nào? Tôi có thể cung cấp giải thích và ví dụ chi tiết hơn!",
      "vocabulary": "Xây dựng từ vựng là điều cần thiết! Đây là một số chiến lược hiệu quả:\n\n1. Học từ trong ngữ cảnh, không riêng lẻ\n2. Sử dụng thẻ ghi nhớ hoặc ứng dụng lặp lại có khoảng cách\n3. Đọc nội dung tiếng Anh thường xuyên\n4. Thực hành sử dụng từ mới trong câu\n5. Nhóm từ theo chủ đề\n\nBạn có muốn tôi đề xuất một số bài tập từ vựng dựa trên trình độ hiện tại của bạn không?",
      "practice": "Thực hành là chìa khóa để làm chủ tiếng Anh! Đây là một số cách để thực hành:\n\n1. Hoàn thành các bài tập sau mỗi bài học\n2. Cố gắng nói tiếng Anh hàng ngày, ngay cả với chính bạn\n3. Viết đoạn văn ngắn về ngày của bạn\n4. Xem video tiếng Anh với phụ đề\n5. Tham gia cộng đồng trao đổi ngôn ngữ\n\nBạn muốn tập trung vào kỹ năng nào: nói, viết, nghe hay đọc?",
      "pronunciation": "Phát âm có thể là thách thức, nhưng đây là một số mẹo:\n\n1. Nghe người bản ngữ và bắt chước họ\n2. Ghi âm bản thân và so sánh\n3. Thực hành các âm khó lặp đi lặp lại\n4. Học bảng chữ cái phiên âm\n5. Tập trung vào trọng âm từ và ngữ điệu\n\nBạn có muốn thực hành một số âm hoặc từ cụ thể không?",
      "study": "Đây là một số mẹo học tập hiệu quả để học tiếng Anh:\n\n1. Học đều đặn - 30 phút mỗi ngày tốt hơn 3 giờ mỗi tuần một lần\n2. Đặt mục tiêu cụ thể, có thể đạt được\n3. Sử dụng nhiều nguồn tài nguyên (video, sách, ứng dụng)\n4. Thực hành cả bốn kỹ năng: đọc, viết, nghe, nói\n5. Xem lại thường xuyên để củng cố việc học\n6. Đừng ngại mắc lỗi!\n\nMục tiêu học tập hiện tại của bạn là gì? Tôi có thể giúp bạn tạo kế hoạch học tập!",
      "default": "Đó là một câu hỏi thú vị! Tôi ở đây để giúp bạn với:\n\n• Quy tắc và giải thích ngữ pháp\n• Xây dựng từ vựng\n• Mẹo phát âm\n• Chiến lược học tập\n• Bài tập thực hành\n• Thực hành hội thoại\n\nBạn có thể cho tôi biết cụ thể hơn về những gì bạn muốn học hoặc thực hành không? Càng nhiều chi tiết bạn cung cấp, tôi càng có thể hỗ trợ bạn tốt hơn!"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi }
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
