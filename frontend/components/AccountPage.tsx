import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getUserProfile, updateUserProfile, UserProfile } from '../utils/userProfile';
import { getUserProgress } from '../utils/progressTracker';
import { lessons, topics, courses } from '../data/courses';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import {
  Mail,
  Phone,
  Calendar,
  Save,
  X,
  Award,
  BookOpen,
  Clock,
  Trophy,
  UserCircle,
  Edit2,
  Flame,
  BarChart3
} from 'lucide-react';
import React from 'react';

interface AccountPageProps {
  user: { username: string; email?: string } | null;
}

export function AccountPage({ user }: AccountPageProps) {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const progress = getUserProgress();

  // Form state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    birthdate: '',
    sex: '' as 'male' | 'female' | 'other' | 'prefer-not-to-say' | '',
    phoneNumber: '',
  });

  useEffect(() => {
    const userProfile = getUserProfile();
    if (userProfile) {
      setProfile(userProfile);
      setFormData({
        username: userProfile.username,
        email: userProfile.email,
        birthdate: userProfile.birthdate || '',
        sex: userProfile.sex || '',
        phoneNumber: userProfile.phoneNumber || '',
      });
    } else if (user) {
      // Create initial profile from user data
      setFormData({
        username: user.username,
        email: user.email || '',
        birthdate: '',
        sex: '',
        phoneNumber: '',
      });
    }
  }, [user]);

  const handleSave = () => {
    if (!formData.username || !formData.email) {
      toast.error(t('account.errors.requiredFields'));
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t('account.errors.invalidEmail'));
      return;
    }

    updateUserProfile({
      username: formData.username,
      email: formData.email,
      birthdate: formData.birthdate || undefined,
      sex: formData.sex || undefined,
      phoneNumber: formData.phoneNumber || undefined,
    });

    const updatedProfile = getUserProfile();
    setProfile(updatedProfile);
    setIsEditing(false);
    toast.success(t('account.saved'));
  };

  const handleCancel = () => {
    if (profile) {
      setFormData({
        username: profile.username,
        email: profile.email,
        birthdate: profile.birthdate || '',
        sex: profile.sex || '',
        phoneNumber: profile.phoneNumber || '',
      });
    }
    setIsEditing(false);
  };

  // Calculate statistics
  const totalLessons = Object.keys(lessons).length;
  const completedCount = progress.completedLessons.length;
  const completionPercentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  // Calculate total time spent
  const totalTimeSpent = Object.values(progress.timeSpent).reduce((sum, time) => sum + time, 0);

  // Calculate average quiz score
  const quizScores = Object.values(progress.quizScores);
  const averageScore = quizScores.length > 0 
    ? Math.round(quizScores.reduce((sum, score) => sum + score, 0) / quizScores.length)
    : 0;

  // Get completed courses/topics count
  const completedTopics = topics.filter(topic => {
    const topicProgress = progress.topicProgress[topic.id];
    return topicProgress && topicProgress.percentage === 100;
  }).length;

  // Calculate member duration
  const getMemberDuration = () => {
    if (!profile?.joinDate) return t('account.stats.new');
    
    const joinDate = new Date(profile.joinDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - joinDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 7) return `${diffDays} ${t('account.stats.days')}`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} ${t('account.stats.weeks')}`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} ${t('account.stats.months')}`;
    return `${Math.floor(diffDays / 365)} ${t('account.stats.years')}`;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">{t('account.title')}</h1>
          <p className="text-muted-foreground">{t('account.subtitle')}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Information Card */}
        <Card className="lg:col-span-2 p-6 border-2">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#225d9c] flex items-center justify-center">
                <UserCircle className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-xl">{formData.username}</h2>
                <p className="text-sm text-muted-foreground">
                  {t('account.memberFor')} {getMemberDuration()}
                </p>
              </div>
            </div>
            
            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-[#225d9c] hover:bg-[#1a4a7a]"
              >
                <Edit2 className="w-4 h-4 mr-2" />
                {t('account.edit')}
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  onClick={handleSave}
                  className="bg-[#288f8a] hover:bg-[#1f726e]"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {t('common.save')}
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="border-2"
                >
                  <X className="w-4 h-4 mr-2" />
                  {t('common.cancel')}
                </Button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Username */}
              <div className="space-y-2">
                <Label htmlFor="username" className="flex items-center gap-2">
                  <UserCircle className="w-4 h-4 text-[#225d9c]" />
                  {t('account.fields.username')}
                </Label>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  disabled={!isEditing}
                  className="border-2"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#225d9c]" />
                  {t('account.fields.email')}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={!isEditing}
                  className="border-2"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#225d9c]" />
                  {t('account.fields.phone')}
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  disabled={!isEditing}
                  placeholder={t('account.placeholders.phone')}
                  className="border-2"
                />
              </div>

              {/* Birthdate */}
              <div className="space-y-2">
                <Label htmlFor="birthdate" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#225d9c]" />
                  {t('account.fields.birthdate')}
                </Label>
                <Input
                  id="birthdate"
                  type="date"
                  value={formData.birthdate}
                  onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
                  disabled={!isEditing}
                  className="border-2"
                />
              </div>

              {/* Sex */}
              <div className="space-y-2">
                <Label htmlFor="sex">{t('account.fields.sex')}</Label>
                <Select
                  value={formData.sex}
                  onValueChange={(value: any) => setFormData({ ...formData, sex: value })}
                  disabled={!isEditing}
                >
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder={t('account.placeholders.sex')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">{t('account.sexOptions.male')}</SelectItem>
                    <SelectItem value="female">{t('account.sexOptions.female')}</SelectItem>
                    <SelectItem value="other">{t('account.sexOptions.other')}</SelectItem>
                    <SelectItem value="prefer-not-to-say">{t('account.sexOptions.preferNotToSay')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Stats Card */}
        <Card className="p-6 border-2">
          <h3 className="mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#225d9c]" />
            {t('account.quickStats')}
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#e8c02e]" />
                <span className="text-sm">{t('account.stats.streak')}</span>
              </div>
              <span className="font-bold text-lg">{progress.studyStreak}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#225d9c]" />
                <span className="text-sm">{t('account.stats.completed')}</span>
              </div>
              <span className="font-bold text-lg">{completedCount}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#288f8a]" />
                <span className="text-sm">{t('account.stats.topics')}</span>
              </div>
              <span className="font-bold text-lg">{completedTopics}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#e8c02e]" />
                <span className="text-sm">{t('account.stats.avgScore')}</span>
              </div>
              <span className="font-bold text-lg">{averageScore}%</span>
            </div>
          </div>
        </Card>
      </div>

    </div>
  );
}