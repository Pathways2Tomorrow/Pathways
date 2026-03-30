import requests
import sys
import json
from datetime import datetime

class PursuingSolutionsAPITester:
    def __init__(self, base_url="https://purpose-pilot.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.token = None
        self.user_data = None
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, success, details=""):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
        
        result = {
            "test": name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        
        status = "✅ PASSED" if success else "❌ FAILED"
        print(f"{status} - {name}")
        if details:
            print(f"   Details: {details}")

    def test_health_check(self):
        """Test basic health endpoint"""
        try:
            response = requests.get(f"{self.api_url}/health", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            if success:
                data = response.json()
                details += f", Response: {data}"
            self.log_test("Health Check", success, details)
            return success
        except Exception as e:
            self.log_test("Health Check", False, f"Error: {str(e)}")
            return False

    def test_root_endpoint(self):
        """Test root API endpoint"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            if success:
                data = response.json()
                details += f", Message: {data.get('message', 'No message')}"
            self.log_test("Root Endpoint", success, details)
            return success
        except Exception as e:
            self.log_test("Root Endpoint", False, f"Error: {str(e)}")
            return False

    def test_user_registration(self):
        """Test user registration"""
        test_user = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "email": f"test_{datetime.now().strftime('%H%M%S')}@example.com",
            "password": "TestPass123!"
        }
        
        try:
            response = requests.post(
                f"{self.api_url}/auth/register",
                json=test_user,
                timeout=10
            )
            
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                self.token = data.get('access_token')
                self.user_data = data.get('user')
                details += f", User ID: {self.user_data.get('id') if self.user_data else 'None'}"
                details += f", Token received: {'Yes' if self.token else 'No'}"
            else:
                try:
                    error_data = response.json()
                    details += f", Error: {error_data.get('detail', 'Unknown error')}"
                except:
                    details += f", Raw response: {response.text[:100]}"
            
            self.log_test("User Registration", success, details)
            return success
            
        except Exception as e:
            self.log_test("User Registration", False, f"Error: {str(e)}")
            return False

    def test_user_login(self):
        """Test user login with registered user"""
        if not self.user_data:
            self.log_test("User Login", False, "No user data from registration")
            return False
            
        login_data = {
            "email": self.user_data['email'],
            "password": "TestPass123!"
        }
        
        try:
            response = requests.post(
                f"{self.api_url}/auth/login",
                json=login_data,
                timeout=10
            )
            
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                login_token = data.get('access_token')
                details += f", Token received: {'Yes' if login_token else 'No'}"
                details += f", User ID matches: {data.get('user', {}).get('id') == self.user_data.get('id')}"
            else:
                try:
                    error_data = response.json()
                    details += f", Error: {error_data.get('detail', 'Unknown error')}"
                except:
                    details += f", Raw response: {response.text[:100]}"
            
            self.log_test("User Login", success, details)
            return success
            
        except Exception as e:
            self.log_test("User Login", False, f"Error: {str(e)}")
            return False

    def test_auth_me_endpoint(self):
        """Test getting current user info"""
        if not self.token:
            self.log_test("Auth Me Endpoint", False, "No token available")
            return False
            
        try:
            headers = {'Authorization': f'Bearer {self.token}'}
            response = requests.get(
                f"{self.api_url}/auth/me",
                headers=headers,
                timeout=10
            )
            
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", User ID: {data.get('id')}"
                details += f", Email: {data.get('email')}"
            else:
                try:
                    error_data = response.json()
                    details += f", Error: {error_data.get('detail', 'Unknown error')}"
                except:
                    details += f", Raw response: {response.text[:100]}"
            
            self.log_test("Auth Me Endpoint", success, details)
            return success
            
        except Exception as e:
            self.log_test("Auth Me Endpoint", False, f"Error: {str(e)}")
            return False

    def test_newsletter_subscription(self):
        """Test newsletter subscription"""
        newsletter_data = {
            "email": f"newsletter_{datetime.now().strftime('%H%M%S')}@example.com"
        }
        
        try:
            response = requests.post(
                f"{self.api_url}/newsletter",
                json=newsletter_data,
                timeout=10
            )
            
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", Message: {data.get('message', 'No message')}"
            else:
                try:
                    error_data = response.json()
                    details += f", Error: {error_data.get('detail', 'Unknown error')}"
                except:
                    details += f", Raw response: {response.text[:100]}"
            
            self.log_test("Newsletter Subscription", success, details)
            return success
            
        except Exception as e:
            self.log_test("Newsletter Subscription", False, f"Error: {str(e)}")
            return False

    def test_booking_creation(self):
        """Test booking creation"""
        booking_data = {
            "date": "2024-12-20T10:00:00Z",
            "time": "10:00 AM",
            "user_email": self.user_data.get('email') if self.user_data else "test@example.com",
            "user_name": self.user_data.get('name') if self.user_data else "Test User"
        }
        
        try:
            headers = {}
            if self.token:
                headers['Authorization'] = f'Bearer {self.token}'
                
            response = requests.post(
                f"{self.api_url}/bookings",
                json=booking_data,
                headers=headers,
                timeout=10
            )
            
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", Booking ID: {data.get('id')}"
                details += f", Status: {data.get('status')}"
            else:
                try:
                    error_data = response.json()
                    details += f", Error: {error_data.get('detail', 'Unknown error')}"
                except:
                    details += f", Raw response: {response.text[:100]}"
            
            self.log_test("Booking Creation", success, details)
            return success
            
        except Exception as e:
            self.log_test("Booking Creation", False, f"Error: {str(e)}")
            return False

    def test_get_bookings(self):
        """Test getting user bookings"""
        if not self.token:
            self.log_test("Get Bookings", False, "No token available")
            return False
            
        try:
            headers = {'Authorization': f'Bearer {self.token}'}
            response = requests.get(
                f"{self.api_url}/bookings",
                headers=headers,
                timeout=10
            )
            
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", Bookings count: {len(data) if isinstance(data, list) else 'Not a list'}"
            else:
                try:
                    error_data = response.json()
                    details += f", Error: {error_data.get('detail', 'Unknown error')}"
                except:
                    details += f", Raw response: {response.text[:100]}"
            
            self.log_test("Get Bookings", success, details)
            return success
            
        except Exception as e:
            self.log_test("Get Bookings", False, f"Error: {str(e)}")
            return False

    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting Pursuing Solutions API Tests")
        print(f"Testing against: {self.api_url}")
        print("=" * 50)
        
        # Basic connectivity tests
        self.test_health_check()
        self.test_root_endpoint()
        
        # Auth flow tests
        self.test_user_registration()
        self.test_user_login()
        self.test_auth_me_endpoint()
        
        # Feature tests
        self.test_newsletter_subscription()
        self.test_booking_creation()
        self.test_get_bookings()
        
        # Summary
        print("\n" + "=" * 50)
        print(f"📊 Test Results: {self.tests_passed}/{self.tests_run} passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed!")
            return True
        else:
            print("⚠️  Some tests failed. Check details above.")
            return False

def main():
    tester = PursuingSolutionsAPITester()
    success = tester.run_all_tests()
    
    # Save detailed results
    with open('/app/backend_test_results.json', 'w') as f:
        json.dump({
            'summary': {
                'total_tests': tester.tests_run,
                'passed_tests': tester.tests_passed,
                'success_rate': f"{(tester.tests_passed/tester.tests_run*100):.1f}%" if tester.tests_run > 0 else "0%",
                'timestamp': datetime.now().isoformat()
            },
            'test_results': tester.test_results
        }, f, indent=2)
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())