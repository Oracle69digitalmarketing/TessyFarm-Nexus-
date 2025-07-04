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
  Thermometer,
  Droplets,
  Wind,
  Sun,
  CloudRain,
  Activity,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingDown,
  Zap,
  Leaf,
  Star,
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
                <Fish className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-green-800">TessyFarm Nexus</span>
                <div className="text-xs text-gray-500">Unified AI Platform</div>
              </div>
            </Link>
            <Badge variant="secondary">Farmer Dashboard</Badge>
            <Badge className="bg-green-100 text-green-800">All Systems Active</Badge>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
            <Button variant="ghost" size="icon" title="Voice Assistant (Yoruba/English)">
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
        {/* Enhanced Sidebar */}
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
                <Badge className="ml-auto bg-green-100 text-green-800 text-xs">12</Badge>
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
                <Badge className="ml-auto bg-purple-100 text-purple-800 text-xs">3 Orders</Badge>
              </Link>
            </div>

            {/* Farm Management */}
            <div className="pt-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center">
                <Fish className="w-3 h-3 mr-1" />
                Farm Management
              </div>
              <Link
                href="/dashboard/ponds"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <Fish className="w-5 h-5" />
                <span>My Ponds</span>
                <Badge className="ml-auto bg-blue-100 text-blue-800 text-xs">6 Active</Badge>
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
                  Your farm in Akure is performing excellently today.
                  <span className="ml-2 text-green-600 font-medium">All systems optimal</span>
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
                  28°C • Sunny
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Key Metrics */}
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
                <CardTitle className="text-sm font-medium">Active Ponds</CardTitle>
                <Fish className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6</div>
                <p className="text-xs text-amber-600 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />2 ready for harvest
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
                <div className="text-2xl font-bold">12</div>
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
                <div className="text-2xl font-bold">₦3.2M</div>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +18% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Weather & Environmental Conditions */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Temperature</CardTitle>
                <Thermometer className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28°C</div>
                <p className="text-xs text-gray-500">Optimal range</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Humidity</CardTitle>
                <Droplets className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">72%</div>
                <p className="text-xs text-gray-500">Good for fish</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Wind Speed</CardTitle>
                <Wind className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12 km/h</div>
                <p className="text-xs text-gray-500">Light breeze</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rain Forecast</CardTitle>
                <CloudRain className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15%</div>
                <p className="text-xs text-gray-500">Low chance</p>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Dashboard Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="finance">My Finance</TabsTrigger>
              <TabsTrigger value="products">My Products</TabsTrigger>
              <TabsTrigger value="farm">My Farm</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Enhanced Today's Activities */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Today's Activities
                    </CardTitle>
                    <CardDescription>Your scheduled farm tasks and progress</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Morning feeding - Pond 3 & 4</p>
                        <p className="text-xs text-gray-500">Completed at 7:30 AM • 2.5kg feed used</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                      <Clock className="w-5 h-5 text-amber-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Water quality check - All ponds</p>
                        <p className="text-xs text-gray-500">Due at 2:00 PM • pH and oxygen levels</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Package className="w-5 h-5 text-blue-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Fertilizer packaging</p>
                        <p className="text-xs text-gray-500">Scheduled for 4:00 PM • 50kg batch</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <ShoppingCart className="w-5 h-5 text-purple-500" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Marketplace order delivery</p>
                        <p className="text-xs text-gray-500">Tomorrow 9:00 AM • Lagos customer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Personal Alerts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                      Your Alerts & Notifications
                    </CardTitle>
                    <CardDescription>Important updates for your farm</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-red-800 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          Urgent: Feed Schedule
                        </p>
                        <Badge className="bg-red-100 text-red-800">High Priority</Badge>
                      </div>
                      <p className="text-xs text-red-600">Pond 5 evening feeding overdue by 30 minutes</p>
                      <Button size="sm" className="mt-2 bg-red-600 hover:bg-red-700">
                        Mark as Done
                      </Button>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-blue-800 flex items-center">
                          <Fish className="w-4 h-4 mr-1" />
                          Harvest Ready
                        </p>
                        <Badge className="bg-blue-100 text-blue-800">Action Needed</Badge>
                      </div>
                      <p className="text-xs text-blue-600">
                        Pond 2 fish ready for harvest in 3 days • Expected yield: 180kg
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
                      <p className="text-xs text-green-600">You qualify for ₦200K expansion loan at 8% APR</p>
                      <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Performance Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-green-600" />
                      My Farm Performance
                    </CardTitle>
                    <CardDescription>Your productivity metrics this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="flex items-center">
                            <Fish className="w-4 h-4 mr-1 text-blue-500" />
                            Fish Production
                          </span>
                          <span className="font-medium">1,200kg / 1,500kg target</span>
                        </div>
                        <Progress value={80} className="h-3" />
                        <p className="text-xs text-gray-500 mt-1">80% complete • On track for target</p>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="flex items-center">
                            <Leaf className="w-4 h-4 mr-1 text-green-500" />
                            Fertilizer Production
                          </span>
                          <span className="font-medium">450kg / 500kg target</span>
                        </div>
                        <Progress value={90} className="h-3" />
                        <p className="text-xs text-gray-500 mt-1">90% complete • Ahead of schedule</p>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1 text-emerald-500" />
                            Revenue Target
                          </span>
                          <span className="font-medium">₦3.2M / ₦4M target</span>
                        </div>
                        <Progress value={80} className="h-3" />
                        <p className="text-xs text-gray-500 mt-1">80% complete • Strong performance</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-purple-600" />
                      My Sustainability Impact
                    </CardTitle>
                    <CardDescription>Your contribution to circular economy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <Leaf className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <span className="text-sm font-medium">Waste Recycled</span>
                            <p className="text-xs text-gray-500">Fish waste → Fertilizer</p>
                          </div>
                        </div>
                        <span className="text-lg font-semibold text-green-600">85%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <TrendingDown className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <span className="text-sm font-medium">Cost Savings</span>
                            <p className="text-xs text-gray-500">AI optimization</p>
                          </div>
                        </div>
                        <span className="text-lg font-semibold text-blue-600">₦180K</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <Wind className="w-4 h-4 text-purple-600" />
                          </div>
                          <div>
                            <span className="text-sm font-medium">Carbon Reduction</span>
                            <p className="text-xs text-gray-500">vs traditional farming</p>
                          </div>
                        </div>
                        <span className="text-lg font-semibold text-purple-600">-45%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                            <Droplets className="w-4 h-4 text-teal-600" />
                          </div>
                          <div>
                            <span className="text-sm font-medium">Water Efficiency</span>
                            <p className="text-xs text-gray-500">Smart irrigation</p>
                          </div>
                        </div>
                        <span className="text-lg font-semibold text-teal-600">+38%</span>
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
                    <CardDescription>Your SmartLoop finance status and history</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">785</div>
                        <div className="text-sm text-gray-600">Credit Score</div>
                        <div className="text-xs text-green-600 mt-1">+45 this month</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">₦450K</div>
                        <div className="text-sm text-gray-600">Available Credit</div>
                        <div className="text-xs text-blue-600 mt-1">Pre-approved</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Current Loans</span>
                        <span className="text-lg font-semibold text-amber-600">₦180,000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Monthly Payment</span>
                        <span className="text-lg font-semibold text-blue-600">₦25,000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Repayment Rate</span>
                        <span className="text-lg font-semibold text-emerald-600">98%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Interest Rate</span>
                        <span className="text-lg font-semibold text-purple-600">8.5% APR</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button className="w-full">Apply for New Credit</Button>
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
                      My Revenue Cycle
                    </CardTitle>
                    <CardDescription>Automatic reinvestment tracking and optimization</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-blue-800">Current Cycle Revenue</p>
                        <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                      </div>
                      <p className="text-lg font-bold text-blue-900">₦320,000 earned</p>
                      <p className="text-xs text-blue-600">₦280,000 automatically reinvested (87.5%)</p>
                      <div className="mt-2">
                        <Progress value={87.5} className="h-2" />
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-green-800">Next Investment</p>
                        <Badge className="bg-green-100 text-green-800">Scheduled</Badge>
                      </div>
                      <p className="text-sm text-green-900">Feed purchase - ₦45,000</p>
                      <p className="text-xs text-green-600">Scheduled for next week • Premium quality feed</p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-purple-800">Growth Projection</p>
                        <Badge className="bg-purple-100 text-purple-800">AI Forecast</Badge>
                      </div>
                      <p className="text-sm text-purple-900">+15% yield increase expected</p>
                      <p className="text-xs text-purple-600">Based on current reinvestment pattern</p>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900">6</div>
                          <div className="text-xs text-gray-600">Completed Cycles</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">₦1.8M</div>
                          <div className="text-xs text-gray-600">Total Reinvested</div>
                        </div>
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
                      My Branded Products
                    </CardTitle>
                    <CardDescription>Your Agrobrand product inventory and status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border-2 border-green-200 rounded-lg bg-green-50">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <QrCode className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Adebayo's Organic Fertilizer</p>
                          <p className="text-sm text-gray-500">500kg ready • QR traced • Premium grade</p>
                          <p className="text-xs text-green-600">Market price: ₦180/kg (+35% premium)</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Ready to Ship</Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 border-2 border-blue-200 rounded-lg bg-blue-50">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Package className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Premium Fish Feed</p>
                          <p className="text-sm text-gray-500">200kg packaged • Your brand • High protein</p>
                          <p className="text-xs text-blue-600">Cost savings: ₦25/kg vs market</p>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Processing</Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 border-2 border-purple-200 rounded-lg bg-purple-50">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Fish className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium">Fresh Akure Catfish</p>
                          <p className="text-sm text-gray-500">300kg • Farm-to-fork traced • Grade A</p>
                          <p className="text-xs text-purple-600">Pre-orders: 5 customers waiting</p>
                        </div>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">Harvesting</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                      My Product Performance
                    </CardTitle>
                    <CardDescription>Customer feedback, sales, and market impact</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="flex items-center justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-2xl font-bold text-yellow-600">4.8</p>
                        <p className="text-sm text-gray-600">Customer Rating</p>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-2xl font-bold text-blue-600">1,247</p>
                        <p className="text-sm text-gray-600">QR Code Scans</p>
                        <p className="text-xs text-blue-500">+23% this week</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-2xl font-bold text-green-600">₦95K</p>
                        <p className="text-sm text-gray-600">Brand Premium</p>
                        <p className="text-xs text-green-500">This month</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="text-2xl font-bold text-purple-600">8</p>
                        <p className="text-sm text-gray-600">Retail Partners</p>
                        <p className="text-xs text-purple-500">+2 new this month</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Product Traceability</span>
                        <span className="text-sm font-semibold text-green-600">95% Coverage</span>
                      </div>
                      <Progress value={95} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Customer Retention</span>
                        <span className="text-sm font-semibold text-blue-600">87% Return Rate</span>
                      </div>
                      <Progress value={87} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Market Penetration</span>
                        <span className="text-sm font-semibold text-purple-600">12% Local Share</span>
                      </div>
                      <Progress value={12} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="farm" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((pond) => (
                  <Card key={pond} className="relative overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 w-full h-1 ${
                        pond <= 4
                          ? "bg-gradient-to-r from-green-500 to-emerald-600"
                          : "bg-gradient-to-r from-gray-400 to-gray-500"
                      }`}
                    />
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="flex items-center">
                          <Fish className="w-5 h-5 mr-2" />
                          Pond {pond}
                        </span>
                        <Badge variant={pond <= 4 ? "default" : "secondary"}>
                          {pond <= 4 ? "Active" : "Maintenance"}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Thermometer className="w-4 h-4 text-orange-500" />
                          <div>
                            <span className="text-gray-500">Temperature</span>
                            <p className="font-medium">28.{pond}°C</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Activity className="w-4 h-4 text-blue-500" />
                          <div>
                            <span className="text-gray-500">pH Level</span>
                            <p className="font-medium">7.{pond}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Wind className="w-4 h-4 text-teal-500" />
                          <div>
                            <span className="text-gray-500">Oxygen</span>
                            <p className="font-medium">8.{pond}mg/L</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Fish className="w-4 h-4 text-green-500" />
                          <div>
                            <span className="text-gray-500">Fish Count</span>
                            <p className="font-medium">{150 + pond * 20}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Growth Progress</span>
                          <span className="font-medium">{60 + pond * 5}%</span>
                        </div>
                        <Progress value={60 + pond * 5} className="h-3" />
                        <p className="text-xs text-gray-500 mt-1">
                          {pond <= 2 ? "Ready for harvest soon" : pond <= 4 ? "Growing well" : "Under maintenance"}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-purple-600" />
                      AI Predictions for Your Farm
                    </CardTitle>
                    <CardDescription>Personalized insights and forecasts powered by machine learning</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-medium text-purple-800 flex items-center">
                          <Fish className="w-4 h-4 mr-1" />
                          Your Yield Forecast
                        </p>
                        <Badge className="bg-purple-100 text-purple-800">94% Accurate</Badge>
                      </div>
                      <p className="text-lg font-bold text-purple-900">1,850kg expected</p>
                      <p className="text-xs text-purple-600">From Pond 2 in 6 days • Based on current growth rate</p>
                      <div className="mt-2 flex items-center space-x-2">
                        <Progress value={85} className="flex-1 h-2" />
                        <span className="text-xs text-purple-600">85% ready</span>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-medium text-green-800 flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-1" />
                          Disease Risk Assessment
                        </p>
                        <Badge className="bg-green-100 text-green-800">Low Risk</Badge>
                      </div>
                      <p className="text-sm text-green-900">All ponds healthy</p>
                      <p className="text-xs text-green-600">Water quality optimal, no disease indicators detected</p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-medium text-blue-800 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          Market Price Forecast
                        </p>
                        <Badge className="bg-blue-100 text-blue-800">Trending Up</Badge>
                      </div>
                      <p className="text-sm text-blue-900">₦850/kg expected</p>
                      <p className="text-xs text-blue-600">
                        Catfish prices in Akure market expected to rise 12% next week
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-amber-600" />
                      Personalized Recommendations
                    </CardTitle>
                    <CardDescription>AI-powered suggestions tailored to your farm</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <Brain className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-purple-800">Feed Optimization</p>
                        <p className="text-xs text-purple-600 mb-2">
                          Reduce protein by 2% in Pond 4 feed to save ₦15K without affecting growth
                        </p>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-purple-600 border-purple-300 bg-transparent"
                        >
                          Apply Recommendation
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <CloudRain className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-800">Weather Alert</p>
                        <p className="text-xs text-blue-600 mb-2">
                          Heavy rains expected tomorrow - cover Pond 2 and 3 to prevent overflow
                        </p>
                        <Button size="sm" variant="outline" className="text-blue-600 border-blue-300 bg-transparent">
                          Set Reminder
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-green-800">Growth Acceleration</p>
                        <p className="text-xs text-green-600 mb-2">
                          Increase feeding frequency by 15% in Pond 1 for optimal growth rate
                        </p>
                        <Button size="sm" variant="outline" className="text-green-600 border-green-300 bg-transparent">
                          Update Schedule
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <DollarSign className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-amber-800">Market Opportunity</p>
                        <p className="text-xs text-amber-600 mb-2">
                          High demand for organic fertilizer in Ibadan - consider expanding production
                        </p>
                        <Button size="sm" variant="outline" className="text-amber-600 border-amber-300 bg-transparent">
                          Explore Market
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* AI Performance Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-green-600" />
                    AI System Performance
                  </CardTitle>
                  <CardDescription>How our AI is helping optimize your farm operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">94%</div>
                      <div className="text-sm text-gray-600">Prediction Accuracy</div>
                      <div className="text-xs text-purple-500 mt-1">Yield forecasting</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">₦180K</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                      <div className="text-xs text-green-500 mt-1">This month</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">23</div>
                      <div className="text-sm text-gray-600">AI Recommendations</div>
                      <div className="text-xs text-blue-500 mt-1">This week</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">6.5hrs</div>
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
