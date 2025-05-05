import React from "react";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <div className="container py-32 px-4 md:px-6 mx-auto">
      <div className="flex flex-col space-y-4 text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Pricing Plans</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Choose the perfect plan for your plant identification needs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Free Plan */}
        <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold mb-2">Free</h2>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
            <p className="text-muted-foreground">
              Perfect for casual plant enthusiasts
            </p>
          </div>
          <div className="p-6 space-y-4">
            <ul className="space-y-3">
              <PricingFeature included>10 plant identifications per month</PricingFeature>
              <PricingFeature included>Basic plant information</PricingFeature>
              <PricingFeature included>Standard identification accuracy</PricingFeature>
              <PricingFeature included>Community access</PricingFeature>
              <PricingFeature>Detailed plant care guides</PricingFeature>
              <PricingFeature>Plant collection management</PricingFeature>
              <PricingFeature>Care reminders</PricingFeature>
              <PricingFeature>Advanced identification accuracy</PricingFeature>
            </ul>
          </div>
          <div className="p-6 pt-0">
            <Button asChild className="w-full" variant="outline">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
        
        {/* Premium Plan */}
        <div className="border rounded-lg overflow-hidden shadow-lg transition-all relative border-primary">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
              Most Popular
            </span>
          </div>
          <div className="p-6 border-b bg-primary/5">
            <h2 className="text-2xl font-bold mb-2">Premium</h2>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold">$9.99</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
            <p className="text-muted-foreground">
              Ideal for serious plant lovers
            </p>
          </div>
          <div className="p-6 space-y-4">
            <ul className="space-y-3">
              <PricingFeature included>Unlimited plant identifications</PricingFeature>
              <PricingFeature included>Comprehensive plant information</PricingFeature>
              <PricingFeature included>High precision identification</PricingFeature>
              <PricingFeature included>Community access</PricingFeature>
              <PricingFeature included>Detailed plant care guides</PricingFeature>
              <PricingFeature included>Plant collection management</PricingFeature>
              <PricingFeature included>Care reminders and calendar</PricingFeature>
              <PricingFeature>Botanical database access</PricingFeature>
            </ul>
          </div>
          <div className="p-6 pt-0">
            <Button asChild className="w-full">
              <Link href="/signup?plan=premium">Start 7-Day Free Trial</Link>
            </Button>
          </div>
        </div>
        
        {/* Professional Plan */}
        <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold mb-2">Professional</h2>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold">$19.99</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
            <p className="text-muted-foreground">
              For botanists and professionals
            </p>
          </div>
          <div className="p-6 space-y-4">
            <ul className="space-y-3">
              <PricingFeature included>Unlimited plant identifications</PricingFeature>
              <PricingFeature included>Comprehensive plant information</PricingFeature>
              <PricingFeature included>Highest precision identification</PricingFeature>
              <PricingFeature included>Community access</PricingFeature>
              <PricingFeature included>Detailed plant care guides</PricingFeature>
              <PricingFeature included>Plant collection management</PricingFeature>
              <PricingFeature included>Care reminders and calendar</PricingFeature>
              <PricingFeature included>Botanical database access</PricingFeature>
              <PricingFeature included>API access</PricingFeature>
              <PricingFeature included>Priority support</PricingFeature>
            </ul>
          </div>
          <div className="p-6 pt-0">
            <Button asChild className="w-full" variant="outline">
              <Link href="/signup?plan=professional">Start 7-Day Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Feature comparison */}
      <div className="mt-16 md:mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Compare Plans</h2>
        
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="text-left p-4 bg-muted/50">Features</th>
                <th className="p-4 bg-muted/50 text-center">Free</th>
                <th className="p-4 bg-primary/5 border-2 border-primary border-dashed text-center">Premium</th>
                <th className="p-4 bg-muted/50 text-center">Professional</th>
              </tr>
            </thead>
            <tbody>
              <TableRow feature="Plant identifications">
                <Cell>10 / month</Cell>
                <Cell highlighted>Unlimited</Cell>
                <Cell>Unlimited</Cell>
              </TableRow>
              <TableRow feature="Identification accuracy">
                <Cell>Standard</Cell>
                <Cell highlighted>High</Cell>
                <Cell>Highest</Cell>
              </TableRow>
              <TableRow feature="Plant information">
                <Cell>Basic</Cell>
                <Cell highlighted>Detailed</Cell>
                <Cell>Comprehensive</Cell>
              </TableRow>
              <TableRow feature="Care guides">
                <Cell><X className="h-5 w-5 text-red-500 mx-auto" /></Cell>
                <Cell highlighted><Check className="h-5 w-5 text-green-500 mx-auto" /></Cell>
                <Cell><Check className="h-5 w-5 text-green-500 mx-auto" /></Cell>
              </TableRow>
              <TableRow feature="Collection management">
                <Cell><X className="h-5 w-5 text-red-500 mx-auto" /></Cell>
                <Cell highlighted><Check className="h-5 w-5 text-green-500 mx-auto" /></Cell>
                <Cell><Check className="h-5 w-5 text-green-500 mx-auto" /></Cell>
              </TableRow>
              <TableRow feature="Care reminders">
                <Cell><X className="h-5 w-5 text-red-500 mx-auto" /></Cell>
                <Cell highlighted><Check className="h-5 w-5 text-green-500 mx-auto" /></Cell>
                <Cell><Check className="h-5 w-5 text-green-500 mx-auto" /></Cell>
              </TableRow>
              <TableRow feature="Botanical database access">
                <Cell><X className="h-5 w-5 text-red-500 mx-auto" /></Cell>
                <Cell highlighted><X className="h-5 w-5 text-red-500 mx-auto" /></Cell>
                <Cell><Check className="h-5 w-5 text-green-500 mx-auto" /></Cell>
              </TableRow>
              <TableRow feature="API access">
                <Cell><X className="h-5 w-5 text-red-500 mx-auto" /></Cell>
                <Cell highlighted><X className="h-5 w-5 text-red-500 mx-auto" /></Cell>
                <Cell><Check className="h-5 w-5 text-green-500 mx-auto" /></Cell>
              </TableRow>
              <TableRow feature="Priority support">
                <Cell><X className="h-5 w-5 text-red-500 mx-auto" /></Cell>
                <Cell highlighted><X className="h-5 w-5 text-red-500 mx-auto" /></Cell>
                <Cell><Check className="h-5 w-5 text-green-500 mx-auto" /></Cell>
              </TableRow>
              <tr>
                <td className="p-4 border-t"></td>
                <td className="p-4 border-t text-center">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/signup">Start Free</Link>
                  </Button>
                </td>
                <td className="p-4 border-t border-primary text-center">
                  <Button asChild size="sm">
                    <Link href="/signup?plan=premium">Try Premium</Link>
                  </Button>
                </td>
                <td className="p-4 border-t text-center">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/signup?plan=professional">Go Pro</Link>
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mt-16 md:mt-24 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Can I change plans later?</h3>
            <p className="text-muted-foreground">
              Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle.
            </p>
          </div>
          
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">How accurate is the plant identification?</h3>
            <p className="text-muted-foreground">
              Our AI can identify thousands of plant species with high accuracy. Premium and Professional plans offer enhanced precision for rare and uncommon plants.
            </p>
          </div>
          
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Is there a money-back guarantee?</h3>
            <p className="text-muted-foreground">
              Yes, we offer a 30-day money-back guarantee if you're not satisfied with your premium subscription.
            </p>
          </div>
          
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Do you offer discounts for annual subscriptions?</h3>
            <p className="text-muted-foreground">
              Yes, you can save 20% by choosing annual billing for any of our paid plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PricingFeatureProps {
  children: React.ReactNode;
  included?: boolean;
}

function PricingFeature({ children, included = false }: PricingFeatureProps) {
  return (
    <li className="flex items-start">
      {included ? (
        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
      ) : (
        <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
      )}
      <span className={!included ? "text-muted-foreground" : ""}>
        {children}
      </span>
    </li>
  );
}

interface TableRowProps {
  feature: string;
  children: React.ReactNode;
}

function TableRow({ feature, children }: TableRowProps) {
  return (
    <tr className="border-t">
      <td className="p-4 font-medium">{feature}</td>
      {children}
    </tr>
  );
}

interface CellProps {
  children: React.ReactNode;
  highlighted?: boolean;
}

function Cell({ children, highlighted = false }: CellProps) {
  return (
    <td className={`p-4 text-center ${highlighted ? 'bg-primary/5 border-2 border-dashed border-primary' : ''}`}>
      {children}
    </td>
  );
}