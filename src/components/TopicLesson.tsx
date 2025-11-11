import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { MultipleChoiceQuiz } from "./MultipleChoiceQuiz";
import { CommentSection } from "./CommentSection";
import { LessonMedia } from "./LessonMedia";
import { CheckCircle2, Award } from "lucide-react";
import { markLessonComplete, isLessonCompleted } from "../utils/progressTracker";
import { findTopicByLessonId } from "../utils/lessonHelpers";
import { toast } from "sonner@2.0.3";
import { Badge } from "./ui/badge";
import type { DifficultyLevel } from "../data/lessons";

interface Example {
  sentence: string;
  explanation: string;
}

interface MediaItem {
  type: 'image' | 'video';
  url?: string;
  placeholder: string;
  caption?: string;
}

interface TopicLessonProps {
  lessonId?: string;
  title: string;
  description: string;
  difficulty?: DifficultyLevel;
  keyPoints: string[];
  media?: MediaItem[];
  examples: Example[];
  practiceExercise?: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
}

const getDifficultyInfo = (level: DifficultyLevel) => {
  const info = {
    'A1': { label: 'Beginner', color: 'bg-green-100 text-green-800 border-green-300', description: 'Basic' },
    'A2': { label: 'Elementary', color: 'bg-blue-100 text-blue-800 border-blue-300', description: 'Elementary' },
    'B1': { label: 'Intermediate', color: 'bg-yellow-100 text-yellow-800 border-yellow-300', description: 'Intermediate' },
    'B2': { label: 'Upper Intermediate', color: 'bg-orange-100 text-orange-800 border-orange-300', description: 'Advanced' }
  };
  return info[level];
};

export function TopicLesson({ 
  lessonId,
  title, 
  description, 
  difficulty,
  keyPoints,
  media, 
  examples, 
  practiceExercise 
}: TopicLessonProps) {
  const [completed, setCompleted] = useState(false);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    if (lessonId) {
      setCompleted(isLessonCompleted(lessonId));
    }

    // Track time spent when component unmounts
    return () => {
      if (lessonId) {
        const timeSpent = Math.floor((Date.now() - startTime) / 60000); // minutes
        // Could call addTimeSpent(lessonId, timeSpent) here if needed
      }
    };
  }, [lessonId, startTime]);

  const handleMarkComplete = () => {
    if (lessonId && !completed) {
      const topicInfo = findTopicByLessonId(lessonId);
      
      if (topicInfo) {
        markLessonComplete(lessonId, topicInfo.topicId, topicInfo.topicLessons);
        setCompleted(true);
        toast.success("Lesson completed! Great job! 🎉");
      }
    }
  };

  const difficultyInfo = difficulty ? getDifficultyInfo(difficulty) : null;

  return (
    <div className="space-y-6">
      {/* Title and Description */}
      <div>
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="mb-0">{title}</h1>
              {difficultyInfo && (
                <Badge className={`${difficultyInfo.color} border flex items-center gap-1.5 px-3 py-1`}>
                  <Award className="w-3.5 h-3.5" />
                  <span>{difficulty} - {difficultyInfo.label}</span>
                </Badge>
              )}
            </div>
          </div>
        </div>
        <div className="border-l-4 border-primary bg-[#f6f8fa] p-4 mb-6">
          <p>{description}</p>
        </div>
      </div>

      {/* Media Section */}
      {media && media.length > 0 && (
        <LessonMedia media={media} />
      )}

      {/* Key Points */}
      {keyPoints.length > 0 && (
        <Card className="p-6 border-2">
          <h2 className="mb-4">Key Points</h2>
          <ul className="space-y-3">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Examples */}
      <div>
        <h2 className="mb-4">Examples</h2>
        <div className="space-y-4">
          {examples.map((example, index) => (
            <Card key={index} className="p-5">
              <div className="bg-[#f6f8fa] p-4 rounded-lg border mb-3">
                <p className="font-mono">{example.sentence}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <p className="text-muted-foreground text-sm">{example.explanation}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Practice Exercise */}
      {practiceExercise && (
        <MultipleChoiceQuiz
          lessonId={lessonId}
          question={practiceExercise.question}
          options={practiceExercise.options}
          correctAnswer={practiceExercise.correctAnswer}
          explanation={practiceExercise.explanation}
        />
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t gap-4">
        <button className="px-6 py-2 bg-secondary text-white rounded hover:opacity-90 transition-opacity">
          ← Previous
        </button>
        <div className="flex items-center gap-3">
          {lessonId && (
            <Button
              onClick={handleMarkComplete}
              disabled={completed}
              variant={completed ? "outline" : "default"}
              className={completed ? "border-green-500 text-green-700" : "bg-[#288f8a] hover:bg-[#236f6b] text-white"}
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              {completed ? "Completed" : "Mark as Complete"}
            </Button>
          )}
          <button className="px-6 py-2 bg-secondary text-white rounded hover:opacity-90 transition-opacity">
            Next →
          </button>
        </div>
      </div>

      {/* Comment Section */}
      <CommentSection />
    </div>
  );
}