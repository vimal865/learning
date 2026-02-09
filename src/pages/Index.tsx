import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Briefcase,
  Monitor,
  FileCheck,
  Target,
  Clock,
  Star,
  Quote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/layout/MainLayout';
import heroImage from '@/assets/hero-students.jpg';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';

const stats = [
  { value: '500+', label: 'Students Placed' },
  { value: '95%', label: 'Placement Rate' },
  { value: '90', label: 'Days Program' },
  { value: '50+', label: 'Hiring Partners' },
];

const employers = [
  'Accenture', 'Deloitte', 'EY', 'KPMG', 'Wipro', 'TCS', 'Infosys', 'Cognizant'
];

const programTracks = [
  {
    id: 'p2p',
    title: 'P2P Track',
    subtitle: 'Accounts Payable Executive',
    description: 'Master Procure-to-Pay processes including invoice processing, vendor management, and payment operations.',
    duration: '12 Weeks',
    color: 'blue',
    icon: FileCheck,
  },
  {
    id: 'o2c',
    title: 'O2C Track',
    subtitle: 'Accounts Receivable Associate',
    description: 'Learn Order-to-Cash cycle including billing, collections, and customer account management.',
    duration: '12 Weeks',
    color: 'emerald',
    icon: TrendingUp,
  },
  {
    id: 'r2r',
    title: 'R2R Track',
    subtitle: 'General Ledger & Reporting',
    description: 'Focus on Record-to-Report including journal entries, reconciliations, and financial reporting.',
    duration: '12 Weeks',
    color: 'purple',
    icon: BookOpen,
  },
  {
    id: 'sap-fico',
    title: 'SAP FICO',
    subtitle: 'ERP Finance Configuration',
    description: 'Advanced SAP FICO configuration and support skills for ERP specialists.',
    duration: 'Add-on Module',
    color: 'orange',
    icon: Monitor,
  },
];

const features = [
  {
    icon: BookOpen,
    title: 'Industry-Aligned Curriculum',
    description: 'Learn exactly what corporates need with up-to-date finance processes and compliance standards.',
  },
  {
    icon: Monitor,
    title: 'ERP Systems Training',
    description: 'Hands-on training with SAP S/4HANA, Oracle Financials, and other enterprise tools.',
  },
  {
    icon: Briefcase,
    title: 'Placement Pathways',
    description: 'Direct hiring opportunities with our network of SSCs, GCCs, BPOs, and MNCs.',
  },
  {
    icon: Award,
    title: 'Certificate + Career Guidance',
    description: 'Industry-recognized certification and personalized career counseling.',
  },
];

const steps = [
  { step: '01', title: 'Apply & Enroll', description: 'Complete your application and get enrolled in the next available batch.' },
  { step: '02', title: 'ERP Training + Live Finance Labs', description: 'Master SAP, Oracle, and finance operations through hands-on sessions.' },
  { step: '03', title: 'Real Process Simulations', description: 'Work on real corporate scenarios with AP, AR, GL, and reporting tasks.' },
  { step: '04', title: 'Placement & Hiring Support', description: 'Get connected with our hiring partners for direct job opportunities.' },
];

const programFeatures = [
  { icon: Users, title: 'Expert Trainers', description: 'Industry professionals with 10+ years experience' },
  { icon: Monitor, title: 'ERP Software Access', description: 'Hands-on practice on SAP & Oracle environments' },
  { icon: Target, title: 'Mock Interviews', description: 'Practice with real interview scenarios' },
  { icon: FileCheck, title: 'Resume Review', description: 'Professional resume building & feedback' },
  { icon: Briefcase, title: 'Industry Projects', description: 'Work on real-world finance case studies' },
  { icon: Award, title: 'Certification', description: 'Industry-recognized credentials on completion' },
];

const batches = [
  { name: 'Batch 15 - P2P Track', date: 'February 15, 2026', seats: 20, fee: '₹20,000', filling: true },
  { name: 'Batch 16 - O2C Track', date: 'March 1, 2026', seats: 25, fee: '₹20,000', filling: false },
  { name: 'Batch 17 - R2R Track', date: 'March 15, 2026', seats: 30, fee: '₹20,000', filling: false },
];

