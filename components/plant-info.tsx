import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertCircle, Droplet, Sun, Thermometer, Flower, Wind, Bug, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlantInfoProps {
  plant: any;
}

export default function PlantInfo({ plant }: PlantInfoProps) {
  if (!plant) return null;

  return (
    <Card className="h-full overflow-hidden">
      <CardHeader className="bg-primary/5 border-b">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-primary bg-primary/10 hover:bg-primary/20">
            {plant.family}
          </Badge>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500 transition-colors" />
            <span className="sr-only">Add to favorites</span>
          </Button>
        </div>
        <CardTitle className="text-2xl">{plant.commonName}</CardTitle>
        <CardDescription className="italic">{plant.scientificName}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="overview">
          <TabsList className="grid grid-cols-3 w-full rounded-none border-b">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="care">Care Guide</TabsTrigger>
            <TabsTrigger value="issues">Common Issues</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">About this Plant</h3>
              <p className="text-muted-foreground">{plant.description}</p>
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Scientific Name</p>
                <p className="font-medium italic">{plant.scientificName}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Family</p>
                <p className="font-medium">{plant.family}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Origin</p>
                <p className="font-medium">{plant.origin}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Care Level</p>
                <p className="font-medium">{plant.careLevel}</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Fun Facts</h3>
              <ul className="space-y-2">
                {plant.funFacts.map((fact: string, index: number) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="care" className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Sun className="h-5 w-5 text-amber-500" />
                  <h3 className="font-medium">Light</h3>
                </div>
                <p className="text-sm">{plant.careGuide.light.level}</p>
                <p className="text-xs text-muted-foreground mt-1">{plant.careGuide.light.description}</p>
              </div>
              
              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Droplet className="h-5 w-5 text-blue-500" />
                  <h3 className="font-medium">Water</h3>
                </div>
                <p className="text-sm">{plant.careGuide.water.frequency}</p>
                <p className="text-xs text-muted-foreground mt-1">{plant.careGuide.water.description}</p>
              </div>
              
              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Thermometer className="h-5 w-5 text-red-500" />
                  <h3 className="font-medium">Temperature</h3>
                </div>
                <p className="text-sm">{plant.careGuide.temperature.ideal}</p>
                <p className="text-xs text-muted-foreground mt-1">{plant.careGuide.temperature.description}</p>
              </div>
              
              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Wind className="h-5 w-5 text-sky-500" />
                  <h3 className="font-medium">Humidity</h3>
                </div>
                <p className="text-sm">{plant.careGuide.humidity.level}</p>
                <p className="text-xs text-muted-foreground mt-1">{plant.careGuide.humidity.description}</p>
              </div>
            </div>
            
            <Separator />
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="soil">
                <AccordionTrigger>Soil</AccordionTrigger>
                <AccordionContent>
                  <p className="font-medium mb-1">{plant.careGuide.soil.type}</p>
                  <p className="text-sm text-muted-foreground">{plant.careGuide.soil.description}</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="fertilizer">
                <AccordionTrigger>Fertilizer</AccordionTrigger>
                <AccordionContent>
                  <p className="font-medium mb-1">{plant.careGuide.fertilizer.frequency}</p>
                  <p className="text-sm text-muted-foreground">{plant.careGuide.fertilizer.description}</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="pruning">
                <AccordionTrigger>Pruning</AccordionTrigger>
                <AccordionContent>
                  <p className="font-medium mb-1">{plant.careGuide.pruning.frequency}</p>
                  <p className="text-sm text-muted-foreground">{plant.careGuide.pruning.description}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          
          <TabsContent value="issues" className="p-6 space-y-6">
            <div className="space-y-4">
              {plant.commonIssues.map((issue: any, index: number) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <div className="bg-amber-500/10 border-b p-4">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      <h3 className="font-medium">{issue.name}</h3>
                    </div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Possible Causes:</p>
                      <p className="text-sm text-muted-foreground">{issue.causes}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Solution:</p>
                      <p className="text-sm text-muted-foreground">{issue.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}