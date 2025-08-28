import { useParams, Link } from "react-router-dom";
import { COURSES } from "@/data/courseContent";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CoursePage() {
  const { slug } = useParams();
  const course = slug ? COURSES[slug] : undefined;

  if (!course) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <Card className="max-w-xl w-full text-center">
          <CardHeader>
            <CardTitle>Course not found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-muted-foreground">
              We couldn't find the course you're looking for. It may have been moved or renamed.
            </p>
            <Button asChild>
              <Link to="/training"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Training</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero with animated gradient background to ensure a distinct visual and readable text */}
      <section className="relative py-20 animated-hero-bg overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900/30" aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={fadeIn} initial="hidden" animate="show" className="max-w-4xl">
            <Button asChild variant="secondary" className="mb-6 bg-background/70">
              <Link to="/training"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Training</Link>
            </Button>
            <h1 className="text-4xl md:text-6xl font-bold text-background drop-shadow">
              {course.title}
            </h1>
            {course.summary && (
              <p className="mt-4 text-lg md:text-xl text-background/90 max-w-3xl">
                {course.summary}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 space-y-10">
          {/* Highlights */}
          {course.highlights && course.highlights.length > 0 && (
            <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle>Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {course.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Sections */}
          {course.sections && course.sections.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {course.sections.map((sec, idx) => (
                <motion.div key={idx} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{sec.heading}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {sec.body && <p className="text-muted-foreground mb-4">{sec.body}</p>}
                      {sec.items && (
                        <ul className="list-disc pl-5 space-y-1">
                          {sec.items.map((it, i) => (
                            <li key={i}>{it}</li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* Tables */}
          {course.tables && course.tables.length > 0 && (
            <div className="space-y-8">
              {course.tables.map((tbl, tIdx) => (
                <motion.div key={tIdx} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{tbl.caption || "Course Details"}</CardTitle>
                    </CardHeader>
                    <CardContent className="overflow-x-auto">
                      <table className="min-w-full border border-border rounded-md overflow-hidden">
                        <thead className="bg-muted/50">
                          <tr>
                            {tbl.columns.map((col, i) => (
                              <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b">{col}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {tbl.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 ? "bg-muted/20" : undefined}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-4 py-3 align-top text-sm text-foreground/90 border-b">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* Single table (backward compatibility) */}
          {!course.tables && course.table && (
            <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle>{course.table.caption || "Course Details"}</CardTitle>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <table className="min-w-full border border-border rounded-md overflow-hidden">
                    <thead className="bg-muted/50">
                      <tr>
                        {course.table.columns.map((col, i) => (
                          <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {course.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 ? "bg-muted/20" : undefined}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-3 align-top text-sm text-foreground/90 border-b">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
