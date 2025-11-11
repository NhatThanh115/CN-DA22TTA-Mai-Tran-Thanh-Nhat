import { topics } from "../data/lessons";

// Find which topic a lesson belongs to
export function findTopicByLessonId(lessonId: string): {
  topicId: string;
  topicName: string;
  topicLessons: string[];
} | null {
  for (const topic of topics) {
    if (topic.lessons.includes(lessonId)) {
      return {
        topicId: topic.id,
        topicName: topic.name,
        topicLessons: topic.lessons,
      };
    }
  }
  return null;
}

// Get next lesson in the topic
export function getNextLesson(currentLessonId: string): string | null {
  const topic = findTopicByLessonId(currentLessonId);
  if (!topic) return null;

  const currentIndex = topic.topicLessons.indexOf(currentLessonId);
  if (currentIndex === -1 || currentIndex === topic.topicLessons.length - 1) {
    return null;
  }

  return topic.topicLessons[currentIndex + 1];
}

// Get previous lesson in the topic
export function getPreviousLesson(currentLessonId: string): string | null {
  const topic = findTopicByLessonId(currentLessonId);
  if (!topic) return null;

  const currentIndex = topic.topicLessons.indexOf(currentLessonId);
  if (currentIndex <= 0) {
    return null;
  }

  return topic.topicLessons[currentIndex - 1];
}
