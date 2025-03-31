import React from 'react';
import { ArrowRight, BookOpen, Users, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-blue-900/75"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Osis English Academy</h1>
            <p className="text-xl mb-8">Empowering students to master English through innovative learning methods</p>
            <Link 
              to="/courses" 
              className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Our Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Osis English Academy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <BookOpen className="h-12 w-12 mx-auto text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Curriculum</h3>
              <p className="text-gray-600">Comprehensive learning materials designed by industry experts</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Small Class Sizes</h3>
              <p className="text-gray-600">Personalized attention with maximum 12 students per class</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Morning, afternoon, and evening classes available</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified Teachers</h3>
              <p className="text-gray-600">Native speakers with TEFL certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your English Journey?</h2>
          <p className="text-xl mb-8">Join thousands of successful students who have transformed their English skills with us</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;