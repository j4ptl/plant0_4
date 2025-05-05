import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  price,
  period = "",
  description,
  features,
  buttonText,
  buttonHref,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card className={cn(
      "flex flex-col h-full transition-all",
      highlighted && "border-primary shadow-lg"
    )}>
      {highlighted && (
        <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium rounded-t-lg">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex items-baseline mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-sm text-muted-foreground ml-1">{period}</span>}
        </div>
        <CardDescription className="mt-4">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          asChild 
          className="w-full" 
          variant={highlighted ? "default" : "outline"}
        >
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}