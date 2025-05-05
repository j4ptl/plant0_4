import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplet, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PlantCardProps {
  plant: {
    id: string;
    commonName: string;
    scientificName: string;
    image: string;
    family: string;
    difficulty: string;
    light: string;
    water: string;
    tags: string[];
  };
}

export default function PlantCard({ plant }: PlantCardProps) {
  return (
    <Link href={`/plants/${plant.id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-md hover:border-primary/20">
        <div className="relative h-48 w-full">
          <Image 
            src={plant.image} 
            alt={plant.commonName}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{plant.commonName}</CardTitle>
          <CardDescription className="italic">{plant.scientificName}</CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-xs">
              {plant.family}
            </Badge>
            <Badge 
              variant="outline" 
              className={`text-xs ${
                plant.difficulty === "Easy" 
                  ? "border-green-500 text-green-500" 
                  : plant.difficulty === "Moderate" 
                  ? "border-yellow-500 text-yellow-500" 
                  : "border-red-500 text-red-500"
              }`}
            >
              {plant.difficulty}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Sun className="h-4 w-4" />
              <span>{plant.light}</span>
            </div>
            <div className="flex items-center gap-1">
              <Droplet className="h-4 w-4" />
              <span>{plant.water}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="flex flex-wrap gap-1">
            {plant.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {plant.tags.length > 2 && (
              <Badge variant="secondary" className="text-xs">
                +{plant.tags.length - 2}
              </Badge>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
