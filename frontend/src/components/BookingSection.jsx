import { useState } from 'react';
import { Calendar, Clock, Video, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const ADVISOR_PHOTO = "https://customer-assets.emergentagent.com/job_purpose-pilot/artifacts/2qw0fvjw_IMG_0158.JPG";

export const BookingSection = ({ onBookingSubmit }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookingStep, setBookingStep] = useState('calendar'); // 'calendar', 'time', 'confirm'

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    
    const days = [];
    
    // Empty slots for days before first of month
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: null, available: false });
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isPast = date < today && date.toDateString() !== today.toDateString();
      const available = !isWeekend && !isPast;
      days.push({ day, date, available });
    }
    
    return days;
  };

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
  ];

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  const handleDateSelect = (day) => {
    if (day.available && day.date) {
      setSelectedDate(day.date);
      setBookingStep('time');
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setBookingStep('confirm');
  };

  const handleConfirmBooking = () => {
    if (onBookingSubmit) {
      onBookingSubmit({ date: selectedDate, time: selectedTime });
    }
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <section id="book-call" className="section-padding" data-testid="booking-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left - Advisor Info */}
        <div>
          <span className="inline-block bg-[#00A896] text-white px-4 py-2 rounded-full border-2 border-[#111827] font-semibold text-sm mb-4" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
            1-on-1 Guidance
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827] mb-6"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Book Your
            <br />
            <span className="text-[#00A896]">Pathway Call</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Ready to go deeper? Schedule a personalized session with our expert Pathway Advisor 
            who will help you navigate your unique journey with cultural awareness and practical guidance.
          </p>

          {/* Advisor Card */}
          <div className="neo-card p-6 flex items-start gap-6" data-testid="advisor-card">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl border-2 border-[#111827] overflow-hidden flex-shrink-0" style={{ boxShadow: '3px 3px 0 0 #111827' }}>
              <img 
                src={ADVISOR_PHOTO} 
                alt="Pathway Advisor" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111827] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Dr. Patricia Williams
              </h3>
              <p className="text-[#00A896] font-semibold text-sm mb-3">Senior Pathway Advisor</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                20+ years guiding young adults through career transitions. Specializes in 
                culturally-informed coaching and neurodivergent-friendly approaches.
              </p>
            </div>
          </div>

          {/* Call Benefits */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFD166] rounded-lg border-2 border-[#111827] flex items-center justify-center" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
                <Video strokeWidth={2.5} size={20} className="text-[#111827]" />
              </div>
              <span className="font-medium text-[#111827]">30-minute video call via Zoom or Teams</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#02C39A] rounded-lg border-2 border-[#111827] flex items-center justify-center" style={{ boxShadow: '2px 2px 0 0 #111827' }}>
                <Calendar strokeWidth={2.5} size={20} className="text-white" />
              </div>
              <span className="font-medium text-[#111827]">Synced with Microsoft Outlook Calendar</span>
            </div>
          </div>
        </div>

        {/* Right - Calendar Booking */}
        <div className="neo-card p-6 md:p-8" data-testid="booking-calendar">
          {bookingStep === 'calendar' && (
            <>
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#111827]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Select a Date
                </h3>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                    className="w-10 h-10 rounded-lg border-2 border-[#111827] flex items-center justify-center hover:bg-gray-100 transition-colors"
                    data-testid="prev-month-btn"
                  >
                    <ChevronLeft strokeWidth={2.5} size={20} />
                  </button>
                  <span className="font-semibold text-[#111827] min-w-[140px] text-center">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </span>
                  <button 
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                    className="w-10 h-10 rounded-lg border-2 border-[#111827] flex items-center justify-center hover:bg-gray-100 transition-colors"
                    data-testid="next-month-btn"
                  >
                    <ChevronRight strokeWidth={2.5} size={20} />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-semibold text-gray-500 py-2">
                    {day}
                  </div>
                ))}
                {generateCalendarDays().map((day, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDateSelect(day)}
                    disabled={!day.available}
                    className={`aspect-square rounded-lg font-semibold text-sm transition-all ${
                      day.day === null 
                        ? 'invisible' 
                        : day.available
                          ? 'border-2 border-[#111827] hover:bg-[#00A896] hover:text-white cursor-pointer'
                          : 'text-gray-300 cursor-not-allowed'
                    } ${selectedDate?.getDate() === day.day && selectedDate?.getMonth() === currentMonth.getMonth() ? 'bg-[#00A896] text-white' : ''}`}
                    style={day.available ? { boxShadow: '2px 2px 0 0 #111827' } : {}}
                    data-testid={day.day ? `calendar-day-${day.day}` : undefined}
                  >
                    {day.day}
                  </button>
                ))}
              </div>

              <p className="text-sm text-gray-500 text-center">
                Available Monday - Friday, 9 AM - 5 PM EST
              </p>
            </>
          )}

          {bookingStep === 'time' && (
            <>
              <button 
                onClick={() => setBookingStep('calendar')}
                className="flex items-center gap-2 text-[#00A896] font-semibold mb-6 hover:underline"
                data-testid="back-to-calendar-btn"
              >
                <ChevronLeft strokeWidth={2.5} size={20} />
                Back to Calendar
              </button>

              <h3 className="text-xl font-bold text-[#111827] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Select a Time
              </h3>
              <p className="text-gray-600 mb-6">{formatDate(selectedDate)}</p>

              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`p-4 rounded-lg border-2 border-[#111827] font-semibold transition-all hover:bg-[#00A896] hover:text-white ${
                      selectedTime === time ? 'bg-[#00A896] text-white' : ''
                    }`}
                    style={{ boxShadow: '2px 2px 0 0 #111827' }}
                    data-testid={`time-slot-${time.replace(/[: ]/g, '-').toLowerCase()}`}
                  >
                    <Clock strokeWidth={2.5} size={16} className="inline mr-2" />
                    {time}
                  </button>
                ))}
              </div>
            </>
          )}

          {bookingStep === 'confirm' && (
            <div className="text-center" data-testid="booking-confirmation">
              <div className="w-20 h-20 bg-[#00A896] rounded-full border-2 border-[#111827] flex items-center justify-center mx-auto mb-6" style={{ boxShadow: '4px 4px 0 0 #111827' }}>
                <Calendar strokeWidth={2.5} size={36} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#111827] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Confirm Your Booking
              </h3>
              
              <div className="neo-card-yellow p-4 mb-6 text-left">
                <p className="font-bold mb-1">{formatDate(selectedDate)}</p>
                <p className="font-semibold">{selectedTime} EST</p>
                <p className="text-sm mt-2">30-minute video call with Dr. Patricia Williams</p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleConfirmBooking}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  data-testid="confirm-booking-btn"
                >
                  <Check strokeWidth={2.5} size={20} />
                  Confirm Booking
                </button>
                <button
                  onClick={() => setBookingStep('time')}
                  className="btn-secondary w-full"
                  data-testid="change-time-btn"
                >
                  Change Time
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                You'll receive a confirmation email with Zoom/Teams link
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
