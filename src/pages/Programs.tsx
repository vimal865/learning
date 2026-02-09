import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  Clock, 
  Users, 
  CheckCircle,
  Monitor,
  FileCheck,
  TrendingUp,
  Award,
  Briefcase,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/layout/MainLayout';

const programTracks = {
  'p2p': {
    id: 'p2p',
    title: 'P2P Track',
    subtitle: 'Accounts Payable Executive',
    description: 'Master Procure-to-Pay processes including invoice processing, vendor management, and payment operations.',
    fullDescription: 'The Procure-to-Pay (P2P) track prepares you for a career as an Accounts Payable Executive. You\'ll learn end-to-end invoice processing, vendor master management, payment processing, and reconciliation. This track focuses on the critical skills needed to manage corporate accounts payable operations efficiently.',
    duration: '12 Weeks',
    fee: '₹20,000',
    color: 'blue',
    icon: FileCheck,
    skills: [
      'Invoice Processing & Matching',
      'Vendor Master Management',
      'Payment Processing (ACH, Wire, Check)',
      'Account Reconciliation',
      'SAP MM/AP Module',
      'Oracle Payables',
      'Compliance & Controls',
      'Process Documentation'
    ],
    tools: ['SAP S/4HANA', 'Oracle Financials', 'MS Excel Advanced', 'Power BI'],
    outcomes: [
      'Accounts Payable Executive',
      'AP Analyst',
      'Vendor Management Specialist',
      'P2P Process Associate'
    ],
    modules: [
      { title: 'ERP Basics & Navigation', weeks: '1-2' },
      { title: 'Procure-to-Pay Fundamentals', weeks: '3-4' },
      { title: 'Invoice Processing & Matching', weeks: '5-6' },
      { title: 'Payment Operations', weeks: '7-8' },
      { title: 'Compliance & Controls', weeks: '9-10' },
      { title: 'Corporate Readiness & Placement', weeks: '11-12' },
    ]
  },
  'o2c': {
    id: 'o2c',
    title: 'O2C Track',
    subtitle: 'Accounts Receivable Associate',
    description: 'Learn Order-to-Cash cycle including billing, collections, and customer account management.',
    fullDescription: 'The Order-to-Cash (O2C) track prepares you for a career as an Accounts Receivable Associate. You\'ll master billing operations, credit management, collections processes, and cash application. This track focuses on revenue cycle management and customer account operations.',
    duration: '12 Weeks',
    fee: '₹20,000',
    color: 'emerald',
    icon: TrendingUp,
    skills: [
      'Billing & Invoicing',
      'Credit Management',
      'Collections Operations',
      'Cash Application',
      'SAP SD/AR Module',
      'Oracle Receivables',
      'Customer Master Management',
      'Revenue Recognition'
    ],
    tools: ['SAP S/4HANA', 'Oracle Financials', 'MS Excel Advanced', 'Tableau'],
    outcomes: [
      'Accounts Receivable Associate',
      'AR Analyst',
      'Collections Specialist',
      'O2C Process Lead'
    ],
    modules: [
      { title: 'ERP Basics & Navigation', weeks: '1-2' },
      { title: 'Order-to-Cash Fundamentals', weeks: '3-4' },
      { title: 'Billing & Credit Management', weeks: '5-6' },
      { title: 'Collections & Cash Application', weeks: '7-8' },
      { title: 'Revenue Recognition & Controls', weeks: '9-10' },
      { title: 'Corporate Readiness & Placement', weeks: '11-12' },
    ]
  },
  'r2r': {
    id: 'r2r',
    title: 'R2R Track',
    subtitle: 'General Ledger & Reporting',
    description: 'Focus on Record-to-Report including journal entries, reconciliations, and financial reporting.',
    fullDescription: 'The Record-to-Report (R2R) track prepares you for General Ledger and Financial Reporting roles. You\'ll learn journal entries, account reconciliations, period-end closing, and financial statement preparation. This track is ideal for those interested in core accounting and financial reporting.',
    duration: '12 Weeks',
    fee: '₹20,000',
    color: 'purple',
    icon: BookOpen,
    skills: [
      'Journal Entry Processing',
      'Account Reconciliation',
      'Period-End Closing',
      'Financial Reporting',
      'SAP FICO Module',
      'Oracle GL',
      'Intercompany Accounting',
      'Fixed Assets Management'
    ],
    tools: ['SAP S/4HANA', 'Oracle Financials', 'MS Excel Advanced', 'BlackLine'],
    outcomes: [
      'GL Accountant',
      'Financial Analyst',
      'Reporting Analyst',
      'R2R Process Associate'
    ],
    modules: [
      { title: 'ERP Basics & Navigation', weeks: '1-2' },
      { title: 'Record-to-Report Fundamentals', weeks: '3-4' },
      { title: 'Journal Entries & Reconciliation', weeks: '5-6' },
      { title: 'Period-End Close Process', weeks: '7-8' },
      { title: 'Financial Reporting & Analysis', weeks: '9-10' },
      { title: 'Corporate Readiness & Placement', weeks: '11-12' },
    ]
  },
  'sap-fico': {
    id: 'sap-fico',
    title: 'SAP FICO',
    subtitle: 'ERP Finance Configuration',
    description: 'Advanced SAP FICO configuration and support skills for ERP specialists.',
    fullDescription: 'The SAP FICO add-on module is designed for those who want to specialize in ERP configuration and support. You\'ll learn SAP Financial Accounting (FI) and Controlling (CO) module configuration, master data setup, and system customization. This advanced track opens doors to ERP consultant roles.',
    duration: 'Add-on Module',
    fee: '₹20,000',
    color: 'orange',
    icon: Monitor,
    skills: [
      'SAP FI Configuration',
      'SAP CO Configuration',
      'Master Data Setup',
      'Chart of Accounts Design',
      'Cost Center Accounting',
      'Profit Center Accounting',
      'Asset Accounting',
      'Integration Points'
    ],
    tools: ['SAP S/4HANA', 'SAP GUI', 'SAP Fiori', 'ABAP Basics'],
    outcomes: [
      'SAP FICO Consultant',
      'ERP Support Analyst',
      'Finance Systems Analyst',
      'SAP Implementation Specialist'
    ],
    modules: [
      { title: 'SAP Architecture & Navigation', weeks: '1-2' },
      { title: 'Financial Accounting (FI) Basics', weeks: '3-4' },
      { title: 'FI Configuration', weeks: '5-6' },
      { title: 'Controlling (CO) Basics', weeks: '7-8' },
      { title: 'CO Configuration', weeks: '9-10' },
      { title: 'Integration & Support', weeks: '11-12' },
    ]
  }
};

