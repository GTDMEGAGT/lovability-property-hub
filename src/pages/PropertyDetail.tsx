
import { useState } from "react";
import { ArrowLeft, Heart, Share2, MapPin, Calendar, User, Phone, Mail, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PropertyDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const property = {
    id: 1,
    title: "Modern Downtown Condo",
    price: "$850,000",
    location: "Downtown District, New York",
    beds: 3,
    baths: 2,
    sqft: "1,850",
    type: "Sale",
    featured: true,
    description: "This stunning modern condo offers the perfect blend of luxury and convenience in the heart of downtown. Featuring floor-to-ceiling windows, high-end finishes, and breathtaking city views, this property is ideal for those seeking an urban lifestyle.",
    features: [
      "Floor-to-ceiling windows",
      "High-end stainless steel appliances",
      "Hardwood floors throughout",
      "In-unit washer/dryer",
      "Balcony with city views",
      "Building gym and rooftop deck",
      "24/7 concierge service",
      "Pet-friendly"
    ],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    agent: {
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      phone: "(555) 123-4567",
      email: "sarah@propertyhub.com",
      image: "/placeholder.svg"
    },
    yearBuilt: 2018,
    lotSize: "N/A",
    propertyTax: "$12,500/year",
    hoa: "$450/month"
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry submitted:", inquiryForm);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="bg-card border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Listings
            </Button>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4" variant={property.type === "Sale" ? "default" : "secondary"}>
                  {property.type}
                </Badge>
                {property.featured && (
                  <Badge className="absolute top-4 left-20 bg-yellow-500">
                    Featured
                  </Badge>
                )}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  <Camera className="h-4 w-4 inline mr-1" />
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              </div>
              
              {/* Image Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-video rounded overflow-hidden border-2 transition-all ${
                      currentImageIndex === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">{property.price}</div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold">{property.beds}</div>
                  <div className="text-sm text-muted-foreground">Bedrooms</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold">{property.baths}</div>
                  <div className="text-sm text-muted-foreground">Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold">{property.sqft}</div>
                  <div className="text-sm text-muted-foreground">Sq Ft</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold">{property.yearBuilt}</div>
                  <div className="text-sm text-muted-foreground">Year Built</div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="description" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>

                <TabsContent value="description">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {property.description}
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="features">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {property.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="details">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Property Details</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Property Type:</span>
                              <span>Condo</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Year Built:</span>
                              <span>{property.yearBuilt}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Lot Size:</span>
                              <span>{property.lotSize}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Financial Details</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Property Tax:</span>
                              <span>{property.propertyTax}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">HOA Fee:</span>
                              <span>{property.hoa}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3"
                  />
                  <h3 className="font-semibold text-lg">{property.agent.name}</h3>
                  <p className="text-sm text-muted-foreground">{property.agent.title}</p>
                </div>
                <div className="space-y-3">
                  <Button className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    {property.agent.phone}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Agent
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Tour
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Inquiry Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Request Information</h3>
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="I'm interested in this property. Please send me more information."
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm(prev => ({ ...prev, message: e.target.value }))}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Mortgage Calculator */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Mortgage Calculator</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Est. Monthly Payment:</span>
                    <span className="font-semibold">$4,125</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Principal & Interest:</span>
                    <span>$3,675</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Property Tax:</span>
                    <span>$450</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Get Pre-approved
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
