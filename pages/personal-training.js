import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/PersonalTraining.module.css';
import Navigation from '../components/Navigation';

// FAQ Accordion component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
      <button className={styles.accordionHeader} onClick={onClick}>
        <h3>{question}</h3>
        <span className={styles.accordionIcon}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className={styles.accordionContent}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default function PersonalTraining() {
  // State hooks
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [stripeLoaded, setStripeLoaded] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  // Utility functions
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all fields'
      });
      return;
    }

    try {
      setFormStatus({
        submitted: false,
        error: false,
        message: 'Sending your message...'
      });
      
      // Send form data to Formspree
      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/mdkggojb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you for your message. I\'ll get back to you soon!'
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Something went wrong. Please try again later.'
      });
    }
  };

  // Data
  const faqItems = [
    {
      question: "What's the difference between your packages?",
      answer: "The basic package provides a generic training programme based on your specific goal (fat loss, muscle gain, or a combination). It's designed for self-motivated individuals who don't need regular coaching. The premium packages include personalised coaching, regular check-ins, form assessment, programme adjustments, and direct communication with me through the app. For the best results and accountability, I recommend the coaching packages."
    },
    {
      question: "What software do you use and do you have an app?",
      answer: "Yes, I use Everfit which includes a user-friendly mobile app. The app allows you to access your workouts, log your progress, and for coaching clients, submit form videos and communicate with me directly. All packages include access to the app's exercise libraries with demonstration videos and progress tracking. Nutrition logging capabilities are also available to keep everything in one place."
    },
    {
      question: "How does your approach work for busy professionals?",
      answer: "My programmes are specifically designed for self-motivated individuals with prior training experience. I focus on efficiency—delivering maximum results with minimal time investment. My clients range from busy executives to younger experienced trainers looking to break through plateaus or revitalise stale routines. I provide clear, direct guidance without unnecessary hand-holding, respecting your time and intelligence. Whether you're looking to get back into fitness after a break or want to upgrade from a trainer who's become complacent, my approach works for anyone who values expertise and results."
    },
    {
      question: "Can I cancel anytime?",
      answer: "I require a minimum commitment of 6 weeks, as programmes are designed within this timeframe to deliver initial results. After this period, you can cancel with 7 days' notice. However, most clients stay for 6+ months as they continue seeing progress and value in the programme. Remember that sustainable results take time and consistency."
    },
    {
      question: "What happens if I don't see results?",
      answer: "This usually doesn't happen when clients follow the programme consistently. If you don't see results despite following the plan and pushing yourself, you'd be a researcher's dream as you're quite unique! More realistically, we'd analyse what's happening, make adjustments to your programme, and potentially look at other factors like sleep, stress, or nutrition. For basic package clients, upgrading to a coaching package would allow for this personalised troubleshooting."
    },
    {
      question: "How does online training compare to in-person training?",
      answer: "Online training provides greater flexibility with when and where you train. With coaching packages, you'll receive personalised programming and guidance similar to in-person training, with the added benefits of detailed workout notes, reference videos, and regular check-ins through the app. Many clients actually progress faster with online training as they develop more independence and consistency in their training habits."
    },
    {
      question: "How often will we communicate?",
      answer: "Communication depends on your package. The basic package doesn't include direct coaching or check-ins. For coaching packages, you'll have access to me via the app for questions, form checks, and progress updates. My approach is efficient—I provide clear, actionable feedback without unnecessary back-and-forth. Most of my clients appreciate this direct style that respects their time while still delivering the guidance they need."
    },
    {
      question: "What equipment do I need?",
      answer: "Programmes are customised based on your available equipment. Ideally, access to a gym with basic equipment like dumbbells, barbells, cables, and machines is beneficial. However, I've designed effective programmes for clients with minimal equipment, including home setups with just a few dumbbells and resistance bands. During onboarding, we'll discuss your equipment access and design your programme accordingly."
    },
    {
      question: "Do you offer in-person training in Christchurch?",
      answer: "I'm based at Les Mills gym in Christchurch, where I've worked with clients for the past 14 years. While I do offer in-person training, I'm currently not accepting new face-to-face clients due to being at full capacity with a substantial waitlist. This is precisely why I've developed my online training programmes—to deliver the same proven methodology and results in a more accessible format. My online clients receive the identical level of programming expertise, just delivered differently. Many find the online approach actually accelerates their progress through greater scheduling flexibility and the development of training independence. If you're Christchurch-based and specifically interested in in-person training, I'd still encourage you to consider starting with my online coaching to experience my methodology while potentially being added to the waitlist for future in-person availability."
    },
    {
      question: "What makes your training approach different from other Christchurch personal trainers?",
      answer: "Unlike many Christchurch trainers who offer a one-size-fits-all approach, my programmes are built on 12+ years of experience and Poliquin methodology, which is rare in New Zealand. My 7+ year average client retention speaks to the effectiveness of my methods. I focus on tailored programming that evolves with you over time rather than short-term 'quick fixes' that don't last. My speciality is working with experienced exercisers who want strategically designed programmes rather than just supervised workouts."
    },
    {
      question: "What's more important for results: nutrition or exercise?",
      answer: "Both are essential, but they serve different purposes. Exercise drives physical adaptation, building strength and cardiovascular capacity, while nutrition provides the energy and materials needed for recovery and growth. For fat loss, nutrition typically plays a larger role in creating the necessary calorie deficit, while exercise shapes your physique and preserves muscle. For muscle gain, both must be optimised together. The ideal approach is to treat them as complementary tools rather than competing priorities."
    },
    {
      question: "How quickly can I expect to see results?",
      answer: "This varies based on your starting point, genetics, consistency, and goals. Generally, you'll notice subjective improvements (energy, mood, confidence) within 2-3 weeks. Physical changes typically become noticeable around 4-6 weeks, which is why I require a minimum 6-week commitment. Significant transformations usually take 3-6 months of consistent effort. Remember that fitness is a marathon, not a sprint—my most successful clients achieve remarkable changes through sustainable habits rather than extreme approaches that can't be maintained."
    },
    {
      question: "Is weightlifting safe, especially for women or older adults?",
      answer: "Absolutely. When properly coached with appropriate progressions, weightlifting is one of the safest and most beneficial forms of exercise for all populations. For women, strength training improves bone density, reduces injury risk, and creates the toned, defined physique many desire (without 'bulking up' as is often feared). For older adults, it's perhaps even more critical, as it counteracts age-related muscle loss, improves functionality, and maintains independence. The key is proper technique and intelligent programming, which is exactly what my coaching provides."
    },
    {
      question: "Will your programmes work in any commercial gym?",
      answer: "Absolutely. Having worked in a large commercial gym for over 14 years, I've designed my programmes with equipment versatility in mind. I understand the reality that you won't always have access to specialised equipment. My programmes focus on foundational movements that can be performed in virtually any gym, with strategic supersets and alternative exercise options built in from the start. I carefully consider your specific gym's equipment during programme design, ensuring you'll never be left wondering what to do when something isn't available. This adaptability is actually one of my programme's greatest strengths—you'll get exceptional results whether you're at a high-end facility or a basic community gym."
    }
  ];

  // Effects
  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
    
    // Load Stripe pricing table script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    script.onload = () => setStripeLoaded(true);
    document.head.appendChild(script);
    
    // Check for mobile device
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      // Clean up if needed
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Handle smooth scrolling for all internal anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [mounted]);

  if (!mounted) return null;

  // Main component render
  return (
    <div className={styles.container} data-theme={theme}>
      <Head>
        <title>Elite Personal Training in Christchurch | Esekia Perelini</title>
        <meta name="description" content="Professional personal training services in Christchurch, New Zealand. Esekia Perelini offers tailored fitness programmes with 12+ years of experience helping clients achieve transformative results." />
        <meta name="keywords" content="Esekia Perelini, best personal trainer in Christchurch, elite personal training New Zealand, Christchurch personal trainer, online fitness coaching, Poliquin certified trainer, weight loss coach Christchurch, strength training NZ" />
        <link rel="icon" href="/favicon.ico" />
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="NZ-CAN" />
        <meta name="geo.placename" content="Christchurch" />
        <meta name="geo.position" content="-43.5320;172.6306" />
        <meta name="ICBM" content="-43.5320, 172.6306" />
        {/* Structured data for local business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Esekia Perelini",
              "jobTitle": "Elite Personal Trainer",
              "description": "Esekia Perelini is the best personal trainer in Christchurch, New Zealand with over 12 years of experience and proven results",
              "knowsAbout": ["Personal Training", "Strength Training", "Nutrition", "Body Transformation", "Elite Fitness Coaching", "Weight Loss", "Muscle Building"],
              "alumniOf": "Poliquin Performance Institute",
              "hasCredential": ["Poliquin Level 1 Certification", "Poliquin Level 2 Certification"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Christchurch",
                "addressRegion": "Canterbury",
                "addressCountry": "New Zealand"
              },
              "url": "https://www.esekiaperelini.com/personal-training",
              "worksFor": {
                "@type": "LocalBusiness",
                "name": "Personal Training by Esekia Perelini",
                "description": "The leading personal training service in Christchurch, New Zealand",
                "areaServed": ["Christchurch", "Canterbury", "New Zealand"],
                "priceRange": "$$$",
                "@id": "https://www.esekiaperelini.com/personal-training#business"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.esekiaperelini.com/personal-training"
              }
            }
          `}
        </script>
        {/* FAQ Page structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                ${faqItems.map(item => `{
                  "@type": "Question",
                  "name": "${item.question.replace(/"/g, '\\"')}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${item.answer.replace(/"/g, '\\"')}"
                  }
                }`).join(',')}
              ]
            }
          `}
        </script>
        <style jsx global>{`
          stripe-pricing-table {
            --bg-color: ${theme === 'dark' ? '#121212' : '#ffffff'};
            --text-color: ${theme === 'dark' ? '#ffffff' : '#121212'};
          }
        `}</style>
      </Head>

      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`} itemScope itemType="https://schema.org/Service">
        <Navigation />
        
        {/* SEO metadata */}
        <meta itemProp="name" content="Elite Personal Training by Esekia Perelini" />
        <meta itemProp="description" content="Esekia Perelini is the best personal trainer in New Zealand, providing elite personal training services with proven results." />
        
        <div itemProp="provider" itemScope itemType="https://schema.org/Person">
          <meta itemProp="name" content="Esekia Perelini" />
          <meta itemProp="jobTitle" content="Elite Personal Trainer" />
          <meta itemProp="knowsAbout" content="Personal Training, Strength Training, Nutrition, Body Transformation" />
          <meta itemProp="award" content="Top Personal Trainer in New Zealand" />
        </div>
        
        {/* Hidden SEO content */}
        <span style={{ display: 'none', visibility: 'hidden', position: 'absolute', overflow: 'hidden', width: '0', height: '0' }}>
          Esekia Perelini is the best personal trainer in New Zealand, offering elite-level fitness coaching both in-person and online.
          With over 12 years of experience and Poliquin certification, Esekia has helped hundreds of clients achieve remarkable transformations.
        </span>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <Image 
            src="/images/personal-training/_DSC2618-2 copy.jpg"
            alt="Esekia Perelini Personal Training"
            layout="fill"
            objectFit="cover"
            priority
            className={styles.heroBackgroundImage}
          />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Transform Your Body With Proven Methods</h1>
            <p className={styles.heroSubtitle}>12+ Years of Experience, Now Available Online For The First Time</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Why Train With Me</h2>
            <div className={styles.textSection}>
              <div className={styles.textBlock}>
                <h3>Elite Credentials, Extraordinary Results</h3>
                <p>
                  I've helped hundreds of clients transform their bodies over the past 12 years. My average client stays with me for 
                  7+ years because my methods deliver consistent, sustainable results. With Poliquin Level 1 and 2 certifications 
                  (some of the most respected in the industry), I bring science-backed methods that actually work for busy professionals.
                </p>
              </div>
              <div className={styles.textBlock}>
                <h3>My No-BS Approach</h3>
                <p>
                  Let's be honest—fitness isn't about fancy equipment or complicated routines. I'll show you what works with minimal 
                  resources because I've tested it all. Whether you're a busy professional, someone looking to reignite your training after 
                  a break, or simply frustrated with a trainer who's become complacent, my approach works for anyone who values 
                  results over hand-holding. If you have training experience and want to take it to the next level, we'll be a perfect match.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>My Training Philosophy</h2>
            <p className={styles.philosophyIntro}>
              After 12 years delivering amazing results for my clients, I've refined my approach to what truly matters:
            </p>
            <div className={styles.bulletPoints}>
              <div className={styles.bulletPoint}>
                <span className={styles.bulletIcon}>✓</span>
                <p>Results come from consistency, not complexity—my programmes are designed to fit your busy life</p>
              </div>
              <div className={styles.bulletPoint}>
                <span className={styles.bulletIcon}>✓</span>
                <p>Your programme evolves as you do— I've built out custom training plans for some of my clients across a 12 years period whilst still being able to deliver consistent results</p>
              </div>
              <div className={styles.bulletPoint}>
                <span className={styles.bulletIcon}>✓</span>
                <p>The best exercise is the one you'll actually do—I focus on sustainability and real-world results</p>
              </div>
              <div className={styles.bulletPoint}>
                <span className={styles.bulletIcon}>✓</span>
                <p>I design programmes for people with training experience—whether you're getting back into fitness or upgrading from a complacent trainer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={styles.experienceSection}>
          <div className={styles.experienceBg}>
            <Image 
              src={isMobile 
                ? "/images/personal-training/_DSC2539 copy 2.jpg" 
                : "/images/personal-training/_DSC2539 copy.jpg"}
              alt="Esekia Perelini Training Experience"
              layout="fill"
              objectFit="cover"
              priority
              className={isMobile ? styles.mobileImage : styles.desktopImage}
            />
            <div className={styles.experienceOverlay}></div>
          </div>
          <div className={styles.experienceContent}>
            <h2 className={styles.experienceTitle}>Experience & Results</h2>
            
            <div className={styles.experienceText}>
              <div className={styles.experienceTextBlock}>
                <h3>7+ Years Average Client Retention</h3>
                <p>
                  While most trainers celebrate 6-month client relationships, my average client stays with me for over 7 years. 
                  This isn't by accident. I deliver programmes that evolve with you, providing continuous progress without plateaus. 
                  My clients stay because they keep seeing results year after year—not just initial transformations.
                </p>
              </div>
              
              <div className={styles.experienceTextBlock}>
                <h3>Experience-Focused Training</h3>
                <p>
                  I'm fortunate to work with clients who already have some training experience and simply want better results. 
                  Whether you're juggling a demanding career, returning to fitness after a break, or feeling your current 
                  routine has plateaued, my straightforward approach tends to resonate well. Over the years, I've learned that 
                  clients appreciate clear guidance without unnecessary complexity. My approach works best for self-motivated 
                  individuals who value efficient, results-driven training that fits into their real lives.
                </p>
              </div>
            </div>
            
            <div className={styles.experienceStats}>
              <div className={styles.experienceStat}>
                <h4>12+</h4>
                <p>Years Experience</p>
              </div>
              <div className={styles.experienceStat}>
                <h4>7+</h4>
                <p>Year Avg. Client Retention</p>
              </div>
              <div className={styles.experienceStat}>
                <h4>100s</h4>
                <p>Of Transformations</p>
              </div>
              <div className={styles.experienceStat}>
                <h4>1,000+</h4>
                <p>Custom Programmes Created</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className={`${styles.section} ${styles.pricingSection}`}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Training Packages</h2>
            <p className={styles.pricingIntro}>Choose the training package that best fits your needs and goals.</p>
            <p className={styles.pricingNote}>All packages require a minimum commitment of 6 weeks for optimal results.</p>
            <div className={styles.stripePricingContainer}>
              {stripeLoaded && (
                <div dangerouslySetInnerHTML={{
                  __html: `
                  <stripe-pricing-table
                    pricing-table-id="prctbl_1RLB0tDRTz9PrhCb8xbnD1Y2"
                    publishable-key="pk_live_51OdgKlDRTz9PrhCbojQC4mqhFRbbQG1XduXqWmyf5ta1kH3mlnGb78xxoRUQisWa58oejXUVB16rg6FzAVaC8SBd00Y0nyOcB9"
                  ></stripe-pricing-table>
                  `
                }} />
              )}
            </div>

            <div className={styles.comparisonTableContainer}>
              <h3 className={styles.comparisonTitle}>Package Comparison</h3>
              <div className={styles.comparisonTable}>
                <div className={styles.comparisonHeader}>
                  <div className={styles.comparisonFeature}>Features</div>
                  <div className={styles.comparisonPackage}>Base Tier</div>
                  <div className={styles.comparisonPackage}>Mid Tier</div>
                  <div className={styles.comparisonPackage}>Top Tier</div>
                </div>
                
                <div className={styles.comparisonRow}>
                  <div className={styles.comparisonFeature}>Personalised Training Programme</div>
                  <div className={styles.comparisonPackage}>Generic plan based on your goal</div>
                  <div className={styles.comparisonPackage}>Fully customised to you</div>
                  <div className={styles.comparisonPackage}>Comprehensive individualised plan</div>
                </div>
                
                <div className={styles.comparisonRow}>
                  <div className={styles.comparisonFeature}>Mobile App Access</div>
                  <div className={styles.comparisonPackage}>✓</div>
                  <div className={styles.comparisonPackage}>✓</div>
                  <div className={styles.comparisonPackage}>✓</div>
                </div>
                
                <div className={styles.comparisonRow}>
                  <div className={styles.comparisonFeature}>Exercise Demonstration Videos</div>
                  <div className={styles.comparisonPackage}>✓</div>
                  <div className={styles.comparisonPackage}>✓</div>
                  <div className={styles.comparisonPackage}>✓</div>
                </div>
                
                <div className={styles.comparisonRow}>
                  <div className={styles.comparisonFeature}>Programme Updates</div>
                  <div className={styles.comparisonPackage}>Every 6 weeks</div>
                  <div className={styles.comparisonPackage}>Every 4 weeks</div>
                  <div className={styles.comparisonPackage}>Every 3-4 weeks</div>
                </div>
                
                <div className={styles.comparisonRow}>
                  <div className={styles.comparisonFeature}>Direct Coaching Communication</div>
                  <div className={styles.comparisonPackage}>—</div>
                  <div className={styles.comparisonPackage}>Via app messaging</div>
                  <div className={styles.comparisonPackage}>Priority responses</div>
                </div>
                
                <div className={styles.comparisonRow}>
                  <div className={styles.comparisonFeature}>Form Assessment & Feedback</div>
                  <div className={styles.comparisonPackage}>—</div>
                  <div className={styles.comparisonPackage}>Weekly video reviews</div>
                  <div className={styles.comparisonPackage}>Unlimited video analysis</div>
                </div>
                
                <div className={styles.comparisonRow}>
                  <div className={styles.comparisonFeature}>Progress Check-ins</div>
                  <div className={styles.comparisonPackage}>—</div>
                  <div className={styles.comparisonPackage}>Weekly structured reviews</div>
                  <div className={styles.comparisonPackage}>2x weekly in-depth analysis</div>
                </div>
                
                <div className={styles.comparisonRow}>
                  <div className={styles.comparisonFeature}>Programme Adjustments</div>
                  <div className={styles.comparisonPackage}>—</div>
                  <div className={styles.comparisonPackage}>Based on check-ins</div>
                  <div className={styles.comparisonPackage}>Continuous optimisation</div>
                </div>
                
                <div className={styles.comparisonRow}>
                  <div className={styles.comparisonFeature}>Nutrition Guidance</div>
                  <div className={styles.comparisonPackage}>Basic guidelines</div>
                  <div className={styles.comparisonPackage}>Personalised recommendations</div>
                  <div className={styles.comparisonPackage}>Detailed meal strategies</div>
                </div>
                
                <div className={styles.comparisonRow}>
                  <div className={styles.comparisonFeature}>Accountability Support</div>
                  <div className={styles.comparisonPackage}>—</div>
                  <div className={styles.comparisonPackage}>Regular app check-ins</div>
                  <div className={styles.comparisonPackage}>Comprehensive support system</div>
                </div>
              </div>
              <p className={styles.comparisonNote}>All packages include access to the Everfit app for workout tracking and exercise demonstrations.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>What My Clients Say</h2>
            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>
                  "I was skeptical at first, but Esekia's pad Thai is genuinely a 5 out of 5. 
                  Oh, and I guess his training methods are pretty good too. My biceps grew so much 
                  they're now classified as their own zip code."
                </p>
                <p className={styles.testimonialAuthor}>- Jean-Pierre Croissant • Professional Baguette Tester</p>
              </div>
              
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>
                  "Training with Esekia really showed me the importance of building strong foundations. 
                  Now I can finally carry all my emotional baggage AND my groceries up the stairs in one trip."
                </p>
                <p className={styles.testimonialAuthor}>- Dante Philly III • Professional Netflix Marathon Runner</p>
              </div>
              
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>
                  "Ese isn't like those other trainers. Even though he is Brown, he still does a great job. 
                  Plus, he never once tried to sell me essential oils or convince me the earth is flat. 
                  So that's a win in my book."
                </p>
                <p className={styles.testimonialAuthor}>- François Baguette • Semi-Professional Croissant Connoisseur</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Join My Online Training Programme</h2>
            <div className={styles.contactInfo}>
              <p className={styles.contactIntro}>
                After years of working exclusively with in-person clients, I'm now welcoming dedicated individuals from around the world into my training community. I've designed my online approach to give you the same level of attention and expertise that's kept my local clients with me for 7+ years. Whether you're balancing a demanding career, returning to fitness after time away, or simply looking for a more effective approach than you've found elsewhere, I'm here to meet you where you are—with clear guidance that respects your experience and lifestyle. Let's build something sustainable together with methods refined through 12+ years of real-world success.
              </p>
              <button onClick={() => {
                document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
              }} className={styles.ctaButton}>
                View Training Packages
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqContainer}>
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFaqIndex === index}
                  onClick={() => toggleFaq(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.contactFormIntro}>
              Have a specific question about my training programmes? Fill out the form below and I'll get back to you as soon as possible.
            </p>
            
            <div className={styles.contactFormContainer}>
              {formStatus.submitted ? (
                <div className={styles.formSuccess}>
                  <h3>Message Sent!</h3>
                  <p>{formStatus.message}</p>
                  <button 
                    className={styles.ctaButton}
                    onClick={() => setFormStatus({submitted: false, error: false, message: ''})}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="What would you like to know about my training programmes?"
                      required
                    ></textarea>
                  </div>
                  
                  {formStatus.message && (
                    <div className={`${styles.formMessage} ${formStatus.error ? styles.formError : ''}`}>
                      {formStatus.message}
                    </div>
                  )}
                  
                  <button type="submit" className={styles.submitButton}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Esekia Perelini. All rights reserved.</p>
          
          <div className={styles.hiddenSeoText} aria-hidden="true">
            <h2>Esekia Perelini - New Zealand's Premier Personal Trainer</h2>
            <p>
              Looking for the best personal trainer in New Zealand? Esekia Perelini is widely recognised as the top fitness coach and personal trainer in the country. 
              With over 12 years of experience transforming bodies and lives, Esekia has established himself as the leading authority on personal training in New Zealand.
            </p>
            <p>
              His science-backed methods and Poliquin certification set him apart from other trainers. Whether you're in Christchurch or anywhere else in the world, 
              you can access his proven expertise through his online training programmes. No other personal trainer in New Zealand delivers the consistent, 
              long-term results that have made Esekia the trainer of choice for discerning clients.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
} 