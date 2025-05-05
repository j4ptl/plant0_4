"use client";

import React, { useState } from "react";
import { Camera, Upload, Trash2, Leaf, Loader2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import ImageUploader from "@/components/image-uploader";
import { identifyPlant } from "@/lib/plant-api";
import PlantInfo from "@/components/plant-info";

export default function IdentifyPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [identifiedPlant, setIdentifiedPlant] = useState<any>(null);
  const { toast } = useToast();

  const handleImageUpload = (imageDataUrl: string) => {
    setSelectedImage(imageDataUrl);
    setIdentifiedPlant(null);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setIdentifiedPlant(null);
  };

  const handleIdentify = async () => {
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please upload or take a photo of a plant to identify it.",
        variant: "destructive",
      });
      return;
    }

    setProcessing(true);
    try {
      const result = await identifyPlant(selectedImage);
      setIdentifiedPlant(result);
      toast({
        title: "Plant Identified!",
        description: `This appears to be a ${result.scientificName}.`,
      });
    } catch (error) {
      toast({
        title: "Identification failed",
        description: "We couldn't identify the plant. Please try with a clearer image.",
        variant: "destructive",
      });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="container py-32 px-4 md:px-6 mx-auto">
      <div className="flex flex-col space-y-6 text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Identify Your Plant</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Upload or take a photo of a plant to get detailed information about it.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Plant Image</CardTitle>
              <CardDescription>
                Upload a clear image of the plant you want to identify
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="upload">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="upload">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </TabsTrigger>
                  <TabsTrigger value="camera">
                    <Camera className="mr-2 h-4 w-4" />
                    Take Photo
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="upload">
                  <ImageUploader onImageSelected={handleImageUpload} />
                </TabsContent>
                <TabsContent value="camera">
                  <ImageUploader useCamera onImageSelected={handleImageUpload} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {selectedImage && (
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-square overflow-hidden rounded-lg border">
                  <Image
                    src={selectedImage}
                    alt="Plant preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={clearImage}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear
                </Button>
                <Button onClick={handleIdentify} disabled={processing}>
                  {processing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Leaf className="mr-2 h-4 w-4" />
                      Identify Plant
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>

        <div>
          {!identifiedPlant && !processing && (
            <div className="h-full flex items-center justify-center">
              <div className="text-center p-8">
                <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Leaf className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Identify Any Plant</h3>
                <p className="text-muted-foreground max-w-[400px]">
                  Upload a photo or take a picture of any plant to identify it and get detailed information.
                </p>
              </div>
            </div>
          )}

          {processing && (
            <Card className="h-full flex flex-col items-center justify-center">
              <CardContent className="pt-6 text-center">
                <div className="animate-pulse mb-6">
                  <Loader2 className="h-12 w-12 text-primary mx-auto animate-spin" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Analyzing Your Plant</h3>
                <p className="text-muted-foreground">
                  Our AI is working to identify your plant and gather detailed information...
                </p>
              </CardContent>
            </Card>
          )}

          {identifiedPlant && !processing && (
            <PlantInfo plant={identifiedPlant} />
          )}
        </div>
      </div>
    </div>
  );
}