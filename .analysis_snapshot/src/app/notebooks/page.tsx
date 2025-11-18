import NavigationHeader from "@/components/sections/navigation-header";
import Link from "next/link";
import { Book, ChevronRight, TrendingUp, Clock, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for categories with notebooks
const categories = [
  {
    id: "ai",
    name: "AI & Machine Learning",
    description: "Explore cutting-edge AI research, machine learning algorithms, and neural network architectures",
    notebookCount: 127,
    notebooks: [
      { id: "1", title: "Introduction to Machine Learning", author: "Dr. Sarah Chen", views: 1247, likes: 89, tags: ["ML", "AI"] },
      { id: "2", title: "Large Language Models Explained", author: "Prof. Michael Torres", views: 2103, likes: 156, tags: ["LLM", "NLP"] },
      { id: "3", title: "Neural Networks Deep Dive", author: "Dr. Emily Watson", views: 891, likes: 67, tags: ["Neural Networks", "Deep Learning"] },
      { id: "4", title: "Reinforcement Learning Basics", author: "Dr. James Liu", views: 745, likes: 54, tags: ["RL", "AI"] },
      { id: "5", title: "Computer Vision Fundamentals", author: "Prof. Anna Kim", views: 1532, likes: 98, tags: ["CV", "CNN"] },
      { id: "6", title: "Natural Language Processing", author: "Dr. Robert Martinez", views: 1089, likes: 72, tags: ["NLP", "Transformers"] },
    ],
  },
  {
    id: "science",
    name: "Science",
    description: "Discover scientific research across physics, chemistry, biology, and earth sciences",
    notebookCount: 89,
    notebooks: [
      { id: "7", title: "Climate Science Overview", author: "Dr. Linda Green", views: 956, likes: 63, tags: ["Climate", "Environment"] },
      { id: "8", title: "Quantum Computing Primer", author: "Prof. David Zhang", views: 1876, likes: 132, tags: ["Quantum", "Physics"] },
      { id: "9", title: "Molecular Biology Essentials", author: "Dr. Susan Park", views: 678, likes: 45, tags: ["Biology", "Genetics"] },
      { id: "10", title: "Astrophysics for Beginners", author: "Prof. Carlos Rodriguez", views: 1234, likes: 87, tags: ["Space", "Physics"] },
      { id: "11", title: "Organic Chemistry Guide", author: "Dr. Jennifer Lee", views: 834, likes: 56, tags: ["Chemistry", "Organic"] },
      { id: "12", title: "Neuroscience Fundamentals", author: "Prof. Ahmed Hassan", views: 1456, likes: 92, tags: ["Brain", "Neuroscience"] },
    ],
  },
  {
    id: "technology",
    name: "Technology",
    description: "Stay updated with latest tech trends, programming, web development, and software engineering",
    notebookCount: 203,
    notebooks: [
      { id: "13", title: "React Best Practices 2024", author: "Alex Johnson", views: 2134, likes: 167, tags: ["React", "JavaScript"] },
      { id: "14", title: "System Design Patterns", author: "Maria Garcia", views: 1789, likes: 124, tags: ["Architecture", "Design"] },
      { id: "15", title: "Docker and Kubernetes Guide", author: "Tom Anderson", views: 1456, likes: 98, tags: ["DevOps", "Containers"] },
      { id: "16", title: "TypeScript Advanced Topics", author: "Sarah Williams", views: 1234, likes: 89, tags: ["TypeScript", "JavaScript"] },
      { id: "17", title: "Database Optimization Tips", author: "John Smith", views: 987, likes: 67, tags: ["Database", "SQL"] },
      { id: "18", title: "API Design Principles", author: "Lisa Brown", views: 1567, likes: 103, tags: ["API", "REST"] },
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "Learn about entrepreneurship, management, marketing, and business strategy",
    notebookCount: 64,
    notebooks: [
      { id: "19", title: "Startup Growth Strategies", author: "Mark Thompson", views: 1823, likes: 134, tags: ["Startup", "Growth"] },
      { id: "20", title: "Product Management 101", author: "Rachel Green", views: 1456, likes: 98, tags: ["Product", "Management"] },
      { id: "21", title: "Digital Marketing Essentials", author: "Kevin White", views: 1234, likes: 87, tags: ["Marketing", "Digital"] },
      { id: "22", title: "Financial Planning Guide", author: "Amanda Davis", views: 1089, likes: 72, tags: ["Finance", "Planning"] },
    ],
  },
  {
    id: "health",
    name: "Health & Medicine",
    description: "Medical research, healthcare innovations, and wellness knowledge",
    notebookCount: 72,
    notebooks: [
      { id: "23", title: "Nutrition Science Basics", author: "Dr. Nicole Adams", views: 1678, likes: 112, tags: ["Nutrition", "Health"] },
      { id: "24", title: "Mental Health Awareness", author: "Dr. Thomas Wright", views: 1345, likes: 94, tags: ["Mental Health", "Psychology"] },
      { id: "25", title: "Exercise Physiology", author: "Dr. Jessica Moore", views: 987, likes: 65, tags: ["Exercise", "Fitness"] },
      { id: "26", title: "Medical Imaging Techniques", author: "Dr. Richard Taylor", views: 834, likes: 56, tags: ["Medicine", "Imaging"] },
    ],
  },
  {
    id: "history",
    name: "History",
    description: "Explore historical events, civilizations, and cultural heritage",
    notebookCount: 45,
    notebooks: [
      { id: "27", title: "Ancient Rome Civilization", author: "Prof. Marcus Stone", views: 1456, likes: 98, tags: ["History", "Rome"] },
      { id: "28", title: "World War II Analysis", author: "Dr. Helen Carter", views: 1234, likes: 87, tags: ["WWII", "History"] },
      { id: "29", title: "Renaissance Art & Culture", author: "Prof. Isabella Rossi", views: 1089, likes: 73, tags: ["Art", "Renaissance"] },
    ],
  },
];

export default function NotebooksPage() {
  const totalNotebooks = categories.reduce((sum, cat) => sum + cat.notebookCount, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationHeader />
      
      <main className="mx-auto max-w-6xl px-6 pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 font-mono">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Notebooks</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Book className="h-8 w-8" />
            <h1 className="text-xl font-normal">Explore Notebooks</h1>
          </div>
          <p className="text-sm text-muted-foreground max-w-3xl">
            Browse {totalNotebooks}+ notebooks across {categories.length} categories. Discover research notes, 
            learning materials, and knowledge bases shared by the community.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="border border-border bg-card p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-muted-foreground">Total Notebooks</span>
              <Book className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-normal">{totalNotebooks}+</p>
          </div>
          <div className="border border-border bg-card p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-muted-foreground">Categories</span>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-normal">{categories.length}</p>
          </div>
          <div className="border border-border bg-card p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-muted-foreground">This Week</span>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-normal">47</p>
          </div>
          <div className="border border-border bg-card p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-muted-foreground">Most Liked</span>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-normal">2.1k</p>
          </div>
        </div>

        {/* Categories with Notebooks */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id}>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-lg font-normal">{category.name}</h2>
                    <span className="text-xs font-mono text-muted-foreground border border-border px-3 py-1 rounded-full">
                      {category.notebookCount} notebooks
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
                <Link href={`/category/${category.id}`}>
                  <Button variant="ghost" className="text-sm font-mono text-muted-foreground hover:text-foreground">
                    View all
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>

              {/* Notebooks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.notebooks.map((notebook) => (
                  <Link key={notebook.id} href={`/notebook/${notebook.id}`}>
                    <div className="border border-border bg-card p-4 hover:bg-accent transition-colors h-full">
                      {/* Notebook Content */}
                      <div className="flex flex-col h-full">
                        <h3 className="text-sm font-medium mb-2 line-clamp-2">{notebook.title}</h3>
                        
                        {/* Author */}
                        <p className="text-xs text-muted-foreground font-mono mb-3">{notebook.author}</p>
                        
                        {/* Tags */}
                        <div className="flex gap-2 flex-wrap mb-4">
                          {notebook.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="text-[10px] font-mono text-muted-foreground border border-border px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Stats */}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono mt-auto">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{notebook.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            <span>{notebook.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="font-mono">© 2024 Supernotebooklm</p>
            <nav className="flex gap-6">
              <a href="/about" className="hover:text-foreground transition-colors">About</a>
              <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
              <a href="/contact" className="hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
