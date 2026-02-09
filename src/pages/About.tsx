import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  Users, 
  Award, 
  Building,
  CheckCircle,
  Globe,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/layout/MainLayout';

const values = [
  {
    icon: Target,
    title: 'Industry-First Approach',
    description: 'Our curriculum is designed with direct input from hiring managers at top corporations.'
  },
  {
    icon: Users,
    title: 'Student Success Focus',
    description: 'Every decision we make is guided by what helps our students succeed in their careers.'
  },
  {
    icon: Award,
    title: 'Excellence in Training',
    description: 'We maintain the highest standards in training delivery and learning outcomes.'
  },
  {
    icon: Building,
    title: 'Corporate Partnerships',
    description: 'Strong relationships with 50+ hiring partners ensure direct job opportunities.'
  }
];

const team = [
  { name: 'Industry Expert Trainers', role: '10+ Years Experience', count: '15+' },
  { name: 'Career Counselors', role: 'Personalized Guidance', count: '5+' },
  { name: 'Placement Coordinators', role: 'Corporate Connections', count: '8+' },
  { name: 'Support Staff', role: '24/7 Assistance', count: '10+' },
];

const milestones = [
  { year: '2020', title: 'Founded', description: 'FinGrad was established with a vision to bridge the gap between education and employment in finance.' },
  { year: '2021', title: '100 Students Placed', description: 'Reached our first major milestone with 100 students placed in corporate finance roles.' },
  { year: '2023', title: 'Expanded Programs', description: 'Launched specialized tracks for P2P, O2C, R2R, and SAP FICO certifications.' },
  { year: '2024', title: '500+ Placements', description: 'Celebrated placing over 500 students across Big 4, SSCs, and Fortune 500 companies.' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function About() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-gradient">FinGrad</span>
            </h1>
            <p className="text-lg text-white/80">
              We're on a mission to transform freshers and graduates into job-ready finance professionals 
              through industry-aligned training and direct placement support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              {...fadeInUp}
              className="bg-navy-800 rounded-2xl p-8 text-white"
            >
              <GraduationCap className="w-12 h-12 text-gold-400 mb-6" />
              <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-white/80">
                To bridge the gap between academic education and corporate expectations by providing 
                practical, ERP-based finance training that makes freshers job-ready from day one. 
                We believe every aspiring finance professional deserves access to quality training 
                and real job opportunities.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="bg-gold-50 rounded-2xl p-8 border border-gold-200"
            >
              <Globe className="w-12 h-12 text-gold-600 mb-6" />
              <h2 className="font-display text-2xl font-bold text-navy-800 mb-4">Our Vision</h2>
              <p className="text-navy-600">
                To become India's most trusted train-to-hire platform for finance and accounting careers, 
                placing 10,000+ professionals in corporate roles by 2030. We envision a future where 
                every graduate has a clear pathway to a successful finance career.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at FinGrad.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Timeline */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small training center to India's leading train-to-hire platform.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-gold-500">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-gold-400 ring-4 ring-gold-100" />
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gold-200 my-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                    <h3 className="font-display text-xl font-semibold text-navy-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section-padding bg-navy-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Team
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A dedicated team of industry experts committed to your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="text-4xl font-bold text-gold-400 mb-2">{member.count}</div>
                <h3 className="font-display text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-white/60 text-sm">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-6">
                Why Choose FinGrad?
              </h2>
              <div className="space-y-4">
                {[
                  '95% placement rate within 90 days of completion',
                  'Direct hiring partnerships with Big 4 and Fortune 500',
                  'Hands-on training with real ERP systems',
                  'Industry-recognized certification on completion',
                  'Personalized career counseling and support',
                  'Mock interviews with industry professionals'
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 text-white"
            >
              <Briefcase className="w-12 h-12 text-gold-400 mb-6" />
              <h3 className="font-display text-2xl font-bold mb-4">
                Our Hiring Partners
              </h3>
              <p className="text-white/80 mb-6">
                We've built strong relationships with 50+ corporate partners who actively 
                hire from our training programs.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Deloitte', 'EY', 'KPMG', 'Accenture', 'Wipro', 'TCS'].map((partner) => (
                  <span key={partner} className="px-4 py-2 bg-white/10 rounded-lg text-sm">
                    {partner}
                  </span>
                ))}
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of successful graduates who launched their finance careers with FinGrad.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/programs">
                <Button variant="default" size="xl">
                  Explore Programs
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

export default About;
