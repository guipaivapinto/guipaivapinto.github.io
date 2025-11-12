"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, FileText, BookOpen, Users, GraduationCap, Github } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("bio")

  const tabs = [
    { id: "bio", label: "Bio", icon: Users },
    { id: "research", label: "Research", icon: BookOpen },
    { id: "teaching", label: "Teaching", icon: GraduationCap },
    { id: "github", label: "GitHub", icon: Github },
    { id: "cv", label: "CV", icon: FileText },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">[Your Full Name]</h1>
              <p className="text-lg text-gray-600 mt-1">PhD Candidate in Economics</p>
              <p className="text-sm text-gray-500">[University Name] • Expected Graduation: [Year]</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link href="mailto:your.email@university.edu">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/cv.pdf" target="_blank">
                  <FileText className="w-4 h-4 mr-2" />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
      {/* Bio Tab */}
{activeTab === "bio" && (
  <div className="space-y-8">
    {/* Two columns: LEFT = info + JMP button; RIGHT = background image only */}
    <section className="grid gap-8 md:grid-cols-2 min-h-[60vh]">
      {/* LEFT */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              I am a PhD candidate in Economics at [University Name], specializing in [your research areas,
              e.g., labor economics, development economics, industrial organization]. My research focuses on
              [brief description of your research interests and methodology].
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              My dissertation examines [brief description of dissertation topic]. I employ [methods/approaches]
              to investigate [research questions]. This work contributes to our understanding of [broader
              implications].
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prior to my doctoral studies, I completed my [previous degree] at [previous institution] in
              [year]. I have experience in [relevant experience, research methods, policy work, etc.].
            </p>
            <p className="text-gray-700 leading-relaxed">
              I am currently on the academic job market for the [Year-Year] cycle and will be available for
              interviews at the ASSA meetings in [Location, Month Year].
            </p>

            {/* Download my JMP button */}
            <div className="mt-6">
              <Button asChild>
                <Link
                  href="https://www.dropbox.com/scl/fi/0dgvw2l3jr7zorr1eqsay/GPP_JMP_OCTOBER_V3.pdf?rlkey=0t9h8mnv6audsojyeo21ye0nk&st=m8vb61mk&dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Download my JMP
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* RIGHT (background image only; no overlaid content) */}
      <div
        aria-hidden="true"
        className="rounded-lg overflow-hidden min-h-[320px]"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/fortaleza-lighthouse.jpg')" }}
        />
      </div>
    </section>
  </div>
)}


        {/* Research Tab */}
        {activeTab === "research" && (
          <div className="space-y-8">
            {/* Job Market Paper */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Job Market Paper</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">"[Title of Your Job Market Paper]"</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    [Abstract or detailed description of your job market paper. Include the main research question,
                    methodology, key findings, and policy implications. This should be 3-4 sentences that clearly
                    communicate the contribution and importance of your work.]
                  </p>
                  <div className="flex gap-3">
                    <Button size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      Paper (PDF)
                    </Button>
                    <Button size="sm" variant="outline">
                      Slides
                    </Button>
                    <Button size="sm" variant="outline">
                      Online Appendix
                    </Button>
                  </div>
                </div>
              </CardContent>
              {/* Quick explainer before the video */}
<div className="mt-8">
  <h4 className="text-lg font-semibold mb-2">Research Behind My Job Market Paper</h4>
  <p className="text-gray-700 mb-4">
    The Notebook&nbsp;LM generated a short video that explains the core ideas behind my JMP.
  </p>

  {/* Responsive 16:9 iframe container */}
  <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow" style={{ paddingTop: "56.25%" }}>
    {/* NOTE: pointing directly at the MP4 in your repo root (no new files). 
       Some browsers will play MP4s inline inside an iframe; if not, the fallback link appears below. */}
    <iframe
      src="/Mercosur_s_Stumbling_Bloc%20(1).mp4"
      title="JMP explainer video"
      className="absolute inset-0 w-full h-full border-0"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
    />
  </div>

  {/* Fallback link, in case a browser blocks MP4 in an iframe */}
  <p className="text-sm text-gray-500 mt-2">
    If the player above doesn’t load, <Link href="/Mercosur_s_Stumbling_Bloc%20(1).mp4" className="text-blue-600 underline">open the video directly</Link>.
  </p>
</div>

            </Card>

            {/* Working Papers */}
            <Card>
              <CardHeader>
                <CardTitle>Working Papers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-gray-300 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">"[Working Paper Title 1]"</h4>
                    <p className="text-sm text-gray-600 mb-2">[Co-authors if any]</p>
                    <p className="text-gray-700 mb-3">
                      [Brief description of the paper, research question, and main findings]
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Draft
                      </Button>
                      <Button size="sm" variant="outline">
                        Slides
                      </Button>
                    </div>
                  </div>

                  <div className="border-l-4 border-gray-300 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">"[Working Paper Title 2]"</h4>
                    <p className="text-sm text-gray-600 mb-2">[Co-authors if any]</p>
                    <p className="text-gray-700 mb-3">
                      [Brief description of the paper, research question, and main findings]
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Draft
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work in Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Work in Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">"[Project Title 1]"</h4>
                    <p className="text-sm text-gray-600">[Co-authors if any]</p>
                    <p className="text-gray-700 text-sm mt-1">[Brief description of the project]</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">"[Project Title 2]"</h4>
                    <p className="text-sm text-gray-600">[Co-authors if any]</p>
                    <p className="text-gray-700 text-sm mt-1">[Brief description of the project]</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Publications (if any) */}
            <Card>
              <CardHeader>
                <CardTitle>Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">Publications will be listed here upon completion.</p>
              </CardContent>
            </Card>

            {/* Interactive Applications */}
            <Card>
              <CardHeader>
                <CardTitle>Interactive Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">[Your Shiny App Title]</h3>
                    <p className="text-gray-700 mb-4">
                      [Brief description of what your Shiny app does, what data it uses, and how it relates to your
                      research]
                    </p>
                    <div className="flex gap-3 mb-4">
                      <Button size="sm" asChild>
                        <Link href="[YOUR_POSIT_SHINY_APP_URL]" target="_blank">
                          Open Full App
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href="https://github.com/yourusername/shiny-app-repo" target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Link>
                      </Button>
                    </div>

                    {/* Embedded Shiny App */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-2 border-b">
                        <p className="text-sm text-gray-600">
                          Interactive Preview (Full functionality available in new tab)
                        </p>
                      </div>
                      <iframe
                        src="[YOUR_POSIT_SHINY_APP_URL]"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        className="w-full"
                        title="[Your Shiny App Title]"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Teaching Tab */}
        {activeTab === "teaching" && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Teaching Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Teaching Assistant */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Teaching Assistant</h3>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">[Course Name]</h4>
                          <p className="text-sm text-gray-600">Professor: [Professor Name]</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Level: [Undergraduate/Graduate]</p>
                          <p className="text-sm text-gray-600">Enrollment: [Number] students</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">[Semester Year]</p>
                          <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                            Evaluations
                          </Button>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">[Course Name]</h4>
                          <p className="text-sm text-gray-600">Professor: [Professor Name]</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Level: [Undergraduate/Graduate]</p>
                          <p className="text-sm text-gray-600">Enrollment: [Number] students</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">[Semester Year]</p>
                          <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                            Evaluations
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Instructor of Record</h3>
                    <div className="grid md:grid-cols-3 gap-4 p-4 bg-blue-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">[Course Name]</h4>
                        <p className="text-sm text-gray-600">[Course Description]</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Level: [Undergraduate/Graduate]</p>
                        <p className="text-sm text-gray-600">Enrollment: [Number] students</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">[Semester Year]</p>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="outline">
                            Syllabus
                          </Button>
                          <Button size="sm" variant="outline">
                            Evaluations
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Teaching Philosophy */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Teaching Philosophy</h3>
                    <p className="text-gray-700 leading-relaxed">
                      [Brief statement about your teaching philosophy, approach to student learning, and pedagogical
                      methods. This should be 2-3 sentences highlighting your commitment to effective teaching and
                      student success.]
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* GitHub Tab */}
        {activeTab === "github" && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  Code & Data Repository
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <Github className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                    <h3 className="text-lg font-semibold mb-2">GitHub Profile</h3>
                    <p className="text-gray-600 mb-4">
                      Access replication code, datasets, and computational tools for my research
                    </p>
                    <Button asChild>
                      <Link href="https://github.com/yourusername" target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Visit GitHub Profile
                      </Link>
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Repositories</h3>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">[Repository Name 1]</h4>
                            <p className="text-gray-600 text-sm mt-1">Replication code for "[Paper Title]"</p>
                            <div className="flex gap-2 mt-2">
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">R</span>
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Stata</span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" asChild>
                            <Link href="https://github.com/yourusername/repo1" target="_blank">
                              View Code
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">[Repository Name 2]</h4>
                            <p className="text-gray-600 text-sm mt-1">Data processing tools for [Dataset/Project]</p>
                            <div className="flex gap-2 mt-2">
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Python</span>
                              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Jupyter</span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" asChild>
                            <Link href="https://github.com/yourusername/repo2" target="_blank">
                              View Code
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Skills</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Statistical Software</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Stata</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">R</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Python</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">MATLAB</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Other Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Git</span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">LaTeX</span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">SQL</span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">GIS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CV Tab */}
        {activeTab === "cv" && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Curriculum Vitae</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <Button asChild size="lg">
                    <Link href="/cv.pdf" target="_blank">
                      <FileText className="w-5 h-5 mr-2" />
                      Download Complete CV (PDF)
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-600 mt-2">Last updated: [Date]</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Education</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">PhD in Economics</h4>
                        <p className="text-gray-600">[University Name]</p>
                        <p className="text-sm text-gray-500">Expected [Month Year]</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Dissertation: "[Dissertation Title]"
                          <br />
                          Committee: [Advisor Name] (Chair), [Member 2], [Member 3]
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">[Previous Degree, e.g., MA in Economics]</h4>
                        <p className="text-gray-600">[University Name]</p>
                        <p className="text-sm text-gray-500">[Year]</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">[Undergraduate Degree]</h4>
                        <p className="text-gray-600">[University Name]</p>
                        <p className="text-sm text-gray-500">[Year]</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Fields of Interest</h3>
                    <div className="space-y-2">
                      <p>
                        <strong>Primary:</strong> [Your primary field]
                      </p>
                      <p>
                        <strong>Secondary:</strong> [Your secondary fields]
                      </p>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-6 border-b pb-2">Honors & Awards</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>[Award/Fellowship Name]</span>
                        <span className="text-gray-600">[Year]</span>
                      </div>
                      <div className="flex justify-between">
                        <span>[Award/Fellowship Name]</span>
                        <span className="text-gray-600">[Year]</span>
                      </div>
                      <div className="flex justify-between">
                        <span>[Award/Fellowship Name]</span>
                        <span className="text-gray-600">[Year]</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Presentations</h3>
                    <div className="space-y-2 text-sm">
                      <p>[Conference Name], [Location], [Year]</p>
                      <p>[Conference Name], [Location], [Year]</p>
                      <p>[Seminar/Workshop Name], [Location], [Year]</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Professional Experience</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">[Position Title]</h4>
                        <p className="text-sm text-gray-600">[Organization], [Dates]</p>
                      </div>
                      <div>
                        <h4 className="font-medium">[Position Title]</h4>
                        <p className="text-sm text-gray-600">[Organization], [Dates]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">[Your Name] • PhD Candidate in Economics • [University Name]</p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link href="mailto:your.email@university.edu" className="text-gray-600 hover:text-gray-900">
                your.email@university.edu
              </Link>
              <Link href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900">
                GitHub
              </Link>
              <Link href="https://linkedin.com/in/yourprofile" className="text-gray-600 hover:text-gray-900">
                LinkedIn
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString()} • On the job market [Academic Year]
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
