import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ArrowRight, Star, Users, Zap } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-rLrcvDcvisW6Io0FOgsRuTl6/user-HUvCoz1lRT8paqE04sR0GEIe/img-61cImxAG8DlOzUwAnhs2jYLY.png?st=2025-08-26T19%3A09%3A54Z&se=2025-08-26T21%3A09%3A54Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=b2c0e1c0-cf97-4e19-8986-8073905d5723&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-25T20%3A35%3A58Z&ske=2025-08-26T20%3A35%3A58Z&sks=b&skv=2024-08-04&sig=paAVUQ4WJ8YUB4B4AWZ6ns7ydv7uWi1TXn0UDECr998%3D" alt="NovaSphere_bqdm" width={40} height={40} className="rounded-lg" />
            <h1 className="text-2xl font-bold text-gray-900">NovaSphere_bqdm</h1>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            NovaSphere_bqdm is a complete SaaS B2B system for booking services, featuring a dashboard, API, and multiple integrations. It allows businesses to manage their service bookings, payments, and customer relationships in a centralized platform.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The ultimate business management software solution for modern businesses, designed for small and medium-sized businesses offering various services.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">10k+</div>
              <div className="text-gray-600">Active Users</div>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-gray-600">User Rating</div>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Intuitive booking system with real-time availability and scheduling</h3>
            <p className="text-gray-600">
              Powerful intuitive booking system with real-time availability and scheduling functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrated payment processing and invoicing</h3>
            <p className="text-gray-600">
              Powerful integrated payment processing and invoicing functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer relationship management (CRM) tools</h3>
            <p className="text-gray-600">
              Powerful customer relationship management (crm) tools functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed reporting and analytics</h3>
            <p className="text-gray-600">
              Powerful detailed reporting and analytics functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customizable branding and white-labeling options</h3>
            <p className="text-gray-600">
              Powerful customizable branding and white-labeling options functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">API integration for third-party software and services</h3>
            <p className="text-gray-600">
              Powerful api integration for third-party software and services functionality designed for modern businesses.
            </p>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2024 NovaSphere_bqdm. Generated by Go To Factory.</p>
        </div>
      </footer>
    </div>
  )
}