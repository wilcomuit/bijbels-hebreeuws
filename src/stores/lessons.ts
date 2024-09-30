import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import lessonList from '@/lessons/_lessonList'

export const useLessonsStore = defineStore('lessons', () => {
  const lessons: Ref<Array<LessonType>> = ref(lessonList())

  const toggleLesson = (id: string) => {
    const lesson = lessons.value.find((l: LessonType) => l.id === id)
    if (lesson) lesson.active = !lesson.active
  }

  const getActiveLessons = () => {
    return lessons.value.filter((l: LessonType) => l.active === true)
  }

  const deactivateLessons = () => {
    lessons.value.forEach((l: LessonType) => (l.active = false))
  }

  return { lessons, getActiveLessons, toggleLesson, deactivateLessons }
})
