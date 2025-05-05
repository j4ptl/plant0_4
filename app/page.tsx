import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Search, 
  BookOpen, 
  Calendar, 
  Camera, 
  Database, 
  BarChart, 
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import FeatureCard from "@/components/feature-card";
import PricingCard from "@/components/pricing-card";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                <Leaf className="mr-1 h-3.5 w-3.5" />
                <span>AI Plant Identification</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
                Identify Any Plant <br className="hidden md:inline" />
                <span className="text-primary">Instantly with AI</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto md:mx-0">
                Get detailed information about any plant with our powerful AI system. 
                Simply snap a photo and learn everything about your plants in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" asChild>
                  <Link href="/identify">
                    <Camera className="mr-2 h-5 w-5" />
                    Identify Plant
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/plants">
                    <Database className="mr-2 h-5 w-5" />
                    Plant Database
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Over 500,000+ plants identified • 50,000+ active users
              </p>
            </div>
            <div className="flex-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border backdrop-blur bg-background/90">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 z-0"></div>
                <Image 
                  src="https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg" 
                  alt="Plant identification example"
                  width={600}
                  height={700}
                  className="relative z-10 rounded-xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg border shadow-lg z-20">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-green-500/20 p-2 text-green-600 dark:text-green-400">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Monstera Deliciosa</h3>
                      <p className="text-sm text-muted-foreground">Swiss Cheese Plant • Tropical</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-background rounded-xl shadow-lg p-3 border z-20">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-amber-500/20 p-2 text-amber-600 dark:text-amber-400">
                    <Sun className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Light</p>
                    <p className="text-xs text-muted-foreground">Bright indirect</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-background rounded-xl shadow-lg p-3 border z-20">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-blue-500/20 p-2 text-blue-600 dark:text-blue-400">
                    <Droplet className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Water</p>
                    <p className="text-xs text-muted-foreground">Weekly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Plant Identification Features</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Our AI-powered platform offers comprehensive plant identification and information services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard 
              icon={<Camera className="h-8 w-8" />}
              title="Instant Identification"
              description="Take a photo of any plant and get instant identification with high accuracy using our advanced AI algorithms."
            />
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8" />}
              title="Detailed Information"
              description="Access comprehensive plant details including care guides, growth patterns, and scientific classification."
            />
            <FeatureCard 
              icon={<Database className="h-8 w-8" />}
              title="Extensive Database"
              description="Explore our ever-growing database of over 10,000 plant species with detailed information and images."
            />
            <FeatureCard 
              icon={<Calendar className="h-8 w-8" />}
              title="Care Reminders"
              description="Set personalized care reminders for watering, fertilizing, and pruning your identified plants."
            />
            <FeatureCard 
              icon={<BarChart className="h-8 w-8" />}
              title="Growth Tracking"
              description="Monitor the growth and health of your plants over time with visual tracking and progress reports."
            />
            <FeatureCard 
              icon={<Search className="h-8 w-8" />}
              title="Smart Search"
              description="Find plants by name, characteristics, or growing conditions with our intelligent search system."
            />
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Plant Identification Works</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Three simple steps to identify any plant and get detailed information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <Camera className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Take a Photo</h3>
              <p className="text-muted-foreground">
                Simply take a clear photo of any plant leaf, flower, or entire plant using your device camera.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Identification</h3>
              <p className="text-muted-foreground">
                Our advanced AI analyzes the image and identifies the plant species with high accuracy.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Detailed Info</h3>
              <p className="text-muted-foreground">
                Receive comprehensive information about the plant, including care guides and growing tips.
              </p>
            </div>
          </div>
          
          <div className="mt-12 md:mt-16 text-center">
            <Button size="lg" asChild>
              <Link href="/identify">
                <Camera className="mr-2 h-5 w-5" />
                Try It Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Thousands of plant enthusiasts use our app every day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="This app is a game-changer for plant identification. I've tried many others but none compare to the accuracy and detailed information provided here."
              author="Sarah Johnson"
              role="Gardening Enthusiast"
              avatarUrl="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Testimonial
              quote="As a landscape architect, I use this app daily. The AI is incredibly accurate, and the care guides have helped me select the perfect plants for various projects."
              author="Michael Chen"
              role="Landscape Architect"
              avatarUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Testimonial
              quote="The level of detail provided for each plant is exceptional. I've learned so much about the plants in my collection and how to better care for them."
              author="Emma Rodriguez"
              role="Plant Collector"
              avatarUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Select the perfect plan for your plant identification needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Free"
              price="$0"
              description="Perfect for casual plant enthusiasts"
              features={[
                "10 plant identifications per month",
                "Basic plant information",
                "Standard identification accuracy",
                "Community access"
              ]}
              buttonText="Get Started"
              buttonHref="/signup"
              highlighted={false}
            />
            <PricingCard 
              title="Premium"
              price="$9.99"
              period="/month"
              description="Ideal for serious plant lovers"
              features={[
                "Unlimited plant identifications",
                "Detailed plant care guides",
                "High-precision identification",
                "Plant collection management",
                "Care reminders and calendar"
              ]}
              buttonText="Try Premium"
              buttonHref="/pricing/premium"
              highlighted={true}
            />
            <PricingCard 
              title="Professional"
              price="$19.99"
              period="/month"
              description="For botanists and professionals"
              features={[
                "Everything in Premium",
                "Botanical database access",
                "Scientific classification details",
                "Growth tracking analytics",
                "API access",
                "Priority support"
              ]}
              buttonText="Go Professional"
              buttonHref="/pricing/professional"
              highlighted={false}
            />
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-[600px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Identify Your Plants?</h2>
              <p className="text-xl opacity-90 mb-6">
                Join thousands of plant enthusiasts using our AI-powered plant identification system today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/identify">
                    <Camera className="mr-2 h-5 w-5" />
                    Identify Plant
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/signup">
                    <UserPlus className="mr-2 h-5 w-5" />
                    Create Account
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-[400px]">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary-foreground/10">
                <Image 
                  src="https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg" 
                  alt="Beautiful plant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background text-foreground rounded-xl shadow-lg p-4 border z-20">
                <div className="flex items-start gap-3">
                  <Leaf className="h-6 w-6 text-green-500" />
                  <div>
                    <h3 className="font-medium">Identified!</h3>
                    <p className="text-sm text-muted-foreground">Fiddle Leaf Fig</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Sun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function Droplet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  )
}

function UserPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  )
}