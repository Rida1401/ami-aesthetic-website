import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong.</h1>
          <p className="text-gray-600 mb-8">We apologize for the inconvenience. Please try refreshing the page.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Refresh Page
          </button>
          
          {/* Debugging Information */}
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left max-w-2xl w-full overflow-auto">
            <p className="text-red-800 font-bold text-sm mb-2">Error Details:</p>
            <pre className="text-xs text-red-700 font-mono whitespace-pre-wrap">{this.state.error && this.state.error.toString()}</pre>
          </div>

          <Link to="/" className="mt-4 text-blue-600 hover:underline">Go back home</Link>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;