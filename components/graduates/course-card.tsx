import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CourseProps {
  id: number
  title: string
  rating: number
  students: number
  lessons: number
  instructor: string
}

export function CourseCard({ course, index }: { course: CourseProps; index: number }) {
  return (
    <Card className="bg-[#1e293b]/70 border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge className="bg-[#CF0072] hover:bg-[#E82769] text-white border-0">DESTACADO</Badge>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#CF0072] h-8 w-8 p-0">
              <Star className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#CF0072] h-8 w-8 p-0">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{course.title}</h3>

        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < course.rating ? "fill-[#CF0072] text-[#CF0072]" : "text-gray-600"}`}
            />
          ))}
          <span className="text-sm text-gray-400 ml-2">({course.rating}.0)</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <span className="text-gray-500">📚</span> {course.lessons} Lecciones
          </span>
          <span className="flex items-center gap-1">
            <span className="text-gray-500">👥</span> {course.students} Estudiantes
          </span>
        </div>
      </div>
    </Card>
  )
}
