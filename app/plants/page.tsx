"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Search, Leaf, Flower2, Trees, Loader2, SlidersHorizontal, X, Droplet } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PlantCard from "@/components/plant-card";

// Mock plant data - would come from an API in production
const plantsData = [
  {
    id: "monstera-deliciosa",
    commonName: "Swiss Cheese Plant",
    scientificName: "Monstera Deliciosa",
    image: "https://images.pexels.com/photos/3571552/pexels-photo-3571552.jpeg",
    family: "Araceae",
    difficulty: "Easy",
    light: "Medium",
    water: "Weekly",
    tags: ["Indoor", "Tropical", "Popular"]
  },
  {
    id: "ficus-lyrata",
    commonName: "Fiddle Leaf Fig",
    scientificName: "Ficus Lyrata",
    image: "https://images.pexels.com/photos/2736497/pexels-photo-2736497.jpeg",
    family: "Moraceae",
    difficulty: "Moderate",
    light: "Bright indirect",
    water: "Weekly",
    tags: ["Indoor", "Tropical", "Popular"]
  },
  {
    id: "sansevieria-trifasciata",
    commonName: "Snake Plant",
    scientificName: "Sansevieria Trifasciata",
    image: "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg",
    family: "Asparagaceae",
    difficulty: "Easy",
    light: "Low to bright",
    water: "Every 2-3 weeks",
    tags: ["Indoor", "Succulent", "Low maintenance"]
  },
  {
    id: "epipremnum-aureum",
    commonName: "Pothos",
    scientificName: "Epipremnum Aureum",
    image: "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg",
    family: "Araceae",
    difficulty: "Easy",
    light: "Low to medium",
    water: "When top soil is dry",
    tags: ["Indoor", "Trailing", "Low maintenance"]
  },
  {
    id: "calathea-orbifolia",
    commonName: "Prayer Plant",
    scientificName: "Calathea Orbifolia",
    image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg",
    family: "Marantaceae",
    difficulty: "Moderate",
    light: "Medium indirect",
    water: "Keep moist",
    tags: ["Indoor", "Tropical", "Humidity lover"]
  },
  {
    id: "zamioculcas-zamiifolia",
    commonName: "ZZ Plant",
    scientificName: "Zamioculcas Zamiifolia",
    image: "https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg",
    family: "Araceae",
    difficulty: "Easy",
    light: "Low to bright",
    water: "Every 2-3 weeks",
    tags: ["Indoor", "Low maintenance", "Drought tolerant"]
  },
  {
    id: "pilea-peperomioides",
    commonName: "Chinese Money Plant",
    scientificName: "Pilea Peperomioides",
    image: "https://images.pexels.com/photos/6208081/pexels-photo-6208081.jpeg",
    family: "Urticaceae",
    difficulty: "Easy",
    light: "Medium indirect",
    water: "When top soil is dry",
    tags: ["Indoor", "Popular", "Compact"]
  },
  {
    id: "aloe-vera",
    commonName: "Aloe Vera",
    scientificName: "Aloe Barbadensis Miller",
    image: "https://images.pexels.com/photos/912396/pexels-photo-912396.jpeg",
    family: "Asphodelaceae",
    difficulty: "Easy",
    light: "Bright direct",
    water: "Every 3 weeks",
    tags: ["Indoor", "Succulent", "Medicinal"]
  },
];

export default function PlantsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const filteredPlants = plantsData.filter(plant => {
    const matchesSearch = 
      plant.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilters = selectedFilters.length === 0 || 
      plant.tags.some(tag => selectedFilters.includes(tag));
    
    return matchesSearch && matchesFilters;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const filterOptions = [
    "Indoor", "Outdoor", "Tropical", "Succulent", 
    "Low maintenance", "Popular", "Trailing", "Humidity lover",
    "Drought tolerant", "Compact", "Medicinal"
  ];
  
  return (
    <div className="container py-32 px-4 md:px-6 mx-auto">
      <div className="flex flex-col space-y-4 md:space-y-6 text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Plant Database</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Explore our comprehensive collection of plants with detailed information and care guides
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto w-full">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search for plants by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6 text-base w-full shadow-sm"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              {isLoading ? (
                <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
              ) : (
                <Search className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
          </form>
        </div>
      </div>
      
      {/* Categories and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList>
              <TabsTrigger value="all">All Plants</TabsTrigger>
              <TabsTrigger value="indoor">
                <Trees className="mr-2 h-4 w-4" />
                Indoor
              </TabsTrigger>
              <TabsTrigger value="outdoor">
                <Flower2 className="mr-2 h-4 w-4" />
                Outdoor
              </TabsTrigger>
              <TabsTrigger value="succulent">
                <Droplet className="mr-2 h-4 w-4" />
                Succulents
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                  {selectedFilters.length > 0 && (
                    <Badge variant="secondary" className="ml-2 bg-primary text-primary-foreground">
                      {selectedFilters.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Filter by Tags</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  {filterOptions.map((filter) => (
                    <DropdownMenuItem 
                      key={filter} 
                      onSelect={(e) => {
                        e.preventDefault();
                        toggleFilter(filter);
                      }}
                      className="flex items-center justify-between"
                    >
                      {filter}
                      {selectedFilters.includes(filter) && (
                        <span className="text-primary">✓</span>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
                {selectedFilters.length > 0 && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onSelect={(e) => {
                        e.preventDefault();
                        clearFilters();
                      }}
                      className="text-red-500 hover:text-red-600"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Clear All Filters
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Sort By
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                <DropdownMenuItem>Name (A-Z)</DropdownMenuItem>
                <DropdownMenuItem>Name (Z-A)</DropdownMenuItem>
                <DropdownMenuItem>Easiest to care for</DropdownMenuItem>
                <DropdownMenuItem>Most popular</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Active filters */}
        {selectedFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedFilters.map(filter => (
              <Badge 
                key={filter} 
                variant="secondary"
                className="flex items-center gap-1 bg-primary/10 hover:bg-primary/20 text-primary"
              >
                {filter}
                <button 
                  onClick={() => toggleFilter(filter)}
                  className="ml-1 rounded-full w-4 h-4 inline-flex items-center justify-center hover:bg-primary/20"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="h-6 text-xs"
            >
              Clear all
            </Button>
          </div>
        )}
        
        <Separator />
      </div>
      
      {/* Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
      
      {filteredPlants.length === 0 && (
        <div className="text-center py-16">
          <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <Leaf className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No plants found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filters to find what you&apos;re looking for.
          </p>
        </div>
      )}
    </div>
  );
}