const allTracks = Object.values(programTracks);

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const curriculumModules = [
  { icon: Monitor, title: 'ERP Basics & Navigation', description: 'Master SAP, Oracle, and enterprise system fundamentals' },
  { icon: Briefcase, title: 'Finance Operations & Processes', description: 'Learn core accounting and finance workflows' },
  { icon: FileCheck, title: 'Compliance & Control Frameworks', description: 'Understand SOX, audit controls, and compliance' },
  { icon: TrendingUp, title: 'Excel & Reporting Labs', description: 'Advanced Excel, pivot tables, and data analysis' },
  { icon: Target, title: 'Mock Interviews & Assessments', description: 'Practice with real interview scenarios' },
  { icon: Award, title: 'Corporate Readiness Training', description: 'Soft skills, email etiquette, and professional conduct' },
];

export function Programs() {
  const { trackId } = useParams();
  const track = trackId ? programTracks[trackId as keyof typeof programTracks] : null;

  if (track) {
    return <ProgramDetail track={track} />;
  }

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
              Program <span className="text-gradient">Tracks</span>
            </h1>
            <p className="text-lg text-white/80">
              Choose your specialization and begin your journey to a successful finance career.
              Each track is designed with industry input to ensure you're job-ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {allTracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-8 shadow-card card-hover border border-border relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-40 h-40 bg-${track.color}-500/10 rounded-full blur-3xl -mr-20 -mt-20`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-${track.color}-100 text-${track.color}-700 border border-${track.color}-200`}>
                      {track.duration}
                    </span>
                    <track.icon className={`w-12 h-12 text-${track.color}-500`} />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-navy-800 mb-1">
                    {track.title}
                  </h3>
                  <p className="text-gold-600 font-semibold mb-4">{track.subtitle}</p>
                  <p className="text-muted-foreground mb-6">
                    {track.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {track.skills.slice(0, 4).map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-navy-50 text-navy-600 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                    {track.skills.length > 4 && (
                      <span className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-xs">
                        +{track.skills.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t">
                    <div>
                      <span className="text-sm text-muted-foreground">Fee</span>
                      <p className="text-2xl font-bold text-navy-800">{track.fee}</p>
                    </div>
                    <Link to={`/programs/${track.id}`}>
                      <Button variant="gold">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Snapshot */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
              Curriculum Snapshot
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive curriculum designed with industry input to ensure you are corporate-ready.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border"
              >
                <module.icon className="w-10 h-10 text-gold-500 mb-4" />
                <h3 className="font-display text-lg font-semibold text-navy-800 mb-2">
                  {module.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-8 md:p-12 text-center">
            <motion.div {...fadeInUp}>
              <Award className="w-16 h-16 text-gold-400 mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Industry-Recognized Certification
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Upon successful completion, receive a certificate recognized by our corporate partners.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-8 py-4 border border-white/20">
                  <span className="text-2xl font-bold text-white">SAP</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-8 py-4 border border-white/20">
                  <span className="text-2xl font-bold text-white">Oracle</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-8 py-4 border border-white/20">
                  <span className="text-2xl font-bold text-white">ERP</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gold-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Ready to Start?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Choose your track and begin your journey to a successful finance career today.
            </p>
            <Link to="/contact">
              <Button variant="default" size="xl">
                Talk to Career Expert
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

interface ProgramDetailProps {
  track: typeof programTracks[keyof typeof programTracks];
}

function ProgramDetail({ track }: ProgramDetailProps) {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Link to="/programs" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Programs
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-${track.color}-500/20 text-${track.color}-300 border border-${track.color}-400/30`}>
                {track.duration}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              {track.title}
            </h1>
            <p className="text-2xl text-gold-400 font-semibold mb-6">{track.subtitle}</p>
            <p className="text-lg text-white/80 max-w-2xl">
              {track.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="w-8 h-8 text-gold-500 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="text-lg font-semibold text-navy-800">{track.duration}</p>
            </div>
            <div className="text-center">
              <span className="text-3xl block mb-2">{track.fee}</span>
              <p className="text-sm text-muted-foreground">Course Fee</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-gold-500 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Batch Size</p>
              <p className="text-lg font-semibold text-navy-800">20-30 Students</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-gold-500 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Certification</p>
              <p className="text-lg font-semibold text-navy-800">Industry Recognized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills */}
            <motion.div {...fadeInUp}>
              <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">
                Skills You'll Learn
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {track.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 p-3 bg-navy-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-navy-700">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Career */}
            <div className="space-y-8">
              <motion.div {...fadeInUp}>
                <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">
                  Tools & Technologies
                </h2>
                <div className="flex flex-wrap gap-3">
                  {track.tools.map((tool) => (
                    <span key={tool} className="px-4 py-2 bg-gradient-to-r from-navy-700 to-navy-800 text-white rounded-lg font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeInUp}>
                <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">
                  Career Outcomes
                </h2>
                <div className="space-y-3">
                  {track.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-3 p-3 bg-gold-50 rounded-lg border border-gold-200">
                      <Briefcase className="w-5 h-5 text-gold-600 flex-shrink-0" />
                      <span className="text-navy-700 font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Curriculum
            </h2>
            <p className="text-muted-foreground">
              A structured 12-week journey to become job-ready
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {track.modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 mb-4"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-sm text-muted-foreground">Week</span>
                  <p className="text-lg font-bold text-gold-600">{module.weeks}</p>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-gold-400" />
                  {index < track.modules.length - 1 && (
                    <div className="w-0.5 h-full bg-gold-200 my-1" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-card rounded-xl p-4 shadow-card border border-border">
                    <h3 className="font-semibold text-navy-800">{module.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding hero-bg">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Enroll in {track.title}?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Take the first step towards your finance career today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/enroll">
                <Button variant="hero" size="xl">
                  Enroll Now - {track.fee}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  Talk to Expert
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Programs;
