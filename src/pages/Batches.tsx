import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Clock,
  Users,
  Award,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/layout/MainLayout';

const batches = [
  { 
    id: 1,
    name: 'Batch 15',
    track: 'P2P Track',
    subtitle: 'Accounts Payable Executive',
    date: 'February 15, 2026',
    duration: '12 Weeks',
    seats: 20,
    seatsLeft: 8,
    fee: '₹20,000',
    status: 'filling',
    color: 'blue'
  },
  { 
    id: 2,
    name: 'Batch 16',
    track: 'O2C Track',
    subtitle: 'Accounts Receivable Associate',
    date: 'March 1, 2026',
    duration: '12 Weeks',
    seats: 25,
    seatsLeft: 18,
    fee: '₹20,000',
    status: 'open',
    color: 'emerald'
  },
  { 
    id: 3,
    name: 'Batch 17',
    track: 'R2R Track',
    subtitle: 'General Ledger & Reporting',
    date: 'March 15, 2026',
    duration: '12 Weeks',
    seats: 30,
    seatsLeft: 25,
    fee: '₹20,000',
    status: 'open',
    color: 'purple'
  },
  { 
    id: 4,
    name: 'Batch 18',
    track: 'SAP FICO',
    subtitle: 'ERP Finance Configuration',
    date: 'April 1, 2026',
    duration: '12 Weeks',
    seats: 20,
    seatsLeft: 20,
    fee: '₹20,000',
    status: 'upcoming',
    color: 'orange'
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const feeBreakdown = [
  { item: 'Training Fee (12 Weeks)', amount: '₹15,000' },
  { item: 'ERP Software Access', amount: '₹3,000' },
  { item: 'Certification Fee', amount: '₹2,000' },
];

export function Batches() {
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
              Batch Dates & <span className="text-gradient">Fees</span>
            </h1>
            <p className="text-lg text-white/80">
              Choose from upcoming batches and secure your seat. Limited seats available per batch 
              to ensure personalized attention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Batch Cards */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {batches.map((batch, index) => (
              <motion.div
                key={batch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-card card-hover border border-border relative overflow-hidden"
              >
                {batch.status === 'filling' && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full animate-pulse">
                    Filling Fast
                  </span>
                )}
                {batch.status === 'upcoming' && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-navy-100 text-navy-700 text-xs font-semibold rounded-full">
                    Coming Soon
                  </span>
                )}

                <div className={`absolute bottom-0 right-0 w-40 h-40 bg-${batch.color}-500/10 rounded-full blur-3xl`} />

                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-navy-800">
                        {batch.name}
                      </h3>
                      <p className="text-gold-600 font-semibold">{batch.track}</p>
                      <p className="text-muted-foreground text-sm">{batch.subtitle}</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <p className="text-3xl font-bold text-navy-800">{batch.fee}</p>
                      <p className="text-sm text-muted-foreground">Total Fee</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
                    <div className="text-center">
                      <Calendar className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Start Date</p>
                      <p className="font-semibold text-navy-800">{batch.date}</p>
                    </div>
                    <div className="text-center">
                      <Clock className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold text-navy-800">{batch.duration}</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Seats Left</p>
                      <p className="font-semibold text-navy-800">{batch.seatsLeft} / {batch.seats}</p>
                    </div>
                  </div>

                  {/* Progress bar for seats */}
                  <div className="mt-4 mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Seats filled</span>
                      <span className="font-medium text-navy-800">
                        {batch.seats - batch.seatsLeft} / {batch.seats}
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-bar-fill"
                        style={{ width: `${((batch.seats - batch.seatsLeft) / batch.seats) * 100}%` }}
                      />
                    </div>
                  </div>

                  <Link to="/enroll">
                    <Button 
                      variant="gold" 
                      className="w-full"
                      disabled={batch.status === 'upcoming'}
                    >
                      {batch.status === 'upcoming' ? 'Coming Soon' : 'Enroll Now'}
                      {batch.status !== 'upcoming' && <ArrowRight className="w-4 h-4" />}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Breakdown */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                Fee Breakdown
              </h2>
              <p className="text-muted-foreground">
                Transparent pricing with no hidden charges.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border"
            >
              <div className="space-y-4">
                {feeBreakdown.map((item) => (
                  <div key={item.item} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                    <span className="text-navy-700">{item.item}</span>
                    <span className="font-semibold text-navy-800">{item.amount}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t-2 border-gold-400">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg text-navy-800">Total Fee</span>
                  <span className="text-2xl font-bold text-gold-600">₹20,000</span>
                </div>
              </div>
            </motion.div>

            {/* What's Included */}
            <motion.div
              {...fadeInUp}
              className="mt-8 bg-navy-800 rounded-2xl p-6 md:p-8 text-white"
            >
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-gold-400" />
                What's Included
              </h3>
              <ul className="space-y-3">
                {[
                  '12 weeks of intensive training',
                  'Live ERP system access (SAP, Oracle)',
                  'Industry-recognized certification',
                  'Mock interviews & resume review',
                  'Placement support & job referrals',
                  'Lifetime alumni network access'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Flexible Payment Options
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Pay in full or in installments. We accept UPI, cards, net banking, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/enroll">
                <Button variant="gold" size="xl">
                  Enroll Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl">
                  Talk to Advisor
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Batches;