const testimonials = [
  {
    quote: "After training, I got a job in an SSC within 6 weeks! The ERP training was exactly what I needed to be job-ready.",
    name: "Priya Sharma",
    role: "Accounts Payable Executive at Deloitte SSC",
    image: testimonial1,
  },
  {
    quote: "The practical approach and mock interviews gave me the confidence I needed. Now I'm working with a Big 4 firm!",
    name: "Rahul Verma",
    role: "Finance Analyst at EY GDS",
    image: testimonial2,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-bg overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-1.5 bg-gold-400/20 text-gold-400 rounded-full text-sm font-medium border border-gold-400/30">
                  Train-to-Hire Program
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Finance & Accounting
                <span className="block text-gradient">Career Program</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
                Get Trained, Get Hired, Start Your Career. ERP-based Finance Training + 
                Real Corporate Job Opportunities for Freshers & Graduates.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  Industry-Aligned Curriculum
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  SAP & Oracle Training
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  Placement Support
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link to="/programs">
                  <Button variant="hero" size="xl">
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero-outline" size="xl">
                    Talk to Career Expert
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Students in finance training program"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4"
              >
                <div className="text-3xl font-bold text-navy-800">500+</div>
                <div className="text-sm text-muted-foreground">Students Placed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-gold-400 rounded-xl shadow-xl p-4"
              >
                <div className="text-3xl font-bold text-navy-900">95%</div>
                <div className="text-sm text-navy-700">Placement Rate</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-navy-800/80 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gold-400">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Employers */}
      <section className="py-12 bg-muted/50 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-6">Trusted by Leading Employers</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {employers.map((employer) => (
              <span
                key={employer}
                className="text-lg md:text-xl font-semibold text-navy-300"
              >
                {employer}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Program */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
              Why This Program?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your finance career in 90 days with hands-on ERP, real finance processes, 
              and direct placement support.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group bg-card rounded-2xl p-6 shadow-card card-hover border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Tracks */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
              Choose Your Track
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build a career in the most sought-after finance and accounting positions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {programTracks.map((track) => (
              <motion.div
                key={track.id}
                variants={fadeInUp}
                className="group bg-card rounded-2xl p-8 shadow-card card-hover border border-border relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${track.color}-500/10 rounded-full blur-2xl -mr-16 -mt-16`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-${track.color}-100 text-${track.color}-700 border border-${track.color}-200`}>
                        {track.duration}
                      </span>
                    </div>
                    <track.icon className={`w-10 h-10 text-${track.color}-500`} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy-800 mb-1">
                    {track.title}
                  </h3>
                  <p className="text-gold-600 font-medium mb-3">{track.subtitle}</p>
                  <p className="text-muted-foreground mb-6">
                    {track.description}
                  </p>
                  <Link to={`/programs/${track.id}`}>
                    <Button variant="default" className="group-hover:bg-navy-600">
                      Enroll Now
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="text-center mt-10"
          >
            <Link to="/programs">
              <Button variant="outline" size="lg">
                View All Programs
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your journey from enrollment to employment in four simple steps.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-500 text-navy-900 text-2xl font-bold mb-4 shadow-gold">
                    {step.step}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gold-400 to-gold-200" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Features Grid */}
      <section className="section-padding bg-navy-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Program Features
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Everything you need to become a job-ready finance professional.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {programFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <feature.icon className="w-10 h-10 text-gold-400 mb-4" />
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates who transformed their careers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                className="bg-card rounded-2xl p-8 shadow-card border border-border relative"
              >
                <Quote className="w-12 h-12 text-gold-400/20 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-display font-semibold text-navy-800">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-lg text-navy-700 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Batches */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
              Latest Batches & Start Dates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enroll now and begin your finance career transformation.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {batches.map((batch) => (
              <motion.div
                key={batch.name}
                variants={fadeInUp}
                className="bg-card rounded-2xl p-6 shadow-card card-hover border border-border relative"
              >
                {batch.filling && (
                  <span className="absolute -top-3 left-6 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full">
                    Filling Fast
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-navy-800 mb-4">
                  {batch.name}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-gold-500" />
                    <span>{batch.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-5 h-5 text-gold-500" />
                    <span>{batch.seats} Seats Left</span>
                  </div>
                  <div className="flex items-center gap-3 text-navy-800 font-semibold">
                    <span className="text-2xl">{batch.fee}</span>
                  </div>
                </div>
                <Link to="/programs">
                  <Button variant="gold" className="w-full">
                    Enroll Now
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-gold-400/20 text-gold-400 rounded-full text-sm font-medium mb-6">
              Start Your Journey Today
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Launch Your<br />
              <span className="text-gradient">Finance Career?</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful graduates who transformed their careers with 
              FinGrad's Train-to-Hire program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/programs">
                <Button variant="hero" size="xl">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
