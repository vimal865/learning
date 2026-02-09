import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Monitor,
  FileCheck,
  TrendingUp,
  BookOpen,
  Target,
  Award,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/layout/MainLayout';

const modules = [
  {
    week: '1-2',
    icon: Monitor,
    title: 'ERP Basics & Navigation',
    description: 'Master the fundamentals of enterprise resource planning systems.',
    topics: [
      'Introduction to ERP Systems',
      'SAP S/4HANA Navigation',
      'Oracle Financials Overview',
      'Master Data Concepts',
      'System Configuration Basics'
    ]
  },
  {
    week: '3-4',
    icon: BookOpen,
    title: 'Finance Operations & Processes',
    description: 'Learn core accounting and finance workflows used in corporations.',
    topics: [
      'Financial Accounting Fundamentals',
      'P2P/O2C/R2R Process Overview',
      'Chart of Accounts',
      'Cost Centers & Profit Centers',
      'Intercompany Accounting'
    ]
  },
  {
    week: '5-6',
    icon: FileCheck,
    title: 'Compliance & Control Frameworks',
    description: 'Understand SOX compliance, audit controls, and regulatory requirements.',
    topics: [
      'SOX Compliance Basics',
      'Internal Controls Framework',
      'Audit Trail & Documentation',
      'Segregation of Duties',
      'Risk Assessment'
    ]
  },
  {
    week: '7-8',
    icon: TrendingUp,
    title: 'Excel & Reporting Labs',
    description: 'Advanced Excel skills for financial analysis and reporting.',
    topics: [
      'Advanced Excel Functions',
      'Pivot Tables & Charts',
      'Data Analysis & Visualization',
      'Financial Modeling Basics',
      'Report Generation'
    ]
  },
  {
    week: '9-10',
    icon: Target,
    title: 'Mock Interviews & Assessments',
    description: 'Practice with real interview scenarios and get feedback.',
    topics: [
      'Technical Interview Prep',
      'HR Interview Skills',
      'Case Study Practice',
      'Assessment Tests',
      'Feedback Sessions'
    ]
  },
  {
    week: '11-12',
    icon: Award,
    title: 'Corporate Readiness Training',
    description: 'Soft skills and professional conduct for the corporate world.',
    topics: [
      'Professional Communication',
      'Email & Meeting Etiquette',
      'Team Collaboration',
      'Time Management',
      'Career Planning'
    ]
  }
];

const learningOutcomes = [
  'Navigate and operate major ERP systems (SAP, Oracle)',
  'Execute end-to-end finance processes (P2P, O2C, R2R)',
  'Understand compliance and internal control frameworks',
  'Perform financial analysis and create reports',
  'Communicate professionally in corporate settings',
  'Clear technical and HR interview rounds'
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function Curriculum() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Curriculum</span> Snapshot
            </h1>
            <p className="text-lg text-white/80">
              A comprehensive 12-week curriculum designed with industry input to ensure 
              you are corporate-ready from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Modules */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8"
              >
                {/* Week indicator */}
                <div className="flex-shrink-0 w-20">
                  <div className="text-sm text-muted-foreground">Week</div>
                  <div className="text-2xl font-bold text-gold-500">{module.week}</div>
                </div>

                {/* Timeline dot */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center">
                    <module.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  {index < modules.length - 1 && (
                    <div className="w-0.5 flex-1 bg-navy-200 my-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                    <h3 className="font-display text-xl font-bold text-navy-800 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {module.description}
                    </p>
                    <div className="space-y-2">
                      {module.topics.map((topic) => (
                        <div key={topic} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          <span className="text-sm text-navy-600">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Learning Outcomes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              By the end of the program, you will be able to:
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {learningOutcomes.map((outcome, index) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
              >
                <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-navy-700">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div
              {...fadeInUp}
              className="bg-navy-800 rounded-2xl p-8 text-white"
            >
              <div className="text-4xl font-bold text-gold-400 mb-2">70%</div>
              <h3 className="font-display text-xl font-bold mb-2">Hands-On Practice</h3>
              <p className="text-white/70">
                Live ERP system access with real-world scenarios and case studies.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="bg-card rounded-2xl p-8 shadow-card border border-border"
            >
              <div className="text-4xl font-bold text-gold-500 mb-2">20%</div>
              <h3 className="font-display text-xl font-bold text-navy-800 mb-2">Instructor-Led</h3>
              <p className="text-muted-foreground">
                Expert trainers guide you through concepts and best practices.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="bg-gold-50 rounded-2xl p-8 border border-gold-200"
            >
              <div className="text-4xl font-bold text-gold-600 mb-2">10%</div>
              <h3 className="font-display text-xl font-bold text-navy-800 mb-2">Self-Paced</h3>
              <p className="text-navy-600">
                Assignments and assessments to reinforce your learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Join our next batch and transform your finance career in 12 weeks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/programs">
                <Button variant="hero" size="xl">
                  View Programs
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/batches">
                <Button variant="hero-outline" size="xl">
                  Check Batch Dates
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Curriculum;
