
import { useState } from "react";
import { Search, Filter, MapPin, Eye, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([100000, 2000000]);
  const [showFilters, setShowFilters] = useState(false);

  const properties = [
    {
      id: 1,
      title: "Modern Downtown Condo",
      price: "$850,000",
      location: "Downtown District",
      beds: 3,
      baths: 2,
      sqft: "1,850",
      image: "/placeholder.svg",
      type: "Sale",
      featured: true,
      agent: "Sarah Johnson",
      daysOnMarket: 12
    },
    {
      id: 2,
      title: "Luxury Villa with Pool",
      price: "$2,200/month",
      location: "Riverside Heights",
      beds: 4,
      baths: 3,
      sqft: "2,400",
      image: "/placeholder.svg",
      type: "Rent",
      featured: true,
      agent: "Mike Chen",
      daysOnMarket: 5
    },
    {
      id: 3,
      title: "Cozy Family Home",
      price: "$650,000",
      location: "Suburban Valley",
      beds: 4,
      baths: 2.5,
      sqft: "2,100",
      image: "/placeholder.svg",
      type: "Sale",
      featured: false,
      agent: "Emily Rodriguez",
      daysOnMarket: 8
    },
    {
      id: 4,
      title: "Penthouse Apartment",
      price: "$1,250,000",
      location: "City Center",
      beds: 2,
      baths: 2,
      sqft: "1,600",
      image: "/placeholder.svg",
      type: "Sale",
      featured: true,
      agent: "David Kim",
      daysOnMarket: 3
    },
    {
      id: 5,
      title: "Garden Townhouse",
      price: "$1,800/month",
      location: "Green District",
      beds: 3,
      baths: 2.5,
      sqft: "1,950",
      image: "/placeholder.svg",
      type: "Rent",
      featured: false,
      agent: "Lisa Wang",
      daysOnMarket: 15
    },
    {
      id: 6,
      title: "Historic Brownstone",
      price: "$950,000",
      location: "Heritage Quarter",
      beds: 5,
      baths: 3,
      sqft: "2,800",
      image: "/placeholder.svg",
      type: "Sale",
      featured: false,
      agent: "Robert Taylor",
      daysOnMarket: 22
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Property Listings</h1>
          <p className="text-muted-foreground text-lg">
            Discover your perfect home from our extensive collection of properties
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              
              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Enter location..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Property Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Listing Type */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Listing Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="sale">For Sale</SelectItem>
                      <SelectItem value="rent">For Rent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={3000000}
                    min={50000}
                    step={50000}
                    className="w-full"
                  />
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Bedrooms</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                      <SelectItem value="5">5+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Bathrooms */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Bathrooms</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">
                  Apply Filters
                </Button>
              </div>
            </Card>
          </div>

          {/* Properties Grid */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold">{properties.length} Properties Found</h2>
                <p className="text-muted-foreground">Showing all available properties</p>
              </div>
              <Select defaultValue="newest">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="beds">Most Bedrooms</SelectItem>
                  <SelectItem value="sqft">Largest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {properties.map((property) => (
                <Card key={property.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge 
                      className="absolute top-4 left-4" 
                      variant={property.type === "Sale" ? "default" : "secondary"}
                    >
                      {property.type}
                    </Badge>
                    {property.featured && (
                      <Badge className="absolute top-4 left-20 bg-yellow-500">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute top-4 right-4 space-x-2">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="outline" className="bg-background/80">
                        {property.daysOnMarket} days on market
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </div>
                    <div className="text-2xl font-bold text-primary mb-4">
                      {property.price}
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <span>{property.beds} beds</span>
                      <span>{property.baths} baths</span>
                      <span>{property.sqft} sqft</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Agent: {property.agent}
                      </div>
                      <Button className="group">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12 space-x-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="outline">1</Button>
              <Button>2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
