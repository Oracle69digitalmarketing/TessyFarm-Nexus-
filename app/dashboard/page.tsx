import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Fish,
  TrendingUp,
  ShoppingCart,
  User,
  Bell,
  Settings,
  Home,
  BarChart3,
  CreditCard,
  Brain,
  Package,
  Wallet,
  QrCode,
  Mic,
  AlertTriangle,
  Calendar,
  MapPin,
  Droplets,
  Wind,
  Sun,
  CloudRain,
  Activity,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle,
  Zap,
  Leaf,
  Star,
  Wheat,
  Beef,
  Egg,
  Tractor,
  Sprout,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Tractor className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-green-800">TessyFarm Nexus</span>
                <div className="text-xs text-gray-500">Unified AI Platform</div>
              </div>
            </Link>
            <Badge variant="secondary">Multi-Farm Dashboard</Badge>
            <Badge className="bg-green-100 text-green-800">All Systems Active</Badge>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
            <Button variant="ghost" size="icon" title="Voice Assistant (Yoruba/English/Hausa/Igbo)">
              <Mic className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-sm">
                <div className="font-medium">Adebayo Ogundimu</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Akure, Ondo State
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Enhanced Sidebar for All Farm Types */}
        <aside className="w-64 bg-white border-r min-h-screen">
          <nav className="p-4 space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center space-x-3 px-3 py-2 bg-green-50 text-green-700 rounded-lg"
            >
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>

            {/* SmartLoop Agrofinance */}
            <div className="pt-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center">
                <CreditCard className="w-3 h-3 mr-1" />
                SmartLoop Finance
              </div>
              <Link
                href="/dashboard/credit"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <CreditCard className="w-5 h-5" />
                <span>My Credit</span>
                <Badge className="ml-auto bg-blue-100 text-blue-800 text-xs">785</Badge>
              </Link>
              <Link
                href="/dashboard/wallet"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <Wallet className="w-5 h-5" />
                <span>Digital Wallet</span>
                <Badge className="ml-auto bg-green-100 text-green-800 text-xs">₦450K</Badge>
              </Link>
            </div>

            {/* Agrobrand */}
            <div className="pt-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center">
                <Package className="w-3 h-3 mr-1" />
                My Products
              </div>
              <Link
                href="/dashboard/products"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <Package className="w-5 h-5" />
                <span>Branded Products</span>
                <Badge className="ml-auto bg-green-100 text-green-800 text-xs">18</Badge>
              </Link>
              <Link
                href="/dashboard/traceability"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <QrCode className="w-5 h-5" />
                <span>Product Tracking</span>
              </Link>
              <Link
                href="/dashboard/marketplace"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Marketplace</span>
                <Badge className="ml-auto bg-purple-100 text-purple-800 text-xs">7 Orders</Badge>
              </Link>
            </div>

            {/* Multi-Farm Management */}
            <div className="pt-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center">
                <Tractor className="w-3 h-3 mr-1" />
                Farm Management
              </div>
              <Link
                href="/dashboard/crops"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <Wheat className="w-5 h-5" />
                <span>Crop Fields</span>
                <Badge className="ml-auto bg-green-100 text-green-800 text-xs">8 Fields</Badge>
              </Link>
              <Link
                href="/dashboard/livestock"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <Beef className="w-5 h-5" />
                <span>Livestock</span>
                <Badge className="ml-auto bg-amber-100 text-amber-800 text-xs">45 Cattle</Badge>
              </Link>
              <Link
                href="/dashboard/poultry"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <Egg className="w-5 h-5" />
                <span>Poultry</span>
                <Badge className="ml-auto bg-yellow-100 text-yellow-800 text-xs">200 Birds</Badge>
              </Link>
              <Link
                href="/dashboard/aquaculture"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <Fish className="w-5 h-5" />
                <span>Fish Ponds</span>
                <Badge className="ml-auto bg-blue-100 text-blue-800 text-xs">6 Ponds</Badge>
              </Link>
              <Link
                href="/dashboard/predictions"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <Brain className="w-5 h-5" />
                <span>AI Insights</span>
                <Badge className="ml-auto bg-purple-100 text-purple-800 text-xs">94%</Badge>
              </Link>
              <Link
                href="/dashboard/analytics"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <BarChart3 className="w-5 h-5" />
                <span>My Analytics</span>
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Enhanced Welcome Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Good morning, Adebayo! 🌅</h1>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Your diversified farm in Akure is performing excellently today.
                  <span className="ml-2 text-green-600 font-medium">All operations optimal</span>
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Today</div>
                <div className="text-lg font-semibold">
                  {new Date().toLocaleDateString("en-NG", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="text-sm text-gray-500 flex items-center justify-end mt-1">
                  <Sun className="w-4 h-4 mr-1 text-yellow-500" />
                  28°C • Sunny • Perfect for farming
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Key Metrics for All Farm Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">My Credit Score</CardTitle>
                <CreditCard className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">785</div>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +45 points this month
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Operations</CardTitle>
                <Tractor className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-blue-600 flex items-center">
                  <Sprout className="w-3 h-3 mr-1" />
                  Crops, Livestock, Poultry, Fish
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Products Ready</CardTitle>
                <Package className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-green-600 flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Ready for market
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-600" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Month's Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₦4.8M</div>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +22% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Farm Operations Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Crop Fields</CardTitle>
                <Wheat className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-gray-500">Maize, Cassava, Yam, Rice</p>
                <p className="text-xs text-green-600 mt-1">3 ready for harvest</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Livestock</CardTitle>
                <Beef className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-gray-500">Cattle, Goats, Sheep</p>
                <p className="text-xs text-blue-600 mt-1">All healthy</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Poultry</CardTitle>
                <Egg className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">200</div>
                <p className="text-xs text-gray-500">Layers, Broilers</p>
                <p className="text-xs text-amber-600 mt-1">150 eggs/day</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Fish Ponds</CardTitle>
                <Fish className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6</div>
                <p className="text-xs text-gray-500">Catfish, Tilapia</p>
                <p className="text-xs text-purple-600 mt-1">2 ready to harvest</p>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Dashboard Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="finance">My Finance</TabsTrigger>
              <TabsTrigger value="products">My Products</TabsTrigger>
              <TabsTrigger value="operations">Farm Operations</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Enhanced Today's Activities for All Farm Types */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Today's Farm Activities
                    </CardTitle>
                    <CardDescription>Your scheduled tasks across all farm operations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Morning feeding - Fish ponds & Poultry</p>
                        <p className="text-xs text-gray-500">
                          Completed at 6:30 AM • 2.5kg fish feed, 15kg poultry feed
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                      <Clock className="w-5 h-5 text-amber-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Livestock health check</p>
                        <p className="text-xs text-gray-500">Due at 10:00 AM • Cattle vaccination follow-up</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Wheat className="w-5 h-5 text-blue-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Maize field irrigation</p>
                        <p className="text-xs text-gray-500">Scheduled for 2:00 PM • Field 3 & 4</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <Package className="w-5 h-5 text-purple-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Egg collection & packaging</p>
                        <p className="text-xs text-gray-500">Evening collection • Expected 150 eggs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Alerts for All Farm Types */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                      Farm Alerts & Notifications
                    </CardTitle>
                    <CardDescription>Important updates across all your operations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-red-800 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          Urgent: Livestock Water
                        </p>
                        <Badge className="bg-red-100 text-red-800">High Priority</Badge>
                      </div>
                      <p className="text-xs text-red-600">Cattle water trough in Section B is running low</p>
                      <Button size="sm" className="mt-2 bg-red-600 hover:bg-red-700">
                        Refill Now
                      </Button>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-blue-800 flex items-center">
                          <Wheat className="w-4 h-4 mr-1" />
                          Harvest Ready
                        </p>
                        <Badge className="bg-blue-100 text-blue-800">Action Needed</Badge>
                      </div>
                      <p className="text-xs text-blue-600">
                        Maize Field 2 ready for harvest • Expected yield: 2.5 tons
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-green-800 flex items-center">
                          <CreditCard className="w-4 h-4 mr-1" />
                          Credit Opportunity
                        </p>
                        <Badge className="bg-green-100 text-green-800">Good News</Badge>
                      </div>
                      <p className="text-xs text-green-600">You qualify for ₦500K expansion loan at 7.5% APR</p>
                      <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Multi-Farm Performance Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-green-600" />
                      Multi-Farm Performance
                    </CardTitle>
                    <CardDescription>Your productivity metrics across all operations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="flex items-center">
                            <Wheat className="w-4 h-4 mr-1 text-green-500" />
                            Crop Production
                          </span>
                          <span className="font-medium">8.5 tons / 10 tons target</span>
                        </div>
                        <Progress value={85} className="h-3" />
                        <p className="text-xs text-gray-500 mt-1">85% complete • Excellent season</p>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="flex items-center">
                            <Beef className="w-4 h-4 mr-1 text-amber-500" />
                            Livestock Health
                          </span>
                          <span className="font-medium">98% healthy</span>
                        </div>
                        <Progress value={98} className="h-3" />
                        <p className="text-xs text-gray-500 mt-1">Outstanding health management</p>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="flex items-center">
                            <Egg className="w-4 h-4 mr-1 text-yellow-500" />
                            Egg Production
                          </span>
                          <span className="font-medium">4,200 / 4,500 monthly target</span>
                        </div>
                        <Progress value={93} className="h-3" />
                        <p className="text-xs text-gray-500 mt-1">93% of target achieved</p>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="flex items-center">
                            <Fish className="w-4 h-4 mr-1 text-blue-500" />
                            Fish Production
                          </span>
                          <span className="font-medium">1,200kg / 1,500kg target</span>
                        </div>
                        <Progress value={80} className="h-3" />
                        <p className="text-xs text-gray-500 mt-1">80% complete • On track</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-purple-600" />
                      Sustainability Impact
                    </CardTitle>
                    <CardDescription>Your contribution to sustainable agriculture</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <Leaf className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <span className="text-sm font-medium">Organic Waste Recycled</span>
                            <p className="text-xs text-gray-500">Crop residue → Livestock feed</p>
                          </div>
                        </div>
                        <span className="text-lg font-semibold text-green-600">92%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Droplets className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <span className="text-sm font-medium">Water Conservation</span>
                            <p className="text-xs text-gray-500">Smart irrigation systems</p>
                          </div>
                        </div>
                        <span className="text-lg font-semibold text-blue-600">+45%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <Wind className="w-4 h-4 text-purple-600" />
                          </div>
                          <div>
                            <span className="text-sm font-medium">Carbon Footprint</span>
                            <p className="text-xs text-gray-500">vs traditional farming</p>
                          </div>
                        </div>
                        <span className="text-lg font-semibold text-purple-600">-38%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                            <DollarSign className="w-4 h-4 text-amber-600" />
                          </div>
                          <div>
                            <span className="text-sm font-medium">Cost Efficiency</span>
                            <p className="text-xs text-gray-500">AI optimization</p>
                          </div>
                        </div>
                        <span className="text-lg font-semibold text-amber-600">₦280K</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="finance" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                      My Credit Profile
                    </CardTitle>
                    <CardDescription>Your SmartLoop finance status across all operations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">785</div>
                        <div className="text-sm text-gray-600">Credit Score</div>
                        <div className="text-xs text-green-600 mt-1">+45 this month</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">₦750K</div>
                        <div className="text-sm text-gray-600">Available Credit</div>
                        <div className="text-xs text-blue-600 mt-1">Multi-farm approved</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Current Loans</span>
                        <span className="text-lg font-semibold text-amber-600">₦320,000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Monthly Payment</span>
                        <span className="text-lg font-semibold text-blue-600">₦45,000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Repayment Rate</span>
                        <span className="text-lg font-semibold text-emerald-600">98%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Interest Rate</span>
                        <span className="text-lg font-semibold text-purple-600">7.5% APR</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button className="w-full">Apply for Expansion Credit</Button>
                      <Button variant="outline" className="w-full mt-2 bg-transparent">
                        View Credit History
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-green-600" />
                      Multi-Farm Revenue Cycle
                    </CardTitle>
                    <CardDescription>Diversified income streams and reinvestment</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-blue-800">Total Monthly Revenue</p>
                        <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                      </div>
                      <p className="text-lg font-bold text-blue-900">₦4,800,000</p>
                      <p className="text-xs text-blue-600">₦4,200,000 automatically reinvested (87.5%)</p>
                      <div className="mt-2">
                        <Progress value={87.5} className="h-2" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-sm font-medium text-green-800">Crops</p>
                        <p className="text-lg font-bold text-green-900">₦2.1M</p>
                        <p className="text-xs text-green-600">44% of total revenue</p>
                      </div>
                      <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-sm font-medium text-amber-800">Livestock</p>
                        <p className="text-lg font-bold text-amber-900">₦1.2M</p>
                        <p className="text-xs text-amber-600">25% of total revenue</p>
                      </div>
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm font-medium text-yellow-800">Poultry</p>
                        <p className="text-lg font-bold text-yellow-900">₦800K</p>
                        <p className="text-xs text-yellow-600">17% of total revenue</p>
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm font-medium text-blue-800">Aquaculture</p>
                        <p className="text-lg font-bold text-blue-900">₦700K</p>
                        <p className="text-xs text-blue-600">14% of total revenue</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="products" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Package className="w-5 h-5 mr-2 text-green-600" />
                      My Diversified Products
                    </CardTitle>
                    <CardDescription>Your Agrobrand product portfolio across all operations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border-2 border-green-200 rounded-lg bg-green-50">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Wheat className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Adebayo's Organic Maize</p>
                          <p className="text-sm text-gray-500">2.5 tons ready • QR traced • Premium grade</p>
                          <p className="text-xs text-green-600">Market price: ₦280/kg (+40% premium)</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Ready to Ship</Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 border-2 border-amber-200 rounded-lg bg-amber-50">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                          <Beef className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-medium">Grass-Fed Beef</p>
                          <p className="text-sm text-gray-500">500kg processed • Organic certified</p>
                          <p className="text-xs text-amber-600">Premium quality: ₦3,500/kg</p>
                        </div>
                      </div>
                      <Badge className="bg-amber-100 text-amber-800">Processing</Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 border-2 border-yellow-200 rounded-lg bg-yellow-50">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <Egg className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-medium">Free-Range Eggs</p>
                          <p className="text-sm text-gray-500">4,200 eggs/month • Omega-3 enriched</p>
                          <p className="text-xs text-yellow-600">Consistent supply: ₁50/egg</p>
                        </div>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">Daily Production</Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 border-2 border-blue-200 rounded-lg bg-blue-50">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Fish className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Fresh Akure Catfish</p>
                          <p className="text-sm text-gray-500">300kg • Farm-to-fork traced</p>
                          <p className="text-xs text-blue-600">Pre-orders: 8 customers waiting</p>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Harvesting</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                      Product Performance Analytics
                    </CardTitle>
                    <CardDescription>Customer feedback and market performance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="flex items-center justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-2xl font-bold text-yellow-600">4.9</p>
                        <p className="text-sm text-gray-600">Customer Rating</p>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-2xl font-bold text-blue-600">2,847</p>
                        <p className="text-sm text-gray-600">QR Code Scans</p>
                        <p className="text-xs text-blue-500">+35% this week</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-2xl font-bold text-green-600">₦185K</p>
                        <p className="text-sm text-gray-600">Brand Premium</p>
                        <p className="text-xs text-green-500">This month</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="text-2xl font-bold text-purple-600">15</p>
                        <p className="text-sm text-gray-600">Retail Partners</p>
                        <p className="text-xs text-purple-500">+5 new this month</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Product Traceability</span>
                        <span className="text-sm font-semibold text-green-600">97% Coverage</span>
                      </div>
                      <Progress value={97} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Customer Retention</span>
                        <span className="text-sm font-semibold text-blue-600">91% Return Rate</span>
                      </div>
                      <Progress value={91} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Market Penetration</span>
                        <span className="text-sm font-semibold text-purple-600">18% Local Share</span>
                      </div>
                      <Progress value={18} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="operations" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Crop Fields */}
                <Card className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600" />
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Wheat className="w-5 h-5 mr-2" />
                        Crop Fields
                      </span>
                      <Badge className="bg-green-100 text-green-800">8 Active</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Maize (4 fields)</span>
                        <span className="text-green-600">85% ready</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cassava (2 fields)</span>
                        <span className="text-blue-600">Growing</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Yam (1 field)</span>
                        <span className="text-amber-600">Planted</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rice (1 field)</span>
                        <span className="text-purple-600">Flowering</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full">
                      View All Fields
                    </Button>
                  </CardContent>
                </Card>

                {/* Livestock */}
                <Card className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600" />
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Beef className="w-5 h-5 mr-2" />
                        Livestock
                      </span>
                      <Badge className="bg-amber-100 text-amber-800">45 Head</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Cattle</span>
                        <span className="text-green-600">25 healthy</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Goats</span>
                        <span className="text-green-600">15 healthy</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sheep</span>
                        <span className="text-green-600">5 healthy</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Health Status</span>
                        <span className="text-green-600">98% excellent</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full">
                      Manage Livestock
                    </Button>
                  </CardContent>
                </Card>

                {/* Poultry */}
                <Card className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-600" />
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Egg className="w-5 h-5 mr-2" />
                        Poultry
                      </span>
                      <Badge className="bg-yellow-100 text-yellow-800">200 Birds</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Layers</span>
                        <span className="text-green-600">150 active</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Broilers</span>
                        <span className="text-blue-600">50 growing</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Daily Eggs</span>
                        <span className="text-amber-600">140-150</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mortality Rate</span>
                        <span className="text-green-600">&lt; 2%</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full">
                      Poultry Management
                    </Button>
                  </CardContent>
                </Card>

                {/* Aquaculture */}
                <Card className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Fish className="w-5 h-5 mr-2" />
                        Fish Ponds
                      </span>
                      <Badge className="bg-blue-100 text-blue-800">6 Ponds</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Catfish Ponds</span>
                        <span className="text-green-600">4 active</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tilapia Ponds</span>
                        <span className="text-blue-600">2 active</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ready to Harvest</span>
                        <span className="text-amber-600">2 ponds</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Water Quality</span>
                        <span className="text-green-600">Optimal</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full">
                      Pond Management
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-purple-600" />
                      AI Predictions Across All Operations
                    </CardTitle>
                    <CardDescription>Comprehensive insights for your diversified farm</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-medium text-green-800 flex items-center">
                          <Wheat className="w-4 h-4 mr-1" />
                          Crop Yield Forecast
                        </p>
                        <Badge className="bg-green-100 text-green-800">96% Accurate</Badge>
                      </div>
                      <p className="text-lg font-bold text-green-900">8.5 tons expected</p>
                      <p className="text-xs text-green-600">Maize harvest in 2 weeks • Above target yield</p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-medium text-amber-800 flex items-center">
                          <Beef className="w-4 h-4 mr-1" />
                          Livestock Health Prediction
                        </p>
                        <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                      </div>
                      <p className="text-sm text-amber-900">All animals healthy</p>
                      <p className="text-xs text-amber-600">No disease risk detected • Vaccination schedule optimal</p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-medium text-blue-800 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          Market Price Forecast
                        </p>
                        <Badge className="bg-blue-100 text-blue-800">Trending Up</Badge>
                      </div>
                      <p className="text-sm text-blue-900">Multi-commodity price rise</p>
                      <p className="text-xs text-blue-600">Maize +15%, Eggs +8%, Fish +12% expected next month</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-amber-600" />
                      Personalized Farm Recommendations
                    </CardTitle>
                    <CardDescription>AI-powered suggestions for optimization</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <Wheat className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-green-800">Crop Rotation Optimization</p>
                        <p className="text-xs text-green-600 mb-2">
                          Plant legumes in Field 3 after maize harvest to improve soil nitrogen
                        </p>
                        <Button size="sm" variant="outline" className="text-green-600 border-green-300 bg-transparent">
                          Plan Rotation
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <Beef className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-amber-800">Livestock Feed Optimization</p>
                        <p className="text-xs text-amber-600 mb-2">
                          Use crop residue from maize harvest to reduce feed costs by ₦35K/month
                        </p>
                        <Button size="sm" variant="outline" className="text-amber-600 border-amber-300 bg-transparent">
                          Implement Plan
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <CloudRain className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-800">Weather Optimization</p>
                        <p className="text-xs text-blue-600 mb-2">
                          Adjust irrigation schedule - rain expected in 3 days, save ₦15K on water
                        </p>
                        <Button size="sm" variant="outline" className="text-blue-600 border-blue-300 bg-transparent">
                          Update Schedule
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <DollarSign className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-purple-800">Revenue Diversification</p>
                        <p className="text-xs text-purple-600 mb-2">
                          Consider adding beekeeping - high demand for honey in your area
                        </p>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-purple-600 border-purple-300 bg-transparent"
                        >
                          Explore Option
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Multi-Farm AI Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-green-600" />
                    AI System Performance Across Operations
                  </CardTitle>
                  <CardDescription>How our AI is optimizing your diversified farm</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">96%</div>
                      <div className="text-sm text-gray-600">Prediction Accuracy</div>
                      <div className="text-xs text-purple-500 mt-1">Multi-crop forecasting</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">₦280K</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                      <div className="text-xs text-green-500 mt-1">This month</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">47</div>
                      <div className="text-sm text-gray-600">AI Recommendations</div>
                      <div className="text-xs text-blue-500 mt-1">This week</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">8.5hrs</div>
                      <div className="text-sm text-gray-600">Time Saved Daily</div>
                      <div className="text-xs text-amber-500 mt-1">Automation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